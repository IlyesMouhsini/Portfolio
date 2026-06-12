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
      titre: "WEB",
      description: "Competences en développement web, aquises durant ma formation ainsi qu'en autodidacte.",
      technos: ["HTML", "CSS", "PHP","JavaScript","TypeScript"  , "Svelte"]
    },
    {
      titre: "BDD & Data",
      description: "Compétences en gestion et optimisation des bases de données, aquises durant ma formation ainsi qu'en autodidacte.",
      technos: ["SQL", "PL/SQL", "R", "Python", "Power BI", "MangoDB"]
    },
    {
      titre: "Programmation",
      description: "Compétences en programmation, acquises durant ma formation, mon stage ainsi qu'en autodidacte.",
      technos: ["C++", "C", "Qt","Java", "Python", "R"]
    },
    {
      titre: "Outils & Logiciels",
      description: "Compétences en utilisation d'outils et logiciels professionnels, aquises durant ma formation ainsi qu'en autodidacte.",
      technos: ["VS Code", "Suite JetBrains","Suite Microsoft Office", "Git", "Linux", "Docker","Suite Adobe", "Figma","DaVinci Resolve"]
    },
    {
      titre: "Scripting",
      description: "Compétences en scripting, acquises durant ma formation.",
      technos: ["Bash", "PowerShell"]
    },
    {
      titre: "Langues",
      description: "Compétences en langues étrangères.",
      technos: ["Anglais (C1)", "Français (natif)", "Espagnol(B2)", "Arabe (bilingue)"]
    },
    {
      titre: "Management",
      description: "Compétences en management, acquises durant ma formation.",
      technos: ["Gestion de projet","Communication","Travail en équipe","Methodes agiles","Scrum","Cycle en V"]
    },
    {
      titre: "Gestion d'entreprise",
      description: "Compétences en gestion d'entreprise, acquises en autodidacte lors de la création et du developpement de ma micro-entreprise (VD Studio).",
      technos: ["Gestion de projet","Communication","Relation client","Négociation",]
    }
  ];

</script>

<div id="missions" class="page-container" use:observeIntersection={() => mounted = true}>

{#if mounted}




<p class="section-title hero-content" in:fly={{ x: -50, duration: 1000, delay: 100, easing: quintOut }}>/ Competences</p>



    
<main class="main-content">

  


        

 <!-- Conteneur des cartes -->
    <main class="cards-container hero-content" in:fly={{ y: 50, duration: 800, delay: 400, easing: quintOut }}>
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

<main class="main-content" style="display: flex; justify-content: center; margin-top: 2rem; margin-bottom: 8rem;">
    <a 
  class="cancel-btn" 
  in:fly={{ y: 20, duration: 800, delay: 700 }} 
  href="/"
  style="display: inline-block; text-decoration: none;"
  >
  Retour
</a>
  </main>