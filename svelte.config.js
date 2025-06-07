import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build', // Explizit das Build-Verzeichnis angeben
			assets: 'build', // Explizit das Build-Verzeichnis angeben
			fallback: 'index.html' // Wichtig für SPA-ähnliches Verhalten und direkte Links
		}),
		paths: {
			// Wenn deine Repository 'wavemanager.github.io' heißt (Auslieferung im Root),
			// dann muss base für den Production Build '' sein.
			// Wenn deine Repository z.B. 'my-project' heißt (Auslieferung unter /my-project/),
			// dann muss base '/my-project' sein.
			base: dev ? '' : '' // HIER ANPASSEN, FALLS DEINE REPO ANDERS HEISST ALS wavemanager.github.io
		}
	}
};

export default config;
