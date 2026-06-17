<script lang="ts">
  import { onMount } from "svelte";
  import { sineOut, quintOut } from "svelte/easing";
  import { fly } from "svelte/transition";
  import { observeIntersection } from "$lib/observer";
  import { scrollToSection } from '$lib/ScrollToSection';
  // Remplacement de "visible" par "mounted" avec le $state de Svelte 5
  let mounted = $state(false);

  // tableau de données pour générer les cartes automatiquement
  const projets = [
    {
      titre: "Refonte export PDF",
      description: "Modernisation du système d'export PDF des résultats cliniques de Becape",
      technos: ["HTML", "CSS", "C++","SQL","Qt"]
    },
    {
      titre: "Améliorations UX/UI",
      description: "Modernisation de l'interface et de l'expérience utilisateur notamment l'accessibilité.",
      technos: ["C++", "UI/UX", "Qt", "IHM"]
    },
    {
      titre: "Gestion de BDD",
      description: "Gestion de la base de données SQLite pour améliorer les performances et la maintenabilité.",
      technos: ["C++", "SQL", "Qt"]
    },
    {
      titre: "Optimisation de l'affichage 2D",
      description: "(QGraphicsScene) pour garantir une synchronisation temps réel fluide entre les actions sur le volant et les éléments visuels.",
      technos: ["C++", "Qt",]
    }
  ];

</script>

<div id="missions" class="page-container" use:observeIntersection={() => mounted = true}>

{#if mounted}

<p class="section-title" in:fly={{ x: -50, duration: 1000, delay: 100, easing: quintOut }}>/ Les missions</p>
    
<main class="main-content">


        

 <!-- Conteneur des cartes -->
    <main class="cards-container hero-content" style="margin-bottom: 4rem;" in:fly={{ y: 50, duration: 800, delay: 400, easing: quintOut }}>
      {#each projets as projet, index}
        <!-- Chaque carte apparaît avec un léger décalage (delay) grâce à l'index -->
        <article 
          class="projet-card" 
          in:fly={{ y: 50, duration: 800, delay: 300 + (index * 200), easing: quintOut }}
          >
          <h3 class="projet-title">{projet.titre}</h3>
          <p class="projet-desc">{projet.description}</p>
          
          <div class="tech-badges">
            {#each projet.technos as tech}
              <span class="badge">{tech}</span>
            {/each}
          </div>
        </article>
      {/each}
      
    </main>
  </main>
    {/if}

</div>