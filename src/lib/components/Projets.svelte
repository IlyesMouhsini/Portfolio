<script>
  import { fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { observeIntersection } from "$lib/observer";

  let mounted = $state(false);

  // 1. On ajoute la propriété "lien" UNIQUEMENT là où tu le souhaites
  const projets = [
    {
      titre: "Parc Info",
      description: "Application web de gestion de parc (utilisateurs, machines, droits). Projet universitaire en équipe de 5.",
      technos: ["PHP", "Apache", "CSS", "MariaDB"],
      lien: "/parc_info"  
    },
    {
      titre: "Cagnotte",
      description: "Application web d'une plateforme de gestion de cagnotte en ligne. Projet individuel.",
      technos: ["HTML", "Python", "CSS","SQL"],
      lien: "/cagnotte"
    
    },
    {
      titre: "VD Studio",
      description: "Plateforme web pour la micro-entreprise VD Studio. Site vitrine pour services numériques et audiovisuelles.",
      technos: ["HTML", "React", "CSS", "TypeScript"],
      lien: "/vd_studio"
   
    }
  ];
</script>

<div id="projets" class="page-container" use:observeIntersection={() => mounted = true}>
  {#if mounted}
<p class="section-title" in:fly={{ x: -50, duration: 1000, delay: 100, easing: quintOut }}>/ Projets</p>


<p class="section-subtitle hero-content info-text" style="display: flex; text-align: center; justify-content: center; font-size: 1.5rem;" in:fly={{ y: 50, duration: 1000, delay: 200, easing: quintOut }}>Voici quelques projets réalisés par Ilyes durant sa formation ainsi qu'en autodidacte.</p>


    <main class="cards-container" style="margin-top : 2rem;" in:fly={{ y: 50, duration: 800, delay: 400, easing: quintOut }}>
      {#each projets as projet, index}
        
        {#if projet.lien}
          <a 
            href={projet.lien}
            class="projet-card cliquable" 
            in:fly={{ y: 50, duration: 800, delay: 300 + (index * 200), easing: quintOut }}
          >
            <h3 class="projet-title">{projet.titre}</h3>
            <p class="projet-desc">{projet.description}</p>
            <div class="tech-badges">
              {#each projet.technos as tech}
                <span class="badge">{tech}</span>
              {/each}
            </div>
          </a>
        {:else}
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
        {/if}

      {/each}
    </main>

    <p class="section-subtitle info-text" style="display: flex; text-align: center; justify-content: center; margin-top: 2rem;" in:fly={{ y: 50, duration: 1000, delay: 500, easing: quintOut }}>Cliquez sur une carte pour accéder à un projet.</p>
  {/if}
</div>