<script>
  import { onMount } from "svelte";
  let navItems = ['A propos', 'Experiences', 'Projets', 'Contacts'];
  // Variables réactives pour gérer le scroll (Svelte 5)
  let hidden = $state(false);
  let lastScrollY = 0; // Pas besoin de $state ici, c'est une valeur technique interne

  // Fonction pour gérer le scroll et déterminer si la navbar doit être cachée ou affichée (marche pas pour l'instant)
  
  function handleScroll() {
    const currentScrollY = window.scrollY;
    
    // Si on descend (currentScrollY > lastScrollY) ET qu'on a dépassé le tout début de la page
    if (currentScrollY > lastScrollY && currentScrollY > 80) {
      hidden = true; // On cache
    } else {
      hidden = false; // On affiche
    }
    
    // On met à jour la dernière position
    lastScrollY = currentScrollY;
  }

  // Sécurité Svelte : on active l'écouteur seulement quand le composant est chargé à l'écran
  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Nettoyage si on change de page pour éviter les fuites de mémoire
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<svelte:window onscroll={handleScroll} />

<nav class="navbar {hidden ? 'hidden-nav' : ''}">
  
  <a href="/"><img src="/IM%20Logo.png" alt="Logo" class="logo" /></a>

  <div class="nav-links">
    
    {#each navItems as item}
      <a href="#">/ {item}</a>
    {/each}
    
    <span class="sp-text">/ SP</span>
    
  </div>
</nav>