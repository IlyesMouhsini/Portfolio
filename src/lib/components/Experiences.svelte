<script lang="ts">
  import { onMount } from "svelte";
  import { sineOut, quintOut } from "svelte/easing";
  import { fly } from "svelte/transition";
  import { observeIntersection } from "$lib/observer";
  
  // Remplacement de "visible" par "mounted" avec le $state de Svelte 5
  let mounted = $state(false);

</script>

<div id="experiences" class="page-container" use:observeIntersection={() => mounted = true}>

{#if mounted}

  <p class="section-title" in:fly={{ x: -50, duration: 1000, delay: 100, easing: quintOut }}>/ Experiences</p>

  <main class="main-content">
    <div class="image-section-experiences">
        <img
            in:fly={{ y: -50, duration: 1000, delay: 200, easing: quintOut }} 
            src="/setup_CEREMH.jpg" 
            alt="Setup CEREMH" 
            class="pic-presentation"
        />
        </div>

        <div class="info-text-section">

        <p class="subtitle-big" in:fly={{ y: 20, duration: 800, delay: 400 }}>/ Developpeur Logiciel</p>

    <p class="subtitle" style="color: white;" in:fly={{ x: -50, duration: 1000, delay: 400, easing: quintOut }}>
  Lors de son stage de fin de deuxième année en tant que <span style="color: #00FFFF;">Développeur Logiciel</span> au <span style="color: #FFFF00;">CEREMH</span>, Ilyes Mouhsini a piloté la modernisation et la refonte UI/UX de l'application médicale <span style="color: #00FFFF;">BeCape</span>. 
  Dans un environnement de pointe liant le code à la simulation physique (volants, pédaliers), il a conçu des architectures logicielles robustes en <span style="color: #00FFFF;">C++ et Qt</span> pour fluidifier l'analyse motrice en temps réel. 
</p>

<p class="subtitle" style="color: white;" in:fly={{ x: -50, duration: 1000, delay: 350, easing: quintOut }}>
  Au-delà des aspects purement algorithmiques, il a apporté une forte sensibilité à l'<span style="color: #00FFFF;">expérience utilisateur (UI/UX)</span> et à l'accessibilité logicielle. 
  Il a notamment modernisé l'interface par l'intégration de thèmes dynamiques (Mode Sombre) pour le confort des praticiens, et restructuré les layouts XML pour un rendu responsive. Engagé pour l'inclusion, il a développé des fonctionnalités d'accessibilité destinées aux patients daltoniens (palettes adaptées et textures). Son profil a ainsi allié <span style="color: #00FFFF;">conception système</span>, gestion de <span style="color: #00FFFF;">bases de données SQL</span>.
</p>

    <p class="subtitle" style="color: white;" in:fly={{ y: 20, duration: 1000, delay: 600, easing: quintOut }}>souhaitez vous en apprendre d'avantage ?</p>
    <div class="align-items">
    <a 
  class="learn-more-btn" 
  in:fly={{ y: 20, duration: 800, delay: 700 }} 
  href="/stage_CEREMH"
  style="display: inline-block; text-decoration: none;"
  >
  oui
</a>
    <button class="cancel-btn" in:fly={{ y: 20, duration: 800, delay: 800 }} onclick={() => scrollToSection('projets')}>
        non
    </button>
    </div>
</div>


    
    
  </main>
  {/if}
</div>