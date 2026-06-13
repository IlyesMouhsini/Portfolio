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

<main class="title-solo-container main-content hero-content" style="margin-bottom: 8rem;">
  {#if mounted}

  <a 
  class="cancel-btn" 
  in:fly={{ y: 20, duration: 800, delay: 700 }} 
  href="/"
  style="display: inline-block; text-decoration: none;"
  >
  Retour
</a>
    <div class="page-title-section">
      <!-- Le sous-titre arrive du haut -->
      <p class="subtitle" in:fly={{ y: -20, duration: 800, delay: 200 }}>
         Projet SAÉ
      </p>
      
      <!-- Ton nom arrive de la gauche avec un easing fluide -->
      <h1 class="main-title" in:fly={{ x: -50, duration: 1000, delay: 400, easing: quintOut }}>
        PARC INFO
      </h1>
      
      <button 
      class="discover-btn" 
      style="align-self: center;"
      in:fly={{ y: 20, duration: 800, delay: 600 }} 
      onclick={() => scrollToSection('about_Parc_Info')}>
        Explorer
      </button>
    
    <div class="description-section">
      <p class="description" style="color: white; margin-top: 2rem;" in:fly={{ y: 20, duration: 800, delay: 700 }}>
        Ce projet a été réalisé dans le cadre de la SAÉ 3 du BUT Informatique. Il consiste à concevoir et déployer une application web permettant la gestion d’un parc informatique pédagogique sur un serveur Raspberry Pi.
      </p>
      <p class="description" style="color: white; margin-top: 1rem;" in:fly={{ y: 20, duration: 800, delay: 800 }}>
        Le projet mobilise plusieurs domaines : analyse, conception, développement web, base de données, système et réseau, statistiques et documentation.
      </p>
      <p class="description" style="color: white; margin-top: 1rem;" in:fly={{ y: 20, duration: 800, delay: 900 }}>
        Compétences techniques et technologies mobilisées :
      </p>
      <div class="align-items">
      <ul class="skills-list">
            <li class="skill-item" in:fly={{ y: 20, duration: 800, delay: 1000 }}>Raspberry Pi</li>
      </ul>
      <ul class="skills-list">
            <li class="skill-item" in:fly={{ y: 20, duration: 800, delay: 1100 }}>Apache</li>
      </ul>
      <ul class="skills-list">
            <li class="skill-item" in:fly={{ y: 20, duration: 800, delay: 1200 }}>PHP</li>
      </ul>
      <ul class="skills-list">
            <li class="skill-item" in:fly={{ y: 20, duration: 800, delay: 1300 }}>MariaDB</li>
      </ul>
      <ul class="skills-list">
            <li class="skill-item" in:fly={{ y: 20, duration: 800, delay: 1400 }}>SQL</li>
      </ul>
      <ul class="skills-list">
            <li class="skill-item" in:fly={{ y: 20, duration: 800, delay: 1500 }}>Git</li>
      </ul>
      <ul class="skills-list">
            <li class="skill-item" in:fly={{ y: 20, duration: 800, delay: 1600 }}>HTML/CSS</li>
      </ul>
      </div>
    </div>
    </div>
  {/if}
</main>   