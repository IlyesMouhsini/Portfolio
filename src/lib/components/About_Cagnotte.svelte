<script lang="ts">
  import { onMount } from "svelte";
  import { sineOut, quintOut } from "svelte/easing";
  import { fly } from "svelte/transition";
  import { observeIntersection } from "$lib/observer";
  import { scrollToSection } from '$lib/ScrollToSection';
  // Remplacement de "visible" par "mounted" avec le $state de Svelte 5
  let mounted = $state(false);

</script>

<div id="about_Cagnotte" class="page-container" use:observeIntersection={() => mounted = true}>

{#if mounted}

  <p class="section-title" in:fly={{ x: -50, duration: 1000, delay: 100, easing: quintOut }}>/ Presentation de l'application web</p>

  <main class="main-content">

    
<div class="image-section-experiences">
      <video 
        src="/videos/Cagnotte_Demo.mp4" 
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

        <p class="subtitle-big" in:fly={{ y: 20, duration: 800, delay: 400 }}>/ Cagnotte</p>

    <p class="subtitle" style="color: white;" in:fly={{ x: -50, duration: 1000, delay: 400, easing: quintOut }}>
  Cette application de gestion de cagnotte est un projet <span style="color: var(--cyber-yellow);">d'architecture logicielle</span> conçu pour faciliter le partage et l'équilibrage des dépenses entre plusieurs participants. Structurée autour d'une <span style="color: var(--cyber-blue);">architecture n-tier</span>, elle permet aux utilisateurs de suivre leurs transactions, de consulter l'historique des dépenses et d'obtenir un calcul instantané des remboursements nécessaires pour régulariser les comptes.
</p>

<p class="subtitle" style="color: white;" in:fly={{ x: -50, duration: 1000, delay: 450, easing: quintOut }}>
  Le système propose une approche <span style="color: var(--cyber-blue);">multi-interface</span> incluant une <span style="color: var(--cyber-blue);">interface Web</span> pour la navigation intuitive, une <span style="color: var(--cyber-blue);">API REST</span> sécurisée par des tokens JWT pour les services automatisés, et une <span style="color: var(--cyber-blue);">interface en ligne de commande (CLI)</span> dédiée à l'administration. Développée en <span style="color: var(--cyber-yellow);">Python</span> avec <span style="color: var(--cyber-yellow);">Flask</span> et <span style="color: var(--cyber-yellow);">SQLAlchemy</span>, l'application met l'accent sur la robustesse, la validation stricte des données et une traçabilité complète des actions via un système de journalisation centralisé.
</p>

</div>


    
    
  </main>
  {/if}
</div>