<script lang="ts">
	import { onMount } from 'svelte';

	// Configuración de tu Namespace y Key para Abacus
	const NAMESPACE = 'luisangelcardona.dev';
	const KEY = 'portfolio-clicks';
	const BASE_URL = 'https://abacus.jasoncameron.dev';

	// Estados reactivos (Svelte 5)
	let globalCount = $state(0);
	let personalCount = $state(0);
	let isLoading = $state(true);
	let sparkles = $state<Array<{ id: number; x: number; y: number }>>([]);
	let buttonScale = $state(1);

	onMount(() => {
		// 1. Cargar cuenta personal del navegador
		const saved = localStorage.getItem('my-clicks');
		if (saved) personalCount = parseInt(saved);

		// 2. Obtener el valor global inicial
		fetch(`${BASE_URL}/get/${NAMESPACE}/${KEY}`)
			.then(res => res.json())
			.then(data => {
				globalCount = data.value || 0;
				isLoading = false;
			});

		// 3. Conectar al stream de tiempo real (SSE)
		const eventSource = new EventSource(`${BASE_URL}/stream/${NAMESPACE}/${KEY}`);

		eventSource.onmessage = (event) => {
			const data = JSON.parse(event.data);
			if (data.value > globalCount) {
				globalCount = data.value;
			}
		};

		return () => eventSource.close();
	});

	function triggerSparkle() {
		const id = Date.now();
		const x = Math.random() * 100;
		const y = Math.random() * 100;
		sparkles = [...sparkles, { id, x, y }];
		setTimeout(() => {
			sparkles = sparkles.filter((s) => s.id !== id);
		}, 2000);
	}

	async function handleClick() {
		buttonScale = 0.95;
		setTimeout(() => (buttonScale = 1), 150);

		// Actualización local inmediata (optimista)
		personalCount++;
		globalCount++;
		localStorage.setItem('my-clicks', personalCount.toString());
		triggerSparkle();

		// Registrar el clic en la API de Jason
		try {
			await fetch(`${BASE_URL}/hit/${NAMESPACE}/${KEY}`);
		} catch (error) {
			console.error('Error al registrar clic:', error);
		}
	}
</script>

<div class="relative flex flex-col items-center justify-center rounded-2xl lg:sticky lg:top-24 min-h-fit group bg-gradient-to-br from-emerald-950/40 to-cyan-950/40 border border-emerald-500/30 p-5 hover:border-emerald-400/60 transition-all duration-300 shadow-xl hover:shadow-emerald-500/10">

	<!-- Info tooltip -->
	<div class="absolute top-0 right-0 z-50 group/info">
		<button class="w-7 h-7 bg-neutral-800/90 hover:bg-emerald-500/20 border border-neutral-600 hover:border-emerald-500/50 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 backdrop-blur-sm">
			<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-neutral-400 hover:text-emerald-400 transition-colors">
				<circle cx="12" cy="12" r="10"/>
				<path d="M12 16v-4"/>
				<path d="M12 8h.01"/>
			</svg>
		</button>
		<div class="absolute top-full right-0 mt-2 w-72 p-3 bg-neutral-900/95 border border-neutral-700 rounded-xl shadow-2xl opacity-0 invisible group-hover/info:opacity-100 group-hover/info:visible transition-all duration-300 z-50 text-xs text-neutral-300 leading-relaxed backdrop-blur-sm">
			<p class="font-medium text-emerald-400 mb-1">Contador global en tiempo real</p>
			<p>Cada clic es de todos los que han visitado este sitio. Totalmente inútil, pero extrañamente satisfactorio.</p>
		</div>
	</div>

	<!-- Animated background gradient -->
	<div class="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

	<!-- Decorative elements -->
	<div class="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
	<div class="absolute bottom-0 left-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

	<div class="relative flex flex-col items-center justify-center space-y-4 z-10">
		<!-- Counter display -->
		<div class="text-center">
			<div class="text-emerald-400 text-4xl font-black relative tracking-tighter mb-1">
				{#if isLoading}
					<span class="opacity-50 animate-pulse">---</span>
				{:else}
					<span class="inline-block transition-all duration-300 drop-shadow-lg">
						{globalCount.toLocaleString()}
					</span>
					{#each sparkles as sparkle (sparkle.id)}
						<div
							class="animate-sparkle absolute text-emerald-400 font-black pointer-events-none select-none drop-shadow-lg"
							style="left: {sparkle.x - 50}%; top: {sparkle.y - 50}%;"
						>
							+1
						</div>
					{/each}
				{/if}
			</div>
			<p class="text-emerald-400/70 text-xs font-mono uppercase tracking-widest">Clicks Globales</p>
		</div>

		<!-- Main button with enhanced styling -->
		<button
			onclick={handleClick}
			disabled={isLoading}
			class="group/btn relative bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-black rounded-lg px-6 py-2 font-bold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed text-xs md:text-sm shadow-lg hover:shadow-emerald-500/40 overflow-hidden"
			style="transform: scale({buttonScale})"
		>
			<span class="relative z-10">CLICK ME</span>
			<div class="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
		</button>

		<!-- Personal counter -->
		<p class="text-neutral-400 text-xs font-mono">
			<span class="text-emerald-400 font-bold">{personalCount}</span> {personalCount === 1 ? 'click' : 'clicks'}
		</p>
	</div>
</div>

<style>
	@keyframes sparkle {
		0% {
			opacity: 0;
			transform: translateY(0) scale(0) rotate(0deg);
		}
		20% {
			opacity: 1;
			transform: translateY(-15px) scale(1.3) rotate(180deg);
		}
		100% {
			opacity: 0;
			transform: translateY(-60px) scale(0.3) rotate(360deg);
		}
	}

	.animate-sparkle {
		animation: sparkle 2s ease-out forwards;
	}
</style>