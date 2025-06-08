<script>
	import { inView, animate } from 'motion';
	import { onMount } from 'svelte';

	let sectionEl;

	onMount(() => {
		inView(sectionEl, () => {
			animate(sectionEl, { opacity: [0, 1], y: [200, 0] }, { duration: 2, easing: 'ease-in' });
		});
	});
</script>

<!-- 1. Section relativ positionieren, damit der absolute Gradient sich darauf bezieht -->
<section bind:this={sectionEl} class="mb-20 relative">
	<!-- 2. Gradient-Container: Liegt absolut im Hintergrund (z-0) und reagiert nicht auf Mausereignisse -->
	<div
		aria-hidden="true"
		class="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 z-0 pointer-events-none"
	>
		<div class="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
		<div class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
	</div>

	<!-- 3. Haupt-Inhaltscontainer: Liegt über dem Gradienten (z-10) -->
	<div class="relative z-10">
		<div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
			<!-- Text-Block: Textfarben bleiben erhalten, kein störender Hintergrund -->
			<div class="md:w-2/3 lg:w-1/2 mt-12 text-gray-100">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="w-6 h-6 text-secondary"
				>
					<path
						fill-rule="evenodd"
						d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
						clip-rule="evenodd"
					></path>
				</svg>
				<h2 class="my-8 text-2xl font-bold text-white md:text-4xl">Our Work</h2>
				<p class="text-gray-300">We have built many products and some of them are below</p>
			</div>

			<!-- Card-Container: Ränder und Textfarben bleiben, kein störender Hintergrund -->
			<div
				class="mt-16 grid divide-x divide-y bg-slate-700 z-10 divide-gray-500 overflow-hidden rounded-2xl text-gray-600 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4"
			>
				<!-- Individuelle Card: Standardmäßig transparenter Hintergrund, Hover-Farbe bleibt -->
				<div class="bg-transparent transition hover:bg-amber-700">
					<div class="relative space-y-8 py-12 p-8">
						<img
							src="https://www.svgrepo.com/show/164986/logo.svg"
							loading="lazy"
							width="200"
							height="200"
							class="w-12 h-12 rounded-full"
							style="color:transparent"
						/>
						<div class="space-y-2">
							<h5 class="text-xl font-semibold text-white transition group-hover:text-secondary">
								Xyz.com
							</h5>
							<p class="text-gray-300">Platform to convert Domains into Content websites.</p>
						</div>
					</div>
				</div>
				<!-- Weitere Cards, ebenfalls mit bg-transparent für den Standardzustand -->
				<div class="bg-transparent transition hover:bg-amber-700">
					<div class="relative space-y-8 py-12 p-8">
						<img
							src="https://www.svgrepo.com/show/120853/logo.svg"
							loading="lazy"
							width="200"
							height="200"
							class="w-12 h-12 rounded-full"
							style="color:transparent"
						/>
						<div class="space-y-2">
							<h5 class="text-xl font-semibold text-white transition group-hover:text-secondary">
								ABC.com
							</h5>
							<p class="text-gray-300">Platform to create dynamic widgets for websites.</p>
						</div>
					</div>
				</div>
				<div class="bg-transparent transition hover:bg-amber-700">
					<div class="relative space-y-8 py-12 p-8">
						<img
							src="https://www.svgrepo.com/show/120852/logo.svg"
							loading="lazy"
							width="200"
							height="200"
							class="w-12 h-12 rounded-full"
							style="color:transparent"
						/>
						<div class="space-y-2">
							<h5 class="text-xl font-semibold text-white transition group-hover:text-secondary">
								ASD.com
							</h5>
							<p class="text-gray-300">
								API SaaS Platform that provides API Suit to help you ship fast.
							</p>
						</div>
					</div>
				</div>
				<div class="bg-transparent transition hover:bg-amber-700">
					<div class="relative space-y-8 py-12 p-8">
						<img
							src="https://www.svgrepo.com/show/120850/logo.svg"
							loading="lazy"
							width="200"
							height="200"
							class="w-12 h-12 rounded-full"
							style="color:transparent"
						/>
						<div class="space-y-2">
							<h5 class="text-xl font-semibold text-white transition group-hover:text-secondary">
								TMK.co
							</h5>
							<p class="text-gray-300">Chrome Extension that lets you add ChatGPT on any website</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
