<script>
  import { onMount } from 'svelte';

  const palettes = [
    {
      id: 'gold',
      name: 'Oro',
      emoji: '✦',
      primary: '#C9A84C',
      secondary: '#E8C870',
      vars: {
        '--cp-primary':        '#C9A84C',
        '--cp-primary-dark':   '#A8872E',
        '--cp-primary-light':  '#E8C870',
        '--cp-secondary':      '#E8C870',
        '--cp-accent':         '#F5E6B8',
        '--cp-glow':           'rgba(201,168,76,0.12)',
        '--cp-glow-strong':    'rgba(201,168,76,0.22)',
        '--cp-border':         'rgba(201,168,76,0.28)',
        '--cp-border-hover':   'rgba(232,200,112,0.65)',
        '--cp-bg-card':        'rgba(201,168,76,0.05)',
        '--cp-bg-card-hover':  'rgba(201,168,76,0.10)',
        '--cp-text-muted':     '#E8C870',
        '--cp-stat-1':         '#C9A84C',
        '--cp-stat-2':         '#B8963A',
        '--cp-stat-3':         '#8b7355',
        '--cp-stat-4':         '#D4AF6A',
        '--cp-gradient-from':  '#A8872E',
        '--cp-gradient-to':    '#E8C870',
        '--cp-ping':           '#C9A84C',
        '--cp-timeline':       '#C9A84C',
        '--cp-tag-bg':         'rgba(201,168,76,0.15)',
        '--cp-tag-text':       '#E8C870',
        '--cp-tag-border':     'rgba(201,168,76,0.35)',
        '--cp-btn-from':       '#A8872E',
        '--cp-btn-to':         '#C9A84C',
        '--cp-btn-shadow':     'rgba(201,168,76,0.35)',
      }
    },
    {
      id: 'emerald',
      name: 'Esmeralda',
      emoji: '🟢',
      primary: '#10b981',
      secondary: '#06b6d4',
      vars: {
        '--cp-primary':        '#10b981',
        '--cp-primary-dark':   '#059669',
        '--cp-primary-light':  '#34d399',
        '--cp-secondary':      '#06b6d4',
        '--cp-accent':         '#6ee7b7',
        '--cp-glow':           'rgba(16,185,129,0.15)',
        '--cp-glow-strong':    'rgba(16,185,129,0.25)',
        '--cp-border':         'rgba(16,185,129,0.3)',
        '--cp-border-hover':   'rgba(16,185,129,0.6)',
        '--cp-bg-card':        'rgba(16,185,129,0.05)',
        '--cp-bg-card-hover':  'rgba(16,185,129,0.1)',
        '--cp-text-muted':     '#6ee7b7',
        '--cp-stat-1':         '#10b981',
        '--cp-stat-2':         '#06b6d4',
        '--cp-stat-3':         '#8b5cf6',
        '--cp-stat-4':         '#f59e0b',
        '--cp-gradient-from':  '#10b981',
        '--cp-gradient-to':    '#06b6d4',
        '--cp-ping':           '#10b981',
        '--cp-timeline':       '#10b981',
        '--cp-tag-bg':         'rgba(16,185,129,0.2)',
        '--cp-tag-text':       '#10b981',
        '--cp-tag-border':     'rgba(16,185,129,0.4)',
        '--cp-btn-from':       '#10b981',
        '--cp-btn-to':         '#34d399',
        '--cp-btn-shadow':     'rgba(16,185,129,0.4)',
      }
    },
    {
      id: 'violet',
      name: 'Violeta',
      emoji: '🟣',
      primary: '#8b5cf6',
      secondary: '#ec4899',
      vars: {
        '--cp-primary':        '#8b5cf6',
        '--cp-primary-dark':   '#7c3aed',
        '--cp-primary-light':  '#a78bfa',
        '--cp-secondary':      '#ec4899',
        '--cp-accent':         '#c4b5fd',
        '--cp-glow':           'rgba(139,92,246,0.15)',
        '--cp-glow-strong':    'rgba(139,92,246,0.25)',
        '--cp-border':         'rgba(139,92,246,0.3)',
        '--cp-border-hover':   'rgba(139,92,246,0.6)',
        '--cp-bg-card':        'rgba(139,92,246,0.05)',
        '--cp-bg-card-hover':  'rgba(139,92,246,0.1)',
        '--cp-text-muted':     '#c4b5fd',
        '--cp-stat-1':         '#8b5cf6',
        '--cp-stat-2':         '#ec4899',
        '--cp-stat-3':         '#06b6d4',
        '--cp-stat-4':         '#f59e0b',
        '--cp-gradient-from':  '#8b5cf6',
        '--cp-gradient-to':    '#ec4899',
        '--cp-ping':           '#8b5cf6',
        '--cp-timeline':       '#8b5cf6',
        '--cp-tag-bg':         'rgba(139,92,246,0.2)',
        '--cp-tag-text':       '#a78bfa',
        '--cp-tag-border':     'rgba(139,92,246,0.4)',
        '--cp-btn-from':       '#8b5cf6',
        '--cp-btn-to':         '#a78bfa',
        '--cp-btn-shadow':     'rgba(139,92,246,0.4)',
      }
    },
    {
      id: 'amber',
      name: 'Ámbar',
      emoji: '🟡',
      primary: '#f59e0b',
      secondary: '#ef4444',
      vars: {
        '--cp-primary':        '#f59e0b',
        '--cp-primary-dark':   '#d97706',
        '--cp-primary-light':  '#fbbf24',
        '--cp-secondary':      '#ef4444',
        '--cp-accent':         '#fde68a',
        '--cp-glow':           'rgba(245,158,11,0.15)',
        '--cp-glow-strong':    'rgba(245,158,11,0.25)',
        '--cp-border':         'rgba(245,158,11,0.3)',
        '--cp-border-hover':   'rgba(245,158,11,0.6)',
        '--cp-bg-card':        'rgba(245,158,11,0.05)',
        '--cp-bg-card-hover':  'rgba(245,158,11,0.1)',
        '--cp-text-muted':     '#fde68a',
        '--cp-stat-1':         '#f59e0b',
        '--cp-stat-2':         '#ef4444',
        '--cp-stat-3':         '#8b5cf6',
        '--cp-stat-4':         '#10b981',
        '--cp-gradient-from':  '#f59e0b',
        '--cp-gradient-to':    '#ef4444',
        '--cp-ping':           '#f59e0b',
        '--cp-timeline':       '#f59e0b',
        '--cp-tag-bg':         'rgba(245,158,11,0.2)',
        '--cp-tag-text':       '#fbbf24',
        '--cp-tag-border':     'rgba(245,158,11,0.4)',
        '--cp-btn-from':       '#f59e0b',
        '--cp-btn-to':         '#fbbf24',
        '--cp-btn-shadow':     'rgba(245,158,11,0.4)',
      }
    },
    {
      id: 'cyan',
      name: 'Cian',
      emoji: '🔵',
      primary: '#06b6d4',
      secondary: '#3b82f6',
      vars: {
        '--cp-primary':        '#06b6d4',
        '--cp-primary-dark':   '#0891b2',
        '--cp-primary-light':  '#22d3ee',
        '--cp-secondary':      '#3b82f6',
        '--cp-accent':         '#a5f3fc',
        '--cp-glow':           'rgba(6,182,212,0.15)',
        '--cp-glow-strong':    'rgba(6,182,212,0.25)',
        '--cp-border':         'rgba(6,182,212,0.3)',
        '--cp-border-hover':   'rgba(6,182,212,0.6)',
        '--cp-bg-card':        'rgba(6,182,212,0.05)',
        '--cp-bg-card-hover':  'rgba(6,182,212,0.1)',
        '--cp-text-muted':     '#a5f3fc',
        '--cp-stat-1':         '#06b6d4',
        '--cp-stat-2':         '#3b82f6',
        '--cp-stat-3':         '#8b5cf6',
        '--cp-stat-4':         '#f59e0b',
        '--cp-gradient-from':  '#06b6d4',
        '--cp-gradient-to':    '#3b82f6',
        '--cp-ping':           '#06b6d4',
        '--cp-timeline':       '#06b6d4',
        '--cp-tag-bg':         'rgba(6,182,212,0.2)',
        '--cp-tag-text':       '#22d3ee',
        '--cp-tag-border':     'rgba(6,182,212,0.4)',
        '--cp-btn-from':       '#06b6d4',
        '--cp-btn-to':         '#22d3ee',
        '--cp-btn-shadow':     'rgba(6,182,212,0.4)',
      }
    },
    {
      id: 'rose',
      name: 'Rosa',
      emoji: '🌸',
      primary: '#f43f5e',
      secondary: '#fb923c',
      vars: {
        '--cp-primary':        '#f43f5e',
        '--cp-primary-dark':   '#e11d48',
        '--cp-primary-light':  '#fb7185',
        '--cp-secondary':      '#fb923c',
        '--cp-accent':         '#fda4af',
        '--cp-glow':           'rgba(244,63,94,0.15)',
        '--cp-glow-strong':    'rgba(244,63,94,0.25)',
        '--cp-border':         'rgba(244,63,94,0.3)',
        '--cp-border-hover':   'rgba(244,63,94,0.6)',
        '--cp-bg-card':        'rgba(244,63,94,0.05)',
        '--cp-bg-card-hover':  'rgba(244,63,94,0.1)',
        '--cp-text-muted':     '#fda4af',
        '--cp-stat-1':         '#f43f5e',
        '--cp-stat-2':         '#fb923c',
        '--cp-stat-3':         '#8b5cf6',
        '--cp-stat-4':         '#06b6d4',
        '--cp-gradient-from':  '#f43f5e',
        '--cp-gradient-to':    '#fb923c',
        '--cp-ping':           '#f43f5e',
        '--cp-timeline':       '#f43f5e',
        '--cp-tag-bg':         'rgba(244,63,94,0.2)',
        '--cp-tag-text':       '#fb7185',
        '--cp-tag-border':     'rgba(244,63,94,0.4)',
        '--cp-btn-from':       '#f43f5e',
        '--cp-btn-to':         '#fb7185',
        '--cp-btn-shadow':     'rgba(244,63,94,0.4)',
      }
    },
    {
      id: 'lime',
      name: 'Lima',
      emoji: '💚',
      primary: '#84cc16',
      secondary: '#10b981',
      vars: {
        '--cp-primary':        '#84cc16',
        '--cp-primary-dark':   '#65a30d',
        '--cp-primary-light':  '#a3e635',
        '--cp-secondary':      '#10b981',
        '--cp-accent':         '#d9f99d',
        '--cp-glow':           'rgba(132,204,22,0.15)',
        '--cp-glow-strong':    'rgba(132,204,22,0.25)',
        '--cp-border':         'rgba(132,204,22,0.3)',
        '--cp-border-hover':   'rgba(132,204,22,0.6)',
        '--cp-bg-card':        'rgba(132,204,22,0.05)',
        '--cp-bg-card-hover':  'rgba(132,204,22,0.1)',
        '--cp-text-muted':     '#d9f99d',
        '--cp-stat-1':         '#84cc16',
        '--cp-stat-2':         '#10b981',
        '--cp-stat-3':         '#06b6d4',
        '--cp-stat-4':         '#f59e0b',
        '--cp-gradient-from':  '#84cc16',
        '--cp-gradient-to':    '#10b981',
        '--cp-ping':           '#84cc16',
        '--cp-timeline':       '#84cc16',
        '--cp-tag-bg':         'rgba(132,204,22,0.2)',
        '--cp-tag-text':       '#a3e635',
        '--cp-tag-border':     'rgba(132,204,22,0.4)',
        '--cp-btn-from':       '#84cc16',
        '--cp-btn-to':         '#a3e635',
        '--cp-btn-shadow':     'rgba(132,204,22,0.4)',
      }
    },
  ];

  let active = 'gold';
  let open = false;

  function applyPalette(palette) {
    const root = document.documentElement;
    for (const [key, value] of Object.entries(palette.vars)) {
      root.style.setProperty(key, value);
    }
    active = palette.id;
    localStorage.setItem('portfolio-palette', palette.id);
    open = false;
  }

  onMount(() => {
    const saved = localStorage.getItem('portfolio-palette');
    const found = palettes.find(p => p.id === saved) || palettes[0];
    applyPalette(found);
  });

  $: activePalette = palettes.find(p => p.id === active) || palettes[0];
</script>

<div class="palette-root">
  <button
    class="toggle-btn"
    on:click={() => open = !open}
    aria-label="Cambiar paleta de colores"
    title="Personalizar colores"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
    </svg>
    <span class="btn-dot" style="background: {activePalette.primary}"></span>
  </button>

  {#if open}
    <div class="panel">
      <p class="panel-title">Paleta de colores</p>
      <div class="grid">
        {#each palettes as palette}
          <button
            class="swatch-btn"
            class:swatch-active={active === palette.id}
            on:click={() => applyPalette(palette)}
            title={palette.name}
          >
            <span
              class="swatch"
              style="
                background: linear-gradient(135deg, {palette.primary}, {palette.secondary});
                box-shadow: {active === palette.id ? `0 0 0 2px #0a0a0a, 0 0 0 4px ${palette.primary}` : 'none'}
              "
            ></span>
            <span class="swatch-label">{palette.name}</span>
          </button>
        {/each}
      </div>
    </div>
  {/if}
</div>

<style>
  .palette-root {
    position: relative;
  }

  .toggle-btn {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.12);
    color: #e5e5e5;
    cursor: pointer;
    transition: background 0.2s, border-color 0.2s, transform 0.15s;
  }

  .toggle-btn:hover {
    background: rgba(255,255,255,0.1);
    border-color: rgba(255,255,255,0.25);
    transform: scale(1.05);
  }

  .toggle-btn:active {
    transform: scale(0.96);
  }

  .btn-dot {
    position: absolute;
    bottom: 9px;
    right: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 1.5px solid #0a0a0a;
  }

  .panel {
    position: absolute;
    bottom: calc(100% + 12px);
    right: 0;
    width: 200px;
    background: #111111;
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 16px;
    padding: 14px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.6);
    z-index: 100;
    animation: pop-in 0.15s ease;
  }

  @keyframes pop-in {
    from { opacity: 0; transform: translateY(6px) scale(0.97); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }

  .panel-title {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #777;
    margin: 0 0 10px;
    font-weight: 600;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }

  .swatch-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 2px;
    border-radius: 8px;
    transition: background 0.15s;
  }

  .swatch-btn:hover {
    background: rgba(255,255,255,0.06);
  }

  .swatch {
    display: block;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    transition: transform 0.15s, box-shadow 0.15s;
  }

  .swatch-btn:hover .swatch {
    transform: scale(1.1);
  }

  .swatch-label {
    font-size: 10px;
    color: #999;
    white-space: nowrap;
  }

  .swatch-active .swatch-label {
    color: #e5e5e5;
    font-weight: 600;
  }
</style>
