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