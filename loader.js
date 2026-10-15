/*
 * Écran de chargement façon Sonic, affiché tant que le wasm n'est pas prêt.
 * Autonome : injecte son CSS et son DOM dès le chargement du script (à inclure en <script> classique,
 * le plus tôt possible dans la page).
 *
 * API (window.SonicLoader) :
 *   SonicLoader.progress(ratio[, label])  ratio entre 0 et 1, label optionnel
 *   SonicLoader.status(text)              texte d'état sous la barre
 *   SonicLoader.step(from, to)            renvoie fn(ratio) qui mappe 0..1 sur la plage [from, to]
 *   SonicLoader.hide()                    masque le loader (fondu) -> à appeler quand le jeu est prêt
 *   SonicLoader.show()                    le réaffiche
 *   SonicLoader.error(message)            écran "GAME OVER" avec le message
 *   SonicLoader.onHide(fn)                callback appelé une fois le loader masqué
 * Événement équivalent à hide() : window.dispatchEvent(new Event('sonic:ready'))
 *
 * Fluidité : le démarrage de PHP (phpw_run) bloque le thread principal plusieurs secondes. Toutes les
 * animations n'utilisent donc que transform / opacity (calques promus avec will-change) : le compositeur
 * du navigateur les fait tourner sans le thread principal, elles ne se figent pas pendant ce temps.
 * (Une animation de background-position ou de width, elle, s'arrêterait.)
 */
(function () {
	'use strict';

	const FONT_URL = 'assets/NiseSegaSonic.TTF'; // copié par package.sh depuis assets/fonts du jeu

	const css = `
@font-face { font-family: 'SonicLoader'; src: url('${FONT_URL}') format('truetype'); font-display: swap; }
#sonic-loader {
	--sky-top: #0b3fae; --sky-bottom: #4fa3ff; --ring: #ffd800; --ring-dark: #c98a00;
	--blue: #1440c8; --grass: #2fb52f; --grass-dark: #157a15; --earth: #c86414; --earth-dark: #7a3008;
	position: fixed; inset: 0; z-index: 9999; overflow: hidden;
	display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 22px;
	padding-bottom: 16vh; box-sizing: border-box;
	background: linear-gradient(var(--sky-top), var(--sky-bottom) 70%);
	font-family: 'SonicLoader', 'Arial Black', Impact, sans-serif; color: #fff;
	transition: opacity .6s ease, transform .6s ease;
}
#sonic-loader.sl-hidden { opacity: 0; transform: scale(1.08); pointer-events: none; }
#sonic-loader .sl-clouds {
	position: absolute; top: 0; left: 0; width: calc(100% + 900px); height: 55%; opacity: .9;
	will-change: transform;
	background:
		radial-gradient(ellipse 60px 18px at 10% 30%, #fff 98%, transparent),
		radial-gradient(ellipse 40px 14px at 14% 26%, #fff 98%, transparent),
		radial-gradient(ellipse 80px 20px at 45% 15%, #fff 98%, transparent),
		radial-gradient(ellipse 50px 16px at 50% 11%, #fff 98%, transparent),
		radial-gradient(ellipse 70px 18px at 78% 38%, #fff 98%, transparent),
		radial-gradient(ellipse 36px 12px at 82% 34%, #fff 98%, transparent);
	background-size: 900px 100%; background-repeat: repeat-x;
	animation: sl-scroll 40s linear infinite;
}
#sonic-loader .sl-ground {
	position: absolute; left: 0; right: 0; bottom: 0; height: 22%; overflow: hidden;
	border-top: 14px solid var(--grass);
}
#sonic-loader .sl-ground::before {
	content: ''; position: absolute; top: 0; bottom: 0; left: 0; width: calc(100% + 64px);
	background: repeating-conic-gradient(var(--earth) 0 25%, var(--earth-dark) 0 50%) 0 0 / 64px 64px;
	will-change: transform; animation: sl-run 0.5s linear infinite;
}
#sonic-loader .sl-ground::after {
	content: ''; position: absolute; left: 0; right: 0; top: 0; height: 6px; background: var(--grass-dark);
}
#sonic-loader .sl-ring {
	width: 92px; height: 92px; border-radius: 50%; position: relative; z-index: 1;
	border: 14px solid var(--ring);
	box-shadow: inset 0 0 0 4px var(--ring-dark), 0 0 0 4px var(--ring-dark), 0 0 24px rgba(255, 216, 0, .6);
	will-change: transform; animation: sl-spin 1s steps(8) infinite;
}
#sonic-loader .sl-ring::after {
	content: ''; position: absolute; top: 6px; left: 14px; width: 18px; height: 10px;
	border-radius: 50%; background: #fff8c0; transform: rotate(-30deg);
}
#sonic-loader .sl-title {
	position: relative; z-index: 1; font-size: clamp(28px, 6vw, 56px); letter-spacing: .08em;
	color: var(--ring);
	text-shadow: 3px 0 var(--blue), -3px 0 var(--blue), 0 3px var(--blue), 0 -3px var(--blue),
		5px 5px 0 #000;
}
#sonic-loader .sl-title span { display: inline-block; will-change: transform; animation: sl-bounce 1.2s ease-in-out infinite; }
#sonic-loader .sl-hud {
	position: relative; z-index: 1; width: min(420px, 80vw);
	display: flex; flex-direction: column; gap: 8px;
}
#sonic-loader .sl-rings { font-size: 20px; color: var(--ring); text-shadow: 2px 2px 0 #000; }
#sonic-loader .sl-rings b { color: #fff; }
#sonic-loader .sl-bar {
	position: relative; height: 22px; border: 4px solid #fff; border-radius: 4px; background: #1d3c85;
	box-shadow: 4px 4px 0 #000; overflow: hidden;
}
/* la barre rayée occupe toute la largeur ; un cache de la couleur du fond glisse vers la droite
   (transform : animé par le compositeur, même quand le thread principal est bloqué) */
#sonic-loader .sl-fill { position: absolute; inset: 0; overflow: hidden; }
#sonic-loader .sl-cover {
	position: absolute; inset: 0; background: #1d3c85;
	will-change: transform; transition: transform .25s ease-out;
}
#sonic-loader .sl-fill::before {
	content: ''; position: absolute; top: 0; bottom: 0; left: -34px; width: calc(100% + 34px);
	background: repeating-linear-gradient(-45deg, var(--ring) 0 12px, #ffef7a 12px 24px);
	will-change: transform; animation: sl-stripes .6s linear infinite;
}
#sonic-loader .sl-status {
	font-family: ui-monospace, Menlo, Consolas, monospace; font-size: 13px; min-height: 1.3em;
	text-shadow: 1px 1px 0 #000; opacity: .9;
}
#sonic-loader .sl-source {
	position: absolute; left: 12px; right: 12px; bottom: 14px; z-index: 1; width: fit-content; margin: 0 auto;
	max-width: calc(100% - 24px); box-sizing: border-box; text-align: center;
	font-family: ui-monospace, Menlo, Consolas, monospace; font-size: 13px; color: #fff;
	background: rgba(0, 0, 40, .7); border: 2px solid #fff; border-radius: 6px; padding: 6px 12px;
	box-shadow: 3px 3px 0 #000;
}
#sonic-loader .sl-source a { color: var(--ring); font-weight: bold; text-decoration: underline; overflow-wrap: anywhere; }
#sonic-loader.sl-error .sl-title { color: #ff4040; }
#sonic-loader.sl-error .sl-ring { animation: none; filter: grayscale(1); }
#sonic-loader.sl-error .sl-fill::before { background: #ff4040; animation: none; }
@keyframes sl-spin { 0% { transform: scaleX(1); } 25% { transform: scaleX(.15); } 50% { transform: scaleX(-1); } 75% { transform: scaleX(.15); } 100% { transform: scaleX(1); } }
@keyframes sl-run { to { transform: translateX(-64px); } }
@keyframes sl-scroll { to { transform: translateX(-900px); } }
@keyframes sl-stripes { to { transform: translateX(33.94px); } }
@keyframes sl-bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
@media (prefers-reduced-motion: reduce) { #sonic-loader *, #sonic-loader *::before, #sonic-loader *::after { animation: none !important; } }
`;

	const style = document.createElement('style');
	style.textContent = css;
	document.head.appendChild(style);

	const root = document.createElement('div');
	root.id = 'sonic-loader';
	root.setAttribute('role', 'progressbar');
	root.setAttribute('aria-valuemin', '0');
	root.setAttribute('aria-valuemax', '100');
	root.innerHTML = `
		<div class="sl-clouds"></div>
		<div class="sl-ring" aria-hidden="true"></div>
		<div class="sl-title">${[...'LOADING'].map((c, i) => `<span style="animation-delay:${i * 0.08}s">${c}</span>`).join('')}</div>
		<div class="sl-hud">
			<div class="sl-rings">RINGS <b class="sl-pct">0</b></div>
			<div class="sl-bar"><div class="sl-fill"></div><div class="sl-cover"></div></div>
			<div class="sl-status">Initialisation...</div>
		</div>
		<div class="sl-source">Open source project : <a href="https://github.com/davidnurdin/php-wasm-sdl/" target="_blank" rel="noopener">https://github.com/davidnurdin/php-wasm-sdl/</a></div>
		<div class="sl-ground"></div>`;

	const mount = () => document.body.appendChild(root);
	document.body ? mount() : document.addEventListener('DOMContentLoaded', mount);

	const $ = (sel) => root.querySelector(sel);
	let current = 0;
	const hideCallbacks = [];

	const api = {
		progress(ratio, label) {
			current = Math.max(current, Math.min(1, Math.max(0, ratio))); // ne recule jamais
			const pct = Math.round(current * 100);
			$('.sl-cover').style.transform = `translateX(${pct}%)`;
			$('.sl-pct').textContent = String(pct).padStart(3, '0');
			root.setAttribute('aria-valuenow', String(pct));
			if (label) api.status(label);
		},
		status(text) { $('.sl-status').textContent = text; },
		step(from, to) { return (ratio) => api.progress(from + (to - from) * Math.min(1, Math.max(0, ratio))); },
		hide() {
			if (root.classList.contains('sl-hidden')) return;
			api.progress(1);
			root.classList.add('sl-hidden');
			setTimeout(() => { root.style.display = 'none'; hideCallbacks.splice(0).forEach((fn) => fn()); }, 650);
		},
		show() { root.style.display = ''; root.classList.remove('sl-hidden', 'sl-error'); },
		error(message) {
			root.classList.add('sl-error');
			$('.sl-title').textContent = 'GAME OVER';
			api.status(String(message));
		},
		onHide(fn) { hideCallbacks.push(fn); },
	};

	window.addEventListener('sonic:ready', () => api.hide());
	window.SonicLoader = api;
})();
