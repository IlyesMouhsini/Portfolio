<script>
  // Tableau des liens affichés dans la barre de navigation.
  let navItems = ['A propos', 'Experiences', 'Projets', 'Contacts', 'SP'];
</script>

<!-- Conteneur principal de la navigation. -->
<nav class="flex items-center justify-between px-12 py-8">
  <!-- Logo affiché à gauche dans la barre de navigation. -->
  <img src="/IM Logo.png" alt="Logo" class="h-12 w-auto object-contain" />

  <!-- Liste horizontale des éléments du menu. -->
  <ul class="flex gap-8 items-center font-base text-sm uppercase tracking-widest">
    <!-- Boucle sur chaque élément du tableau navItems. -->
    {#each navItems as item}
      <!-- Un élément de menu individuel. -->
      <li class="group cursor-pointer">
        <!-- Séparateur visuel au début de chaque lien. -->
        <span class="text-brand-green mr-1">/</span>
        <!-- Texte du lien, avec effet de couleur au survol. -->
        <span class="text-white hover:text-brand-green transition-colors">{item}</span>
      </li>
    {/each}
  </ul>
</nav>