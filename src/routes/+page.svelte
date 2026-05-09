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

    <p class="subtitle" style="color: white;">Actuellement en deuxième année de BUT Informatique à l'IUT de Vélizy, Ilyes Mouhsini se spécialise dans l'analyse décisionnelle et l'exploitation de données. Passionné par la Business Intelligence, il mobilise une solide base technique en modélisation et en gestion de bases de données SQL pour transformer la donnée brute en levier stratégique.</p>
    <p class="subtitle" style="color: white;">Expert en scripting Python, il l’utilise pour automatiser les processus de traitement et d’analyse de données complexes. Il travaille actuellement sur un projet de scouting BI, visant à concevoir un outil d'aide à la décision pour identifier les futurs talents du football à l’horizon 2026. Son profil allie rigueur technique et capacité de synthèse, avec l'ambition de devenir un consultant capable de traduire les enjeux métiers en solutions analytiques performantes. </p>
    
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

        <p class="subtitle" style="color: white;">Je m'appelle Ilyes Mouhsini, je suis actuellement en 2ème année de BUT Informatique à l'IUT de Vélizy. Passionné par l'exploitation des données et le développement, je maîtrise la gestion de bases de données SQL et le scripting, notamment en Python et Java.
Mon parcours est marqué par une solide base technique en modélisation de données. </p>
    
    </div>
    {/if}
  </main>
</div>