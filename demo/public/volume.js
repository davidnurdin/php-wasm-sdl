/*
 * Volume du jeu réglable de l'extérieur (ex. régie d'un live qui intègre la page dans une iframe) :
 *   - ?volume=0..100 dans l'URL : volume au chargement ;
 *   - postMessage({ sonicVolume: 0..100 }, '*') depuis la page parente : change le volume en cours de partie.
 * Le son de SDL2 (port emscripten) sort par un AudioContext : sa « destination » passe ici par un gain.
 * Sans effet sur la page seule sans ?volume= (rien n'est changé pour un joueur).
 *
 * À inclure en <script> classique AVANT le lancement du wasm (SDL crée son AudioContext au démarrage).
 * API : window.SonicVolume = { get(), set(0..100) }.
 */
(function () {
	const params = new URLSearchParams(location.search);
	const Base = window.AudioContext || window.webkitAudioContext;
	if (!Base || (!params.has('volume') && window.parent === window)) return;

	const borne = (v) => Math.min(100, Math.max(0, Number(v))) / 100;
	let volume = params.has('volume') && Number.isFinite(Number(params.get('volume'))) ? borne(params.get('volume')) : 1;
	const gains = [];

	class SonicAudioContext extends Base {
		constructor(...args) {
			super(...args);
			const gain = this.createGain();
			gain.gain.value = volume;
			gain.connect(super.destination);
			Object.defineProperty(this, 'destination', { get: () => gain });
			gains.push(gain);
		}
	}
	window.AudioContext = SonicAudioContext;
	if (window.webkitAudioContext) window.webkitAudioContext = SonicAudioContext;

	const set = (v) => {
		volume = borne(v);
		gains.forEach((g) => { g.gain.value = volume; });
	};
	window.addEventListener('message', (e) => {
		if (e.data && typeof e.data.sonicVolume === 'number') set(e.data.sonicVolume);
	});
	window.SonicVolume = { get: () => Math.round(volume * 100), set };
})();
