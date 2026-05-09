<script>
  // On retire 'SP' du tableau car on va le gérer à part pour sa couleur rose
  let navItems = ['A propos', 'Experiences', 'Projets', 'Contacts', 'SP'];
</script>

<nav class="navbar">
  
  <img src="/IM%20Logo.png" alt="Logo" class="logo" />

  <div class="nav-links">
    
    {#each navItems as item}
      <a href="#">/ {item}</a>
    {/each}
    
    <span class="sp-text">/ SP</span>
    
  </div>
</nav>