<script>
  import { fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { onMount } from 'svelte';
  import { observeIntersection } from "$lib/observer";
  import { scrollToSection } from '$lib/ScrollToSection';

  let mounted = $state(false);

  // tableau de données pour générer les cartes automatiquement
  const projets = [
    {
      titre: "Parc Info",
      description: "Application web de gestion de parc (utilisateurs, machines, droits). En équipe de 5, en charge de la partie developpement web.",
      technos: ["PHP", "Apache", "CSS", "MariaDB"]
    },
    {
      titre: "Cagnotte",
      description: "Application web d'une plateforme de gestion de cagnotte en ligne. Projet individuel.",
      technos: ["HTML", "Python", "CSS"]
    },
    {
      titre: "VD Studio",
      description: "Plateforme web pour la micro-entreprise VD Studio. Site vitrine pour services numériques et audiovisuelles.",
      technos: ["HTML", "React", "CSS", "TypeScript"]
    }
  ];
</script>

<div id="projets" class="page-container " use:observeIntersection={() => mounted = true}>
  {#if mounted}
    <p class="section-title" in:fly={{ x: -50, duration: 1000, delay: 100, easing: quintOut }}>/ Projets</p>

    

        <div class="page-title-section hero-content" in:fly={{ y: 50, duration: 800, delay: 200, easing: quintOut }}>
    <p class="subtitle" style="color: white;" in:fly={{ y: 50, duration: 1000, delay: 200, easing: quintOut }}>
          Voici une sélection de projets réalisés par Ilyes Mouhsini :
        </p>
    </div>  
        
    
    <main class="main-content">


        

    <!-- Conteneur des cartes -->
    <main class="cards-container" in:fly={{ y: 50, duration: 800, delay: 400, easing: quintOut }}>
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