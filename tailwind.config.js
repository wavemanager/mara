// tailwind.config.js
module.exports = {
	darkMode: 'class', // wichtig!
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite/**/*.{js,ts}'
	],
	theme: { extend: {} },
	plugins: [require('flowbite/plugin')]
};
