<script>
  import { onMount } from "svelte";
  import { scrollToSection } from '$lib/ScrollToSection';

  // Variables réactives pour gérer le scroll (Svelte 5)
  let hidden = $state(false);
  let lastScrollY = 0;

  function handleScroll() {
    const currentScrollY = window.scrollY;
    // Cache la navbar si on descend et qu'on a dépassé 80px
    if (currentScrollY > lastScrollY && currentScrollY > 80) {
      hidden = true;
    } else {
      hidden = false;
    }
    lastScrollY = currentScrollY;
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<svelte:window onscroll={handleScroll} />

<nav class="navbar {hidden ? 'hidden-nav' : ''}">
  <a href="/"><img src="/IM%20Logo.png" alt="Logo" class="logo" /></a>

  <div class="nav-links">
    <a onclick={() => scrollToSection('about')}>/ A propos</a>
    <a onclick={() => scrollToSection('experiences')}>/ Experiences</a>
    <a onclick={() => scrollToSection('projets')}>/ Projets</a>
    <a onclick={() => scrollToSection('contacts')}>/ Contacts</a>
    
  </div>
</nav>