<script lang="ts">
  import { onMount } from "svelte";
  import { sineOut, quintOut } from "svelte/easing";
  import { fly } from "svelte/transition";
  import { observeIntersection } from "$lib/observer";
  import { scrollToSection } from '$lib/ScrollToSection';
  // Remplacement de "visible" par "mounted" avec le $state de Svelte 5
  let mounted = $state(false);

</script>

<div id="about_CEREMH" class="page-container" use:observeIntersection={() => mounted = true}>

{#if mounted}

  <p class="section-title" in:fly={{ x: -50, duration: 1000, delay: 100, easing: quintOut }}>/ Presentation du logiciel</p>

  <main class="main-content">

    <div class="image-section-experiences-right">
        <img
            in:fly={{ y: -50, duration: 1000, delay: 200, easing: quintOut }} 
            src="/ecran_becape.png" 
            alt="Setup CEREMH" 
            class="pic-presentation"
        />
        </div>
    

        <div class="info-text-section">

        <p class="subtitle-big" in:fly={{ y: 20, duration: 800, delay: 400 }}>/ BeCape</p>

    <p class="subtitle" style="color: white;" in:fly={{ x: -50, duration: 1000, delay: 400, easing: quintOut }}>
  Au cœur de la stratégie d’innovation du CEREMH, <span style="color: var(--cyber-yellow);">BeCape</span> s’impose comme une suite logicielle de diagnostic de pointe dédiée à l’évaluation de la mobilité. Conçu comme un véritable hub technologique, cet outil médical permet aux praticiens de réaliser des <span style="color: var(--cyber-blue);">tests cliniques normés</span> en connectant le code à des simulateurs physiques. Le logiciel analyse avec précision les aptitudes des patients à travers des mesures de force physique, évaluant notamment la poussée maximale exercée sur une pédale de frein ou la force de rotation appliquée sur un volant.
</p>

<p class="subtitle" style="color: white;" in:fly={{ x: -50, duration: 1000, delay: 450, easing: quintOut }}>
  Parallèlement aux mesures de puissance, <span style="color: var(--cyber-yellow);">BeCape</span> intègre des modules avancés pour analyser la coordination et les fonctions cognitives des patients. Il propose ainsi des tests de modulation de direction interactifs, matérialisés par le suivi de trajectoire précis entre des éléments visuels, ainsi que des évaluations réflexives mesurant le <span style="color: var(--cyber-blue);">temps de réaction</span> exact face à des stimuli visuels. Cette synergie d’analyses offre aux professionnels de santé un écosystème complet et fluide pour quantifier rigoureusement les capacités motrices et de conduite.
</p>

</div>


    
    
  </main>
  {/if}
</div>