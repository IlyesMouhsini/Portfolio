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


    <div class="page-title-section">
      <!-- Le sous-titre arrive du haut -->
      <p class="subtitle" in:fly={{ y: -20, duration: 800, delay: 200 }}>
         Projet personnel (micro-entreprise)
      </p>
      
      <!-- Ton nom arrive de la gauche avec un easing fluide -->
      <h1 class="main-title" in:fly={{ x: -50, duration: 1000, delay: 400, easing: quintOut }}>
        VD STUDIO
      </h1>
      
      <span class="badge" style="display: flex; justify-content: center;color: var(--cyber-yellow); border: 1px solid var(--cyber-yellow);" in:fly={{ y: 20, duration: 800, delay: 600 }}>
        Projet en cours de développement
      </span>

      <p class="description" style="color: white; margin-top: 2rem;" in:fly={{ y: 20, duration: 800, delay: 700 }}>
        Ce projet est le site vitrine de la micro-entreprise d'Ilyes Mouhsini: VD Studio, spécialisée dans les services numériques et audiovisuels. Il a été conçu pour présenter ses compétences, ses services et ses réalisations dans le domaine du développement web et de la création de contenu audiovisuel. </p>
      
      <p class="description" style="color: white; margin-top: 2rem;" in:fly={{ y: 20, duration: 800, delay: 700 }}>
        Ce projet est en cours de développement et sera bientôt disponible.</p>
      <div style="display: flex; justify-content: center; align-items: center; margin-top: 2rem; min-height: 200px;">
        <a 
          class="cancel-btn" 
          in:fly={{ y: 20, duration: 800, delay: 700 }} 
          href="/#projets"
          style="text-decoration: none;"
        >
          Retour
        </a>
      </div>
    </div>

    
    
  {/if}
</main>   