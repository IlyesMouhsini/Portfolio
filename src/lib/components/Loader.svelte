<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { tweened } from 'svelte/motion';
  import { linear } from 'svelte/easing';

  
  
  // 1. On importe notre Store
  import { isAppReady } from '$lib/store';

  let isLoading = $state($page.url.hash === '');

  const progress = tweened(0, {
    duration: 1000,
    easing: linear
  });

  onMount(() => {
    // Si isLoading est sur "false" (bouton Retour), on signale directement que l'app est prête
    if (!isLoading) {
      isAppReady.set(true); // L'accueil peut s'animer tout de suite
      return;
    }

    setTimeout(() => { progress.set(30, { duration: 1000 }); }, 0); 
    setTimeout(() => { progress.set(65, { duration: 2000 }); }, 1000);
    setTimeout(() => { progress.set(100, { duration: 1000 }); }, 3000);

    setTimeout(() => {
      isLoading = false; 
      
      //2. À la fin des 7 secondes, on prévient le reste du site !
      isAppReady.set(true); 
      
    }, 5000);
  });
</script>

<svelte:head>
  <script>
    // Si le navigateur détecte un hash dans l'URL au moment du rafraîchissement,
    // il ajoute immédiatement une classe pour cacher le loader.
    if (window.location.hash) {
      document.documentElement.classList.add('hide-loader-instant');
    }
  </script>
</svelte:head>

{#if isLoading}
  <div class="loader-overlay" out:fade={{ duration: 800 }}>
    
    <p class="loader-text">Chargement du profil d'ILYES MOUHSINI</p>

    <div class="bar-container">
      <div class="bar-border">
        <div class="bar-fill" style="width: {$progress}%"></div>
      </div>
      <span class="loader-percentage">{Math.round($progress)}%</span>
    </div>

  </div>
{/if}

<style>

/* La classe qui désintègre le loader avant qu'il ne clignote */
  :global(html.hide-loader-instant) .loader-overlay {
    display: none !important;
  }

  .loader-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #0e0e0e; 
    z-index: 9999; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }

  .loader-text {
    font-family: 'Screener', sans-serif;
    color: var(--cyber-green, #00FF00);
    font-size: 1.2rem;
    letter-spacing: 0.1em;
    margin: 0;
  }

  .bar-container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .bar-border {
    width: 400px;
    height: 20px;
    border: 2px solid var(--cyber-green, #00FF00);
    border-radius: 6px;
    padding: 3px;
    box-sizing: border-box;
  }

  .bar-fill {
    height: 100%;
    background-color: var(--cyber-green, #00FF00);
    border-radius: 2px;
  }

  .loader-percentage {
    font-family: 'Screener', sans-serif;
    color: var(--cyber-green, #00FF00);
    font-size: 1.2rem;
    min-width: 45px;
    text-align: right;
  }

  @media (max-width: 600px) {
    .bar-border {
      width: 250px;
    }
  }
</style>