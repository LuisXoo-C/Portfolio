<script lang="ts">
	import { onMount } from 'svelte';

	const NAMESPACE = 'luisangelcardona.dev';
	const KEY = 'portfolio-clicks';
	const BASE_URL = 'https://abacus.jasoncameron.dev';

	let globalCount = $state(0);
	let personalCount = $state(0);
	let isLoading = $state(true);
	let sparkles = $state<Array<{ id: number; x: number; y: number }>>([]);
	let buttonScale = $state(1);

	onMount(() => {
		const saved = localStorage.getItem('my-clicks');
		if (saved) personalCount = parseInt(saved);

		fetch(`${BASE_URL}/get/${NAMESPACE}/${KEY}`)
			.then(res => res.json())
			.then(data => {
				globalCount = data.value || 0;
				isLoading = false;
			});

		const eventSource = new EventSource(`${BASE_URL}/stream/${NAMESPACE}/${KEY}`);
		eventSource.onmessage = (event) => {
			const data = JSON.parse(event.data);
			if (data.value > globalCount) globalCount = data.value;
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
		personalCount++;
		globalCount++;
		localStorage.setItem('my-clicks', personalCount.toString());
		triggerSparkle();
		try {
			await fetch(`${BASE_URL}/hit/${NAMESPACE}/${KEY}`);
		} catch (error) {
			console.error('Error al registrar clic:', error);
		}
	}
</script>

<div class="click-wrap relative flex flex-col items-center justify-center rounded-2xl lg:sticky lg:top-24 min-h-fit group p-5 transition-all duration-300 shadow-xl">

	<!-- Info tooltip -->
	<div class="absolute top-0 right-0 z-50 group/info">
		<button class="w-7 h-7 bg-neutral-800/90 border border-neutral-600 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 backdrop-blur-sm hover-info-btn">
			<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-neutral-400">
				<circle cx="12" cy="12" r="10"/>
				<path d="M12 16v-4"/>
				<path d="M12 8h.01"/>
			</svg>
		</button>
		<div class="tooltip absolute top-full right-0 mt-2 w-72 p-3 bg-neutral-900/95 border border-neutral-700 rounded-xl shadow-2xl opacity-0 invisible transition-all duration-300 z-50 text-xs text-neutral-300 leading-relaxed backdrop-blur-sm">
			<p class="tooltip-title font-medium mb-1">Contador global en tiempo real</p>
			<p>Cada clic es de todos los que han visitado este sitio. Totalmente inútil, pero extrañamente satisfactorio.</p>
		</div>
	</div>

	<!-- Hover overlay -->
	<div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl overlay-bg"></div>

	<!-- Decorative blobs -->
	<div class="absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blob-1"></div>
	<div class="absolute bottom-0 left-0 w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blob-2"></div>

	<div class="relative flex flex-col items-center justify-center space-y-4 z-10">
		<!-- Counter display -->
		<div class="text-center">
			<div class="counter-num text-4xl font-black relative tracking-tighter mb-1">
				{#if isLoading}
					<span class="opacity-50 animate-pulse">---</span>
				{:else}
					<span class="inline-block transition-all duration-300 drop-shadow-lg">
						{globalCount.toLocaleString()}
					</span>
					{#each sparkles as sparkle (sparkle.id)}
						<div
							class="sparkle-text animate-sparkle absolute font-black pointer-events-none select-none drop-shadow-lg"
							style="left: {sparkle.x - 50}%; top: {sparkle.y - 50}%;"
						>
							+1
						</div>
					{/each}
				{/if}
			</div>
			<p class="counter-label text-xs font-mono uppercase tracking-widest">Clicks Globales</p>
		</div>

		<!-- Main button -->
		<button
			onclick={handleClick}
			disabled={isLoading}
			class="click-btn group/btn relative rounded-lg px-6 py-2 font-bold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed text-xs md:text-sm shadow-lg overflow-hidden"
			style="transform: scale({buttonScale})"
		>
			<span class="relative z-10">CLICK ME</span>
			<div class="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
		</button>

		<!-- Personal counter -->
		<p class="text-neutral-400 text-xs font-mono">
			<span class="personal-num font-bold">{personalCount}</span> {personalCount === 1 ? 'click' : 'clicks'}
		</p>
	</div>
</div>

<style>
	/* ── Palette-aware styles usando var(--cp-*) ── */
	.click-wrap {
		background: linear-gradient(135deg, color-mix(in srgb, var(--cp-primary) 8%, transparent), color-mix(in srgb, var(--cp-secondary) 8%, transparent));
		border: 1px solid var(--cp-border);
	}
	.click-wrap:hover {
		border-color: var(--cp-border-hover);
		box-shadow: 0 10px 40px var(--cp-glow);
	}

	.overlay-bg {
		background: linear-gradient(135deg, color-mix(in srgb, var(--cp-primary) 5%, transparent), color-mix(in srgb, var(--cp-secondary) 5%, transparent));
	}

	.blob-1 { background-color: color-mix(in srgb, var(--cp-primary) 10%, transparent); }
	.blob-2 { background-color: color-mix(in srgb, var(--cp-secondary) 10%, transparent); }

	.counter-num  { color: var(--cp-primary); }
	.counter-label { color: color-mix(in srgb, var(--cp-primary) 70%, transparent); }
	.sparkle-text  { color: var(--cp-primary); }
	.personal-num  { color: var(--cp-primary); }

	.click-btn {
		background: linear-gradient(to right, var(--cp-btn-from), var(--cp-btn-to));
		color: #000;
		box-shadow: 0 4px 15px var(--cp-glow-strong);
	}
	.click-btn:hover {
		box-shadow: 0 6px 20px var(--cp-btn-shadow);
		filter: brightness(1.1);
	}

	.tooltip-title { color: var(--cp-primary); }

	.hover-info-btn:hover {
		background-color: var(--cp-glow) !important;
		border-color: var(--cp-border) !important;
	}

	/* Tooltip show on parent hover */
	.group\/info:hover .tooltip {
		opacity: 1;
		visibility: visible;
	}

	@keyframes sparkle {
		0%   { opacity: 0; transform: translateY(0) scale(0) rotate(0deg); }
		20%  { opacity: 1; transform: translateY(-15px) scale(1.3) rotate(180deg); }
		100% { opacity: 0; transform: translateY(-60px) scale(0.3) rotate(360deg); }
	}
	.animate-sparkle {
		animation: sparkle 2s ease-out forwards;
	}
</style>
