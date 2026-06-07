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

  <p class="section-title" in:fly={{ x: -50, duration: 1000, delay: 100, easing: quintOut }}>/ Presentation de l'organisation</p>

  <main class="main-content">
    <div class="image-section-experiences">
        <img
            in:fly={{ y: -50, duration: 1000, delay: 200, easing: quintOut }} 
            src="/BancBecape_2021.jpeg" 
            alt="Setup CEREMH" 
            class="pic-presentation"
        />
        </div>

        <div class="info-text-section">

        <p class="subtitle-big" in:fly={{ y: 20, duration: 800, delay: 400 }}>/ CEREMH</p>

    <p class="subtitle" style="color: white;" in:fly={{ x: -50, duration: 1000, delay: 400, easing: quintOut }}>
  Le <span style="color: var(--cyber-yellow);">CEREMH</span> (Centre de Ressources et d’Innovation Mobilité Handicap) est une association loi 1901 reconnue d’intérêt général, fondée en 2007. Sa création est née d'un constat majeur : le manque de structures de transfert entre <span style="color: var(--cyber-blue);">la recherche technologique</span> et les <span style="color: var(--cyber-blue);">besoins réels des personnes en situation de handicap</span>. 
</p>

<p class="subtitle" style="color: white;" in:fly={{ x: -50, duration: 1000, delay: 350, easing: quintOut }}>
  Historiquement, le centre s'est construit autour d'un partenariat fort avec <span style="color: var(--cyber-yellow);">l'Université de Versailles Saint-Quentin-en-Yvelines (UVSQ)</span> et des acteurs du monde de la santé. Au fil des années, le <span style="color: var(--cyber-yellow);">CEREMH</span> a su fédérer un écosystème unique regroupant des <span style="color: var(--cyber-blue);">acteurs de l'automobile</span>, des <span style="color: var(--cyber-blue);">laboratoires de recherche (notamment le LISV)</span> et des <span style="color: var(--cyber-blue);">professionnels de la rééducation</span>. Cette synergie a permis l'émergence de projets innovants, dont le logiciel <span style="color: var(--cyber-yellow);">BeCape</span>, qui constitue aujourd'hui l'un des piliers de l'expertise du centre en matière <span style="color: var(--cyber-blue);">d'évaluation des capacités motrices</span>.

</p>
</div>


    
    
  </main>
  {/if}
</div>