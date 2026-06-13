<script lang="ts">
  import { onMount } from "svelte";
  import { sineOut, quintOut } from "svelte/easing";
  import { fly } from "svelte/transition";
  import { observeIntersection } from "$lib/observer";
  import { scrollToSection } from '$lib/ScrollToSection';
  // Remplacement de "visible" par "mounted" avec le $state de Svelte 5
  let mounted = $state(false);

</script>

<div id="about_Parc_Info" class="page-container" use:observeIntersection={() => mounted = true}>

{#if mounted}

  <p class="section-title" in:fly={{ x: -50, duration: 1000, delay: 100, easing: quintOut }}>/ Presentation de l'application web</p>

  <main class="main-content">

    
<div class="image-section-experiences">
      <video 
        src="/videos/Video_Presentation_Site_Sae.mp4" 
        autoplay 
        muted 
        loop 
        playsinline
        class="video-presentation"
        in:fly={{ y: -50, duration: 1000, delay: 200, easing: quintOut }}
      >
        <track kind="captions" />
        Votre navigateur ne prend pas en charge les vidéos HTML5.
      </video> </div>
    

        <div class="info-text-section">

        <p class="subtitle-big" in:fly={{ y: 20, duration: 800, delay: 400 }}>/ Parc Info</p>

    <p class="subtitle" style="color: white;" in:fly={{ x: -50, duration: 1000, delay: 400, easing: quintOut }}>
  Cette application web, développée dans le cadre d'un <span style="color: var(--cyber-blue);">projet universitaire</span>, a pour objectif de gérer un <span style="color: var(--cyber-yellow);">parc informatique pédagogique</span> déployé sur un serveur <span style="color: var(--cyber-blue);">Raspberry Pi</span>. Elle propose une plateforme centralisée permettant de superviser les équipements, de gérer les configurations matérielles et d'assurer le suivi des interventions techniques.
</p>

<p class="subtitle" style="color: white;" in:fly={{ x: -50, duration: 1000, delay: 450, easing: quintOut }}>
  Le système repose sur une gestion des accès différenciée selon les rôles (<span style="color: var(--cyber-blue);">administrateur, technicien et administrateur système</span>) pour garantir <span style="color: var(--cyber-blue);">la sécurité</span> et <span style="color: var(--cyber-blue);">la maintenance</span> du parc. Il intègre également des <span style="color: var(--cyber-blue);">outils d'analyse statistique</span> basés sur des fichiers CSV pour <span style="color: var(--cyber-blue);">visualiser des indicateurs de performance</span>, tout en permettant la consultation des journaux d'activité du serveur.
</p>

</div>


    
    
  </main>
  {/if}
</div>