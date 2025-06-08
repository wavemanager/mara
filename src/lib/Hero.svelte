<script>
	const image =
		'https://images.unsplash.com/photo-1463171515643-952cee54d42a?q=80&w=450&h=190&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

	import { animate } from 'motion';
	import { onMount } from 'svelte';

	let element;

	onMount(() => {
		animate(element, { opacity: [0, 1], y: [-50, 0] }, { duration: 0.8 });
	});
</script>

<section class="relative">
	<!-- HINZUGEFÜGT: relative als Referenzpunkt -->
	<div class="bg-blue-900 text-white py-20 xl:px-100 lg:px-50 sm:px-25">
		<!-- Gradient-Container: Absolut positioniert im Hintergrund -->
		<div
			aria-hidden="true"
			class="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 z-0 pointer-events-none"
		>
			<div class="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
			<div class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
		</div>

		<!-- Haupt-Inhalt: Liegt über den Gradienten -->
		<div class="relative z-10">
			<div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
				<div class="flex flex-col w-full lg:w-2/3 justify-center items-start p-8">
					<h1 class="xl:text-5xl md:text-3xl text-amber-300">TechFest</h1>
					<h2
						class="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2 animate-fade-up animate-delay-[20ms]"
					>
						Space : The Timeless Infinity
					</h2>
					<p class="text-sm md:text-base text-gray-50 mb-4">
						Explore your favourite events and register now to showcase your talent and win exciting
						prizes.
					</p>
					<a
						bind:this={element}
						href="#"
						class="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
					>
						Explore Now
					</a>
				</div>
				<img
					src={image}
					alt=""
					class="rounded-3xl animate-fade-left animate-delay-300 animate-ease-in"
				/>
			</div>
		</div>
	</div>
</section>
