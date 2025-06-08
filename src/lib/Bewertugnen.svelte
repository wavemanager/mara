<script>
	import { onMount, onDestroy } from 'svelte';
	import { fly } from 'svelte/transition'; // Import für die Fly-Transition

	let currentTextIndex = 0;
	const textBlocks = [
		{
			title: 'Kundenfeedback Alpha',
			iconClass: 'fa-solid fa-comments', // Font Awesome Klasse für das Icon
			content:
				'"Diese Plattform hat unsere Arbeitsweise revolutioniert! Einfach, intuitiv und unglaublich effizient." - CEO, Alpha Corp'
		},
		{
			title: 'Erfolgsgeschichte Beta',
			iconClass: 'fa-solid fa-star',
			content:
				'"Seit wir dieses Tool nutzen, konnten wir unsere Bearbeitungszeiten halbieren. Ein echter Gewinn!" - Manager, Beta Solutions'
		},
		{
			title: 'Meinung von Gamma',
			iconClass: 'fa-solid fa-thumbs-up',
			content:
				'"Der Support ist erstklassig und die Funktionen übertreffen unsere Erwartungen bei Weitem." - Nutzer, Gamma Inc.'
		}
	];

	let intervalId;

	onMount(() => {
		intervalId = setInterval(() => {
			currentTextIndex = (currentTextIndex + 1) % textBlocks.length;
		}, 6000); // Wechselt alle 7 Sekunden den Textblock

		// Aufräumen, wenn die Komponente zerstört wird
		return () => {
			clearInterval(intervalId);
		};
	});

	// Zusätzliche Sicherheit, falls die Komponente vor onMount zerstört wird
	onDestroy(() => {
		if (intervalId) {
			clearInterval(intervalId);
		}
	});
</script>

<section
	class="relative py-16 md:py-24 bg-cover bg-center"
	style="background-image: url('https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');"
>
	<!-- Overlay für bessere Lesbarkeit des Textes -->
	<div class="absolute inset-0 bg-black opacity-30"></div>

	<div class="container mx-auto px-4 relative z-10">
		<div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
			<!-- Linke Seite: Headline und Unterschrift -->
			<div class="md:w-1/2 text-center md:text-left">
				<h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
					Das sagen unsere Nutzer
				</h2>
				<p class="text-lg text-gray-200 mb-6 md:mb-0">
					Echte Meinungen von echten Menschen, die unsere Lösungen täglich nutzen.
				</p>
			</div>

			<!-- Rechte Seite: Modernes abgerundetes Rechteck mit animiertem Text -->
			<div class="md:w-1/2">
				<div
					class="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 md:p-8 overflow-hidden h-[250px] flex flex-col justify-start"
				>
					<!-- Optional: Hier wieder zu justify-center wechseln, wenn der innere Block eine feste Höhe hat -->
					{#key currentTextIndex}
						<div
							in:fly={{ x: -150, duration: 600, delay: 300 }}
							out:fly={{ x: 150, duration: 300 }}
						>
							<div class="text-gray-500 dark:text-gray-400 text-3xl mb-4 text-center md:text-left">
								<i class={textBlocks[currentTextIndex].iconClass}></i>
							</div>
							<h3 class="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white mb-3">
								{textBlocks[currentTextIndex].title}
							</h3>
							<p class="text-gray-700 dark:text-gray-300 leading-relaxed">
								{textBlocks[currentTextIndex].content}
							</p>
						</div>
					{/key}
				</div>
			</div>
		</div>
	</div>
</section>
