<script>
  import { fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { onMount } from 'svelte';
  
  // Le secret Svelte 5 est ici : $state()
  let mounted = $state(false);

  onMount(() => {
    mounted = true;
  });
</script>

<main class="main-content">
  {#if mounted}
    <div class="text-section">
      <!-- Le sous-titre arrive du haut -->
      <p class="subtitle" in:fly={{ y: -20, duration: 800, delay: 200 }}>
        / Etudiant en BUT Informatique
      </p>
      
      <!-- Ton nom arrive de la gauche avec un easing fluide -->
      <h1 class="main-title" in:fly={{ x: -50, duration: 1000, delay: 400, easing: quintOut }}>
        ILYES MOUHSINI
      </h1>
      
      <button class="discover-btn" in:fly={{ y: 20, duration: 800, delay: 600 }}>
        Découvrir
      </button>
    </div>

    <div class="image-section">
      <!-- L'image arrive de la droite -->
      <img 
        in:fly={{ x: 100, duration: 1200, delay: 800, easing: quintOut }}
        src="/Icon%20photo%20de%20moi%20cyber.png" 
        alt="Portrait" 
        class="profile-pic"
      />
    </div>
  {/if}
</main>

/* -------------------------- Preview ----------------------------------------- */

<div class="page-container">

  <p class="section-title">/ À propos</p>

  <main class="main-content">
  {#if mounted}

    <div class="info-text-section">
    <div class="info-text">
        <p class="subtitle" style="color: white;">Prenom: </p>
        <p class="subtitle" style="color: #FF00F5;">Ilyes</p>
    </div>
    <div class="info-text">
        <p class="subtitle" style="color: white;">Nom: </p>
        <p class="subtitle" style="color: #FF00F5;">Mouhsini</p>
    </div>
    <div class="info-text">
        <p class="subtitle" style="color: white;">Formation: </p>
        <p class="subtitle" style="color: #FF00F5;">BUT Informatique</p>
    </div>

    <p class="subtitle" style="color: white;">Actuellement en deuxième année de <span style="color: #00FFFF;">BUT Informatique</span>  à l'IUT de Vélizy, Ilyes Mouhsini se spécialise dans <span style="color: #00FFFF;">l'analyse décisionnelle</span> et <span style="color: #00FFFF;">l'exploitation de données</span>. Passionné par la <span style="color: #FFFF00;">Business Intelligence</span>, il mobilise une solide base technique en <span style="color: #00FFFF;">modélisation </span> et en <span style="color: #00FFFF;">gestion de bases de données SQL</span> pour transformer la donnée brute en levier stratégique.</p>
    <p class="subtitle" style="color: white;">Expert en <span style="color: #00FFFF;">scripting Python</span>, il l’utilise pour automatiser les processus de traitement et d’analyse de données complexes. Il travaille actuellement sur un projet de <span style="color: #FFFF00;">scouting BI</span>, visant à concevoir un <span style="color: #00FFFF;">outil d'aide à la décision</span> pour identifier les futurs talents du football à l’horizon 2026. Son profil allie <span style="color: #00FFFF;">rigueur technique</span> et <span style="color: #00FFFF;">capacité de synthèse</span>, avec l'ambition de devenir un <span style="color: #FFFF00;">consultant</span> capable de traduire les <span style="color: #00FFFF;">enjeux métiers</span> en <span style="color: #00FFFF;">solutions analytiques performantes</span>. </p>
    
    </div>

    <div class="image-section">
      <img
        in:fly={{ x: -50, duration: 1000, delay: 400, easing: quintOut }} 
        src="/Icon_photo_de moi_cyber_2.png" 
        alt="Portrait Ilyes vertical" 
        class="profile-pic"
      />
    </div>

    
    <div class="text-section">

        <p class="subtitle-big">/ Hard Skills</p>

        <ul class="skills-list">
            <li class="skill-item">SQL</li>
            <li class="skill-item">Python</li>
            <li class="skill-item">Power BI</li>
            <li class="skill-item">Excel</li>
        </ul>
        
        
    
    </div>
    {/if}
  </main>
</div>