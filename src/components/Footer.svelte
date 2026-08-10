<script>
    import { onMount } from 'svelte';

    // 1. Definimos tus constantes de configuración
    const NAMESPACE = 'luisangelcardona.dev';
    const KEY = 'portfolio-clicks';
    const BASE_URL = 'https://abacus.jasoncameron.dev';

    // Variables de estado
    let visits = 0;
    let loading = true;
    let error = false;

    // onMount se ejecuta solo cuando el componente se carga en el navegador
    onMount(async () => {
        try {
            // 2. Construimos la URL usando las variables.
            // Esto dará como resultado: https://abacus.jasoncameron.dev/hit/luisangelcardona.dev/portfolio-clicks
            const response = await fetch(`${BASE_URL}/hit/${NAMESPACE}/${KEY}`);

            if (!response.ok) {
                throw new Error('Error en la respuesta de la red');
            }

            const data = await response.json();
            visits = data.value;
        } catch (e) {
            console.error("Error al cargar el contador de visitas:", e);
            error = true;
        } finally {
            loading = false;
        }
    });
</script>

<footer class="mt-20 border-t border-neutral-800 bg-neutral-900/30 backdrop-blur-sm py-8 px-4 rounded-t-3xl">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        <!-- Derechos y año automático -->
        <div class="flex items-center gap-2">
            <span class="text-neutral-400 text-sm">
                © {new Date().getFullYear()} Luis Ángel Cardona.
            </span>
        </div>

        <!-- Contenedor del contador de Abacus -->
        <div class="cp-stats-panel flex items-center gap-3 px-5 py-3 rounded-xl bg-neutral-800/50 border border-neutral-700 shadow-lg">
            <!-- Icono de ojito -->
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[var(--cp-primary-light)]">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                <circle cx="12" cy="12" r="3"/>
            </svg>

            <div class="flex flex-col">
                <span class="text-[10px] text-neutral-400 uppercase font-bold tracking-wider leading-none mb-1">
                    Visitas al perfil
                </span>

                <!-- Lógica condicional de Svelte -->
                {#if loading}
                    <div class="h-4 w-12 bg-neutral-700 animate-pulse rounded"></div>
                {:else if error}
                    <span class="text-xs text-red-400 font-mono font-medium">No disponible</span>
                {:else}
                    <span class="text-sm text-white font-mono font-bold leading-none tracking-wider">
                        {visits.toLocaleString()}
                    </span>
                {/if}
            </div>
        </div>

        <!-- Créditos de tecnología -->
        <div class="text-neutral-500 text-xs text-center md:text-right flex flex-col gap-1">
            <span>Construido con Astro & Svelte</span>
        </div>
    </div>
</footer>