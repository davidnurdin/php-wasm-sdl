/*
 * Commandes à l'écran, converties en vrais événements clavier pour SDL : le jeu reçoit exactement les
 * mêmes touches qu'au clavier (saut à hauteur variable, roulade, menus, saisie du nom...).
 *
 * Tactile (mobile / tablette uniquement), une couche transparente au-dessus du canvas :
 *   - croix directionnelle dessinée en bas à gauche (et bouton A en bas à droite : on joue à deux mains) :
 *     un doigt posé dessus donne la direction de son bras, comme une vraie croix ;
 *   - glisser n'importe où ailleurs = croix "flottante" : quelques pixels suffisent, le point
 *     d'ancrage suit le doigt, donc repartir dans l'autre sens réagit tout de suite ;
 *     gauche/droite = courir, bas = rouler / s'accroupir, haut = regarder en haut (flèches dans les menus) ;
 *   - tap = Espace (saut en jeu, Entrée dans les menus, passe la démo) ;
 *   - bouton rond en bas à droite, ou un 2e doigt n'importe où = Espace maintenu tant que le doigt
 *     reste posé (saut immédiat, plus haut si on reste appuyé) ;
 *   - les événements tactiles n'atteignent plus le canvas : InputTouchpad (PHP) ne sert plus ici.
 *
 * Pad de debug (ordinateur et mobile) : caméra libre 8 4 6 2, 5 = Sonic suit la caméra,
 * F3 / F4 = niveau précédent / suivant, F6 = infos + FPS. Les boutons restent "enfoncés" tant qu'on
 * appuie (la caméra avance en continu). Sur mobile il s'ouvre avec le bouton DEBUG en haut à droite.
 * Sur ordinateur, la barre contient aussi le bouton PLEIN ECRAN (ou double-clic sur le jeu).
 *
 * À inclure en <script> classique après mobile.js. API : window.SonicControls = { key(name, down), start() }
 */
(function () {
	'use strict';

	// nom -> [keyCode, key, code, location] : SDL (port emscripten) lit keyCode (+ location pour le pavé)
	const KEYS = {
		left: [37, 'ArrowLeft', 'ArrowLeft', 0],
		up: [38, 'ArrowUp', 'ArrowUp', 0],
		right: [39, 'ArrowRight', 'ArrowRight', 0],
		down: [40, 'ArrowDown', 'ArrowDown', 0],
		space: [32, ' ', 'Space', 0],
		kp2: [98, '2', 'Numpad2', 3],
		kp4: [100, '4', 'Numpad4', 3],
		kp5: [101, '5', 'Numpad5', 3],
		kp6: [102, '6', 'Numpad6', 3],
		kp8: [104, '8', 'Numpad8', 3],
		f3: [114, 'F3', 'F3', 0],
		f4: [115, 'F4', 'F4', 0],
		f6: [117, 'F6', 'F6', 0],
	};
	const holders = {}; // nom -> nombre de sources qui maintiennent la touche (doigts, boutons)

	function dispatch(type, name) {
		const [keyCode, key, code, location] = KEYS[name];
		const e = new KeyboardEvent(type, { key, code, location, bubbles: true, cancelable: true });
		// keyCode / which ne sont pas initialisables par le constructeur
		Object.defineProperty(e, 'keyCode', { get: () => keyCode });
		Object.defineProperty(e, 'which', { get: () => keyCode });
		(document.getElementById('canvas') || window).dispatchEvent(e); // remonte jusqu'à window
	}

	/** Appuie (down = true) ou relâche une touche ; plusieurs sources peuvent tenir la même touche. */
	function key(name, down) {
		const n = holders[name] || 0;
		if (down) {
			holders[name] = n + 1;
			if (n === 0) dispatch('keydown', name);
		} else if (n > 0) {
			holders[name] = n - 1;
			if (n === 1) dispatch('keyup', name);
		}
	}
	const tapKey = (name, ms) => { key(name, true); setTimeout(() => key(name, false), ms); };

	const isMobile = !!(window.SonicMobile && window.SonicMobile.isMobile);

	const css = `
#sc-touch { position: fixed; inset: 0; z-index: 10; touch-action: none; display: none; }
#sc-touch.sc-on { display: block; }
#sc-touch .sc-jump {
	position: absolute; right: calc(5vmin + env(safe-area-inset-right)); bottom: 17.5vmin;
	width: 21vmin; height: 21vmin; border-radius: 50%; box-sizing: border-box;
	border: .8vmin solid rgba(255, 255, 255, .55); background: rgba(0, 0, 40, .35);
	color: rgba(255, 216, 0, .9); font: bold 7vmin 'SonicLoader', 'Arial Black', sans-serif;
	display: flex; align-items: center; justify-content: center;
}
#sc-touch .sc-jump.sc-pressed { background: rgba(255, 216, 0, .85); color: #000; transform: scale(.94); }
#sc-touch .sc-base, #sc-touch .sc-knob {
	position: absolute; border-radius: 50%; pointer-events: none; display: none; transform: translate(-50%, -50%);
}
#sc-touch .sc-dpad {
	position: absolute; left: calc(5vmin + env(safe-area-inset-left)); bottom: 13vmin; width: 30vmin; height: 30vmin;
	pointer-events: none;
}
#sc-touch .sc-dpad i {
	position: absolute; width: 33.4%; height: 33.4%; box-sizing: border-box;
	background: rgba(0, 0, 40, .35); border: .6vmin solid rgba(255, 255, 255, .55);
	color: rgba(255, 255, 255, .8); font: normal 4.5vmin sans-serif;
	display: flex; align-items: center; justify-content: center;
}
#sc-touch .sc-dpad .sc-u { left: 33.3%; top: 0; border-bottom: 0; border-radius: 1.5vmin 1.5vmin 0 0; }
#sc-touch .sc-dpad .sc-d { left: 33.3%; bottom: 0; border-top: 0; border-radius: 0 0 1.5vmin 1.5vmin; }
#sc-touch .sc-dpad .sc-l { left: 0; top: 33.3%; border-right: 0; border-radius: 1.5vmin 0 0 1.5vmin; }
#sc-touch .sc-dpad .sc-r { right: 0; top: 33.3%; border-left: 0; border-radius: 0 1.5vmin 1.5vmin 0; }
#sc-touch .sc-dpad .sc-c { left: 33.3%; top: 33.3%; border: 0; background: rgba(0, 0, 40, .45); }
#sc-touch .sc-dpad.sc-up .sc-u, #sc-touch .sc-dpad.sc-down .sc-d,
#sc-touch .sc-dpad.sc-left .sc-l, #sc-touch .sc-dpad.sc-right .sc-r { background: rgba(255, 216, 0, .85); color: #000; }
#sc-touch .sc-base { width: 15vmin; height: 15vmin; border: .6vmin solid rgba(255, 255, 255, .3); }
#sc-touch .sc-knob { width: 8vmin; height: 8vmin; background: rgba(255, 255, 255, .35); }
#sc-debug {
	display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 10px;
	margin: 8px auto; font: 13px ui-monospace, Menlo, Consolas, monospace; color: #ddd;
	user-select: none; -webkit-user-select: none; touch-action: none;
}
#sc-debug .sc-cross { display: grid; grid-template-columns: repeat(3, 38px); grid-template-rows: repeat(3, 38px); gap: 3px; }
#sc-debug button {
	min-width: 38px; height: 38px; padding: 0 10px; border-radius: 6px; border: 2px solid #fff;
	background: #1440c8; color: #fff; font: bold 13px ui-monospace, Menlo, Consolas, monospace;
	box-shadow: 2px 2px 0 #000; cursor: pointer; touch-action: none;
}
#sc-debug button.sc-pressed { background: #ffd800; color: #000; transform: translate(1px, 1px); box-shadow: 1px 1px 0 #000; }
#sc-debug .sc-col { display: flex; flex-direction: column; gap: 6px; }
#sc-debug .sc-fs { background: #ffd800; color: #000; height: 46px; font-size: 14px; }
html.is-mobile #sc-debug .sc-fs { display: none; }
html.is-mobile #sc-debug {
	position: fixed; z-index: 20; top: calc(14vmin + env(safe-area-inset-top)); right: calc(3vmin + env(safe-area-inset-right));
	margin: 0; padding: 8px; border-radius: 8px; background: rgba(0, 0, 40, .75); border: 2px solid #fff;
}
html.is-mobile #sc-debug:not(.sc-open) { display: none; }
#sc-debug-toggle {
	position: fixed; z-index: 20; top: calc(3vmin + env(safe-area-inset-top)); right: calc(3vmin + env(safe-area-inset-right));
	padding: 6px 10px; border-radius: 6px; border: 2px solid rgba(255, 255, 255, .6);
	background: rgba(0, 0, 40, .45); color: rgba(255, 255, 255, .8);
	font: bold 12px ui-monospace, Menlo, Consolas, monospace; touch-action: none; display: none;
}
#sc-debug-toggle.sc-on { display: block; }
`;
	const style = document.createElement('style');
	style.textContent = css;
	document.head.appendChild(style);

	// ---------- pad de debug ----------
	const debugPad = document.createElement('div');
	debugPad.id = 'sc-debug';
	debugPad.className = 'sm-keep';
	debugPad.innerHTML = `
		<button class="sc-fs" title="Plein écran (ou double-clic sur le jeu ; Échap pour sortir)">⛶ PLEIN ECRAN</button>
		<div class="sc-cross" title="Caméra libre (pavé numérique)">
			<span></span><button data-key="kp8" title="Caméra haut (8)">8</button><span></span>
			<button data-key="kp4" title="Caméra gauche (4)">4</button>
			<button data-key="kp5" title="Sonic suit la caméra (5)">5</button>
			<button data-key="kp6" title="Caméra droite (6)">6</button>
			<span></span><button data-key="kp2" title="Caméra bas (2)">2</button><span></span>
		</div>
		<div class="sc-col">
			<button data-key="f3" title="Niveau précédent (F3)">F3 ◀ NIVEAU</button>
			<button data-key="f4" title="Niveau suivant (F4)">F4 NIVEAU ▶</button>
			<button data-key="f6" title="Coordonnées + FPS (F6)">F6 INFOS/FPS</button>
		</div>`;
	debugPad.addEventListener('pointerdown', (e) => {
		const btn = e.target.closest('button[data-key]');
		if (!btn) return;
		e.preventDefault();
		btn.setPointerCapture?.(e.pointerId);
		btn.classList.add('sc-pressed');
		key(btn.dataset.key, true);
		const up = () => {
			btn.classList.remove('sc-pressed');
			key(btn.dataset.key, false);
			btn.removeEventListener('pointerup', up);
			btn.removeEventListener('pointercancel', up);
		};
		btn.addEventListener('pointerup', up);
		btn.addEventListener('pointercancel', up);
	});
	// ---------- plein écran (ordinateur) ----------
	// Le canvas passe en plein écran (le navigateur l'étire à la taille de l'écran) ; SDL (fenêtre
	// RESIZABLE) suit sa nouvelle taille CSS sur l'événement resize : plus de tuiles, sprites plus gros.
	function toggleFullscreen() {
		const canvas = document.getElementById('canvas');
		if (document.fullscreenElement || document.webkitFullscreenElement) {
			(document.exitFullscreen || document.webkitExitFullscreen).call(document);
		} else {
			const request = canvas.requestFullscreen || canvas.webkitRequestFullscreen;
			request?.call(canvas, { navigationUI: 'hide' })?.catch?.((e) => console.warn('[fullscreen]', e));
		}
	}
	const onFullscreenChange = () => {
		setTimeout(() => window.dispatchEvent(new Event('resize')), 50);
		document.getElementById('canvas').focus();
	};
	document.addEventListener('fullscreenchange', onFullscreenChange);
	document.addEventListener('webkitfullscreenchange', onFullscreenChange);
	debugPad.querySelector('.sc-fs').addEventListener('click', toggleFullscreen);

	// le canvas garde le focus clavier (sinon les vraies touches ne vont plus au jeu)
	debugPad.addEventListener('mousedown', (e) => e.preventDefault());
	debugPad.addEventListener('contextmenu', (e) => e.preventDefault());

	const toggle = document.createElement('button');
	toggle.id = 'sc-debug-toggle';
	toggle.className = 'sm-keep';
	toggle.textContent = 'DEBUG';
	toggle.addEventListener('pointerdown', (e) => { e.preventDefault(); debugPad.classList.toggle('sc-open'); });

	// ---------- tactile ----------
	const touch = document.createElement('div');
	touch.id = 'sc-touch';
	touch.className = 'sm-keep';
	touch.innerHTML = '<div class="sc-dpad"><i class="sc-u">▲</i><i class="sc-d">▼</i><i class="sc-l">◀</i><i class="sc-r">▶</i><i class="sc-c"></i></div>'
		+ '<div class="sc-base"></div><div class="sc-knob"></div><div class="sc-jump">A</div>';
	const jumpBtn = touch.querySelector('.sc-jump');
	const dpad = touch.querySelector('.sc-dpad');
	const base = touch.querySelector('.sc-base');
	const knob = touch.querySelector('.sc-knob');

	// seuils en px CSS : déclenchement, relâchement (hystérésis), distance max avant que l'ancre suive.
	// Horizontal : très sensible (courir). Vertical : geste franc exigé (bas = roulade) ; en plus, tant
	// que bas/haut n'est pas enfoncé, l'ancre verticale rattrape lentement le doigt (V_LEAK par événement)
	// pour absorber la dérive du pouce pendant qu'on court : seul un vrai glissé vers le bas déclenche.
	const T = 12, T_OFF = 6, CLAMP = 24;
	const TV = 28, TV_OFF = 14, CLAMP_V = 40, V_LEAK = 0.08;
	const TAP_SLOP = 10, TAP_MS = 300, TAP_HOLD_MS = 180;
	let stick = null;                // { id, ax, ay, x0, y0, t0, moved, h, v, fixed, size }
	const jumpers = new Set();       // pointeurs qui tiennent Espace

	const setDir = (axis, want) => {
		if (stick[axis] === want) return;
		if (stick[axis]) key(stick[axis], false);
		stick[axis] = want;
		if (want) key(want, true);
		for (const dir of ['up', 'down', 'left', 'right']) dpad.classList.toggle('sc-' + dir, stick.h === dir || stick.v === dir);
	};

	/** Le doigt est-il sur la croix dessinée (marge comprise) ? -> centre et taille de la croix */
	function onDpad(x, y) {
		const r = dpad.getBoundingClientRect();
		const m = r.width * 0.3;
		if (x < r.left - m || x > r.right + m || y < r.top - m || y > r.bottom + m) return null;
		return { cx: r.left + r.width / 2, cy: r.top + r.height / 2, size: r.width };
	}

	/** Croix dessinée : la direction vient de la position du doigt par rapport à son centre. */
	function updateFixed(x, y) {
		const dx = x - stick.ax, dy = y - stick.ay, ax = Math.abs(dx), ay = Math.abs(dy);
		const dead = stick.size * 0.12;
		// bas / haut seulement dans le quart vertical (pas de roulade en appuyant sur le bras droit)
		const h = ax >= dead && ax >= ay * 0.5 ? (dx > 0 ? 'right' : 'left') : ax < dead * 0.5 || ax < ay * 0.35 ? null : stick.h;
		const v = ay >= dead && ay >= ax ? (dy > 0 ? 'down' : 'up') : ay < dead * 0.5 || ay < ax * 0.7 ? null : stick.v;
		setDir('h', h);
		setDir('v', v);
		if (Math.hypot(x - stick.x0, y - stick.y0) > TAP_SLOP) stick.moved = true;
	}

	function updateStick(x, y) {
		if (stick.fixed) return updateFixed(x, y);
		if (!stick.v) stick.ay += (y - stick.ay) * V_LEAK;
		let dx = x - stick.ax, dy = y - stick.ay;
		// l'ancre suit le doigt au-delà de CLAMP : repartir dans l'autre sens est immédiat
		if (Math.abs(dx) > CLAMP) { stick.ax = x - Math.sign(dx) * CLAMP; dx = Math.sign(dx) * CLAMP; }
		if (Math.abs(dy) > CLAMP_V) { stick.ay = y - Math.sign(dy) * CLAMP_V; dy = Math.sign(dy) * CLAMP_V; }
		const ax = Math.abs(dx), ay = Math.abs(dy);
		// pour s'enfoncer, un axe ne doit pas être dominé par l'autre (glisser bas dans un menu ≠ droite) ;
		// une fois enfoncé, il ne se relâche qu'en revenant vers le centre (hystérésis, pas de clignotement)
		const h = ax >= T && ax >= ay * 0.5 ? (dx > 0 ? 'right' : 'left') : ax < T_OFF ? null : stick.h;
		const v = ay >= TV && ay >= ax ? (dy > 0 ? 'down' : 'up') : ay < TV_OFF ? null : stick.v;
		setDir('h', h);
		setDir('v', v);
		if (Math.hypot(x - stick.x0, y - stick.y0) > TAP_SLOP) stick.moved = true;
		base.style.left = stick.ax + 'px'; base.style.top = stick.ay + 'px';
		knob.style.left = (stick.ax + dx) + 'px'; knob.style.top = (stick.ay + dy) + 'px';
	}

	touch.addEventListener('pointerdown', (e) => {
		e.preventDefault();
		touch.setPointerCapture?.(e.pointerId);
		// bouton A, ou un 2e doigt pendant que le premier dirige : saut immédiat, maintenu
		if (e.target === jumpBtn || stick) {
			jumpers.add(e.pointerId);
			jumpBtn.classList.add('sc-pressed');
			key('space', true);
			return;
		}
		const pad = onDpad(e.clientX, e.clientY);
		stick = { id: e.pointerId, ax: e.clientX, ay: e.clientY, x0: e.clientX, y0: e.clientY, t0: performance.now(), moved: false, h: null, v: null };
		if (pad) Object.assign(stick, { fixed: true, ax: pad.cx, ay: pad.cy, size: pad.size });
		else base.style.display = knob.style.display = 'block';
		updateStick(e.clientX, e.clientY);
	});
	touch.addEventListener('pointermove', (e) => {
		if (stick && e.pointerId === stick.id) updateStick(e.clientX, e.clientY);
	});
	const release = (e) => {
		if (jumpers.delete(e.pointerId)) {
			key('space', false);
			if (!jumpers.size) jumpBtn.classList.remove('sc-pressed');
			return;
		}
		if (!stick || e.pointerId !== stick.id) return;
		setDir('h', null);
		setDir('v', null);
		// sur la croix dessinée, un appui bref reste une direction (pas un saut)
		const tap = !stick.fixed && !stick.moved && performance.now() - stick.t0 < TAP_MS && e.type === 'pointerup';
		stick = null;
		base.style.display = knob.style.display = 'none';
		if (tap) tapKey('space', TAP_HOLD_MS);
	};
	touch.addEventListener('pointerup', release);
	touch.addEventListener('pointercancel', release);
	touch.addEventListener('contextmenu', (e) => e.preventDefault());

	// ---------- montage ----------
	function mount() {
		const canvas = document.getElementById('canvas');
		canvas.insertAdjacentElement('afterend', debugPad);
		if (isMobile) document.body.append(touch, toggle);
		else canvas.addEventListener('dblclick', toggleFullscreen);
	}
	document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', mount) : mount();

	window.SonicControls = {
		key,
		/** Appelé quand le jeu tourne : active la couche tactile et le bouton DEBUG (mobile). */
		start() {
			if (!isMobile) return;
			touch.classList.add('sc-on');
			toggle.classList.add('sc-on');
		},
	};
})();
