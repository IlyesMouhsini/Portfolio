<script>
  import { fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { scrollToSection } from '$lib/ScrollToSection';
  import { isAppReady } from '$lib/store';
</script>

<div id="accueil" class="page-container">
  
  <main class="main-content hero-content">
    {#if $isAppReady}
      <div class="text-section">
        <p class="subtitle" in:fly={{ y: -20, duration: 800, delay: 200 }}>
          / Etudiant en BUT Informatique
        </p>
        
        <h1 class="main-title" in:fly={{ x: -50, duration: 1000, delay: 400, easing: quintOut }}>
          ILYES MOUHSINI
        </h1>

        <div class="align-items">
          <button class="discover-btn" in:fly={{ y: 20, duration: 800, delay: 600 }} onclick={() => scrollToSection('about')}>
            Découvrir
          </button>
          <button class="blue-btn" in:fly={{ y: 20, duration: 800, delay: 700 }} onclick={() => scrollToSection('contacts')}>
            Contacter
          </button>
        </div>
      </div>

      <div class="image-section">
        <img 
          in:fly={{ x: 100, duration: 1200, delay: 800, easing: quintOut }}
          src="/Icon%20photo%20de%20moi%20cyber.png" 
          alt="Portrait" 
          class="profile-pic"
        />
      </div>
    {/if}
  </main>

</div>