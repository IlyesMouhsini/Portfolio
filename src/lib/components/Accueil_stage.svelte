<script>
  import { fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { onMount } from 'svelte';
  import { scrollToSection } from '$lib/ScrollToSection';
  
  // Le secret Svelte 5 est ici : $state()
  let mounted = $state(false);

  onMount(() => {
    mounted = true;
  });

</script>

<main class="title-solo-container main-content hero-content">
  {#if mounted}
    <div class="page-title-section">
      <!-- Le sous-titre arrive du haut -->
      <p class="subtitle" in:fly={{ y: -20, duration: 800, delay: 200 }}>
        / Développeur Logiciel
      </p>
      
      <!-- Ton nom arrive de la gauche avec un easing fluide -->
      <h1 class="main-title" in:fly={{ x: -50, duration: 1000, delay: 400, easing: quintOut }}>
        STAGE CEREMH
      </h1>
      
      <button 
      class="discover-btn" 
      style="align-self: center;"
      in:fly={{ y: 20, duration: 800, delay: 600 }} 
      onclick={() => scrollToSection('about')}>
        Découvrir
      </button>
    </div>
  {/if}
</main>