/*
 * Mode mobile / tablette (uniquement si l'appareil est tactile) :
 *   - le canvas occupe tout l'écran, le texte et la zone de debug sont masqués ;
 *   - écran "TOUCHE POUR JOUER" : le vrai plein écran (Fullscreen API) exige un geste de
 *     l'utilisateur ; au toucher -> requestFullscreen() puis screen.orientation.lock('landscape') ;
 *   - si on sort du plein écran, l'écran revient pour le relancer ;
 *   - en portrait sans verrouillage possible (iPhone : ni Fullscreen API ni orientation.lock),
 *     écran "TOURNE TON APPAREIL".
 * Les gestes dans le jeu (glisser = directions, tap / bouton A = Espace) sont convertis en événements
 * clavier par controls.js.
 *
 * À inclure en <script> classique juste après loader.js, AVANT le lancement du wasm : la classe
 * html.is-mobile doit donner sa taille au canvas avant que SDL crée sa fenêtre.
 *
 * API : window.SonicMobile = { isMobile, start() }  -> start() est appelé quand le jeu est prêt.
 * Forcer le mode : ?mobile=1 / ?mobile=0 dans l'URL.
 */
(function () {
	'use strict';

	const forced = new URLSearchParams(location.search).get('mobile');
	const touch = navigator.maxTouchPoints > 0 || 'ontouchstart' in window;
	const coarse = matchMedia('(pointer: coarse)').matches;
	const mobileUA = /Android|iPhone|iPad|iPod|Mobile|Tablet|Silk|Kindle/i.test(navigator.userAgent)
		|| (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1); // iPadOS se dit "Mac"
	const isMobile = forced !== null ? forced === '1' : touch && (coarse || mobileUA);

	window.SonicMobile = { isMobile, start() {} };
	if (!isMobile) return;

	document.documentElement.classList.add('is-mobile');

	const css = `
html.is-mobile, html.is-mobile body {
	margin: 0; width: 100%; height: 100%; overflow: hidden; background: #000;
	overscroll-behavior: none; touch-action: none; -webkit-user-select: none; user-select: none;
	-webkit-touch-callout: none; -webkit-tap-highlight-color: transparent;
}
/* seuls le canvas, le loader et les écrans mobiles restent visibles */
html.is-mobile body > :not(#canvas):not(#sonic-loader):not(.sm-screen):not(.sm-keep) { display: none !important; }
html.is-mobile #canvas {
	position: fixed; inset: 0; width: 100vw; height: 100vh; height: 100dvh;
	aspect-ratio: auto; margin: 0; touch-action: none;
}
.sm-screen {
	position: fixed; inset: 0; z-index: 9000; display: none;
	flex-direction: column; align-items: center; justify-content: center; gap: 24px; padding: 24px;
	background: radial-gradient(circle at 50% 40%, #1f5fd8, #071a52 75%);
	font-family: 'SonicLoader', 'Arial Black', Impact, sans-serif; color: #ffd800; text-align: center;
	text-shadow: 3px 0 #1440c8, -3px 0 #1440c8, 0 3px #1440c8, 0 -3px #1440c8, 4px 4px 0 #000;
	touch-action: none;
}
.sm-screen.sm-visible { display: flex; }
.sm-screen .sm-big { font-size: clamp(26px, 7vmin, 54px); letter-spacing: .06em; }
.sm-screen .sm-small { font-size: clamp(13px, 3.4vmin, 20px); color: #fff; }
.sm-screen .sm-blink { animation: sm-blink 1s steps(2) infinite; }
.sm-screen .sm-ring {
	width: 18vmin; height: 18vmin; max-width: 110px; max-height: 110px; border-radius: 50%; box-sizing: border-box; flex: none;
	border: 3vmin solid #ffd800; box-shadow: inset 0 0 0 .8vmin #c98a00, 0 0 0 .8vmin #c98a00;
	animation: sm-spin 1s steps(8) infinite;
}
.sm-screen .sm-phone {
	width: 16vmin; height: 26vmin; max-width: 80px; max-height: 130px; border: 1.2vmin solid #fff;
	border-radius: 2.5vmin; box-shadow: 4px 4px 0 #000; animation: sm-rotate 2s ease-in-out infinite;
}
@keyframes sm-blink { 50% { opacity: 0; } }
@keyframes sm-spin { 0%, 100% { transform: scaleX(1); } 25% { transform: scaleX(.15); } 50% { transform: scaleX(-1); } 75% { transform: scaleX(.15); } }
@keyframes sm-rotate { 0%, 20% { transform: rotate(0); } 60%, 100% { transform: rotate(-90deg); } }
@media (prefers-reduced-motion: reduce) { .sm-screen * { animation: none !important; } }
`;
	const style = document.createElement('style');
	style.textContent = css;
	document.head.appendChild(style);

	const makeScreen = (html) => {
		const el = document.createElement('div');
		el.className = 'sm-screen';
		el.innerHTML = html;
		const mount = () => document.body.appendChild(el);
		document.body ? mount() : document.addEventListener('DOMContentLoaded', mount);
		return el;
	};
	// the page's language: ?lang= (the site), else the browser's
	const lang = new URLSearchParams(location.search).get('lang');
	const fr = lang ? lang === 'fr' : (navigator.language || '').toLowerCase().startsWith('fr');
	const tapScreen = makeScreen(`
		<div class="sm-ring"></div>
		<div class="sm-big sm-blink">${fr ? 'TOUCHE POUR JOUER' : 'TAP TO PLAY'}</div>
		<div class="sm-small">${fr ? 'PLEIN ECRAN - PAYSAGE' : 'FULL SCREEN - LANDSCAPE'}</div>`);
	const rotateScreen = makeScreen(`
		<div class="sm-phone"></div>
		<div class="sm-big">${fr ? 'TOURNE TON APPAREIL' : 'TURN YOUR DEVICE'}</div>
		<div class="sm-small">${fr ? 'LE JEU SE JOUE EN PAYSAGE' : 'THE GAME IS PLAYED IN LANDSCAPE'}</div>`);

	const fsElement = () => document.fullscreenElement || document.webkitFullscreenElement;
	const fsSupported = !!(document.documentElement.requestFullscreen || document.documentElement.webkitRequestFullscreen);
	const portrait = matchMedia('(orientation: portrait)');
	let started = false;
	let orientationLocked = false;

	async function enterFullscreen() {
		const el = document.documentElement;
		try {
			if (el.requestFullscreen) await el.requestFullscreen({ navigationUI: 'hide' });
			else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
		} catch (e) {
			console.warn('[mobile] plein écran refusé :', e);
		}
		try {
			// possible seulement en plein écran (Android Chrome) ; rejeté sur iOS / desktop
			await window.screen.orientation?.lock?.('landscape');
			orientationLocked = true;
		} catch (e) {
			orientationLocked = false;
			console.warn('[mobile] verrouillage paysage impossible :', e && e.message);
		}
		refresh();
	}

	function refresh() {
		if (!started) return;
		// plein écran demandé tant qu'on n'y est pas (si l'API existe)
		const needTap = fsSupported && !fsElement();
		tapScreen.classList.toggle('sm-visible', needTap);
		// portrait non verrouillable : on demande de tourner l'appareil
		rotateScreen.classList.toggle('sm-visible', !needTap && portrait.matches && !orientationLocked);
		// SDL (fenêtre RESIZABLE) suit la taille CSS du canvas sur l'événement resize
		window.dispatchEvent(new Event('resize'));
	}

	tapScreen.addEventListener('click', enterFullscreen);
	tapScreen.addEventListener('touchend', (e) => { e.preventDefault(); enterFullscreen(); });
	document.addEventListener('fullscreenchange', () => { if (!fsElement()) orientationLocked = false; refresh(); });
	document.addEventListener('webkitfullscreenchange', refresh);
	portrait.addEventListener?.('change', refresh);
	// empêche le zoom par pincement / double-tap et le défilement de la page
	document.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });
	document.addEventListener('gesturestart', (e) => e.preventDefault());

	window.SonicMobile.start = () => {
		started = true;
		refresh();
	};
})();
