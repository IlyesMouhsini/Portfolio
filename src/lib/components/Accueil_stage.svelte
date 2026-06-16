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

  <a 
  class="cancel-btn" 
  in:fly={{ y: 20, duration: 800, delay: 700 }} 
  href="/#experiences"
  style="display: inline-block; text-decoration: none;"
  >
  Retour
</a>
    <div class="page-title-section">
      <!-- Le sous-titre arrive du haut -->
      <p class="subtitle" in:fly={{ y: -20, duration: 800, delay: 200 }}>
         Développeur Logiciel 
      </p>
      
      <!-- Ton nom arrive de la gauche avec un easing fluide -->
      <h1 class="main-title" in:fly={{ x: -50, duration: 1000, delay: 400, easing: quintOut }}>
        STAGE CEREMH
      </h1>
      
      <button 
      class="discover-btn" 
      style="align-self: center;"
      in:fly={{ y: 20, duration: 800, delay: 600 }} 
      onclick={() => scrollToSection('about_CEREMH')}>
        Explorer
      </button>
    
    <div class="description-section">
      <p class="description" style="color: white; margin-top: 2rem;" in:fly={{ y: 20, duration: 800, delay: 700 }}>
        Ce stage de 2ème année de BUT Informatique, réalisé au sein du CEREMH, a porté sur l'optimisation et la refonte ergonomique du logiciel médical BeCape. Développé en C++ avec le framework Qt, BeCape permet d’évaluer les capacités motrices de patients via des périphériques physiques (volants, pédaliers). 
      </p>
      <p class="description" style="color: white; margin-top: 1rem;" in:fly={{ y: 20, duration: 800, delay: 800 }}>
        Ma mission a consisté à moderniser le moteur d'export PDF en adoptant un rendu vectoriel haute définition, à implémenter un système de gestion de sessions (SessionManager) pour la mémorisation des préférences utilisateur, et à assurer la migration sécurisée de la base de données SQL. Ces travaux ont permis d'améliorer significativement l'ergonomie, l'accessibilité et la maintenabilité de l'outil pour les praticiens de santé.
      </p>
      <p class="description" style="color: white; margin-top: 1rem;" in:fly={{ y: 20, duration: 800, delay: 900 }}>
        Compétences techniques mobilisées :
      </p>
      <div class="align-items">
      <ul class="skills-list">
            <li class="skill-item" in:fly={{ y: 20, duration: 800, delay: 1000 }}>C++</li>
      </ul>
      <ul class="skills-list">
            <li class="skill-item" in:fly={{ y: 20, duration: 800, delay: 1100 }}>UI/UX</li>
      </ul>
      <ul class="skills-list">
            <li class="skill-item" in:fly={{ y: 20, duration: 800, delay: 1200 }}>Qt</li>
      </ul>
      <ul class="skills-list">
            <li class="skill-item" in:fly={{ y: 20, duration: 800, delay: 1300 }}>Git</li>
      </ul>
      <ul class="skills-list">
            <li class="skill-item" in:fly={{ y: 20, duration: 800, delay: 1400 }}>SQL</li>
      </ul>
      <ul class="skills-list">
            <li class="skill-item" in:fly={{ y: 20, duration: 800, delay: 1500 }}>HTML/CSS</li>
      </ul>
      <ul class="skills-list">
            <li class="skill-item" in:fly={{ y: 20, duration: 800, delay: 1600 }}>IHM</li>
      </ul>
      </div>
    </div>
    </div>
  {/if}
</main>   