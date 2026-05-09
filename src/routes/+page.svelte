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

    <div class="text-section">

        <p class="subtitle" style="color: white;">Je m'appelle Ilyes Mouhsini, je suis actuellement en 2ème année de BUT Informatique à l'IUT de Vélizy. Passionné par l'exploitation des données et le développement, je maîtrise la gestion de bases de données SQL et le scripting, notamment en Python et Java.
Mon parcours est marqué par une solide base technique en modélisation de données. </p>
    
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