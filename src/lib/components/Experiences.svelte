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
            in:fly={{ y: -50, duration: 1000, delay: 600, easing: quintOut }} 
            src="/setup_CEREMH.jpg" 
            alt="Setup CEREMH" 
            class="pic-presentation"
        />
        </div>

        <div class="info-text-section">

    <p class="subtitle" style="color: white;" in:fly={{ x: -50, duration: 1000, delay: 500, easing: quintOut }}>
  Actuellement en deuxième année de <span style="color: #00FFFF;">BUT Informatique</span> à l'IUT de Vélizy, Ilyes Mouhsini se spécialise dans <span style="color: #00FFFF;">l'analyse décisionnelle</span> et <span style="color: #00FFFF;">l'exploitation de données</span>. 
  Passionné par la <span style="color: #FFFF00;">Business Intelligence</span>, il mobilise une solide base technique en <span style="color: #00FFFF;">modélisation </span> et en <span style="color: #00FFFF;">gestion de bases de données SQL</span> pour transformer la donnée brute en levier stratégique.
</p>

<p class="subtitle" style="color: white;" in:fly={{ x: -50, duration: 1000, delay: 550, easing: quintOut }}>
  Tourné vers l'avenir du web, il développe une expertise en <span style="color: #00FFFF;">développement Full-Stack</span> et en <span style="color: #00FFFF;">intégration moderne</span>. 
  Passionné par l'architecture logicielle/web, il met à profit sa maîtrise de frameworks comme <span style="color: #FFFF00;">SvelteKit</span> et de l'écosystème <span style="color: #00FFFF;">TypeScript</span> pour concevoir des applications web ultra-performantes, fluides et interactives. Son profil allie <span style="color: #00FFFF;">créativité</span> et sensibilité à l'<span style="color: #00FFFF;">expérience utilisateur (UI/UX)</span>, avec l'ambition de concevoir des architectures applicatives innovantes, esthétiques et parfaitement adaptées aux besoins métiers du marché.
</p>

</div>

    
    
  </main>
  {/if}
</div>