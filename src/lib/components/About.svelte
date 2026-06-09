<script lang="ts">
  import { onMount } from "svelte";
  import { sineOut, quintOut } from "svelte/easing";
  import { fly } from "svelte/transition";
  import { observeIntersection } from "$lib/observer";
  import { scrollToSection } from '$lib/ScrollToSection';
  
  // Remplacement de "visible" par "mounted" avec le $state de Svelte 5
  let mounted = $state(false);

</script>

<div id="about" class="page-container" use:observeIntersection={() => mounted = true}>

{#if mounted}

  <p class="section-title" in:fly={{ x: -50, duration: 1000, delay: 100, easing: quintOut }}>/ À propos</p>

  <main class="main-content">
  

    <div class="info-text-section">
    <div class="info-text">
        <p class="subtitle" style="color: white;" in:fly={{ x: -50, duration: 1000, delay: 200, easing: quintOut }}>Prenom: </p>
        <p class="subtitle" style="color: #FF00F5;" in:fly={{ x: -50, duration: 1000, delay: 250, easing: quintOut }}>Ilyes</p>
    </div>
    <div class="info-text">
        <p class="subtitle" style="color: white;" in:fly={{ x: -50, duration: 1000, delay: 300, easing: quintOut }}>Nom: </p>
        <p class="subtitle" style="color: #FF00F5;" in:fly={{ x: -50, duration: 1000, delay: 350, easing: quintOut }}>Mouhsini</p>
    </div>
    <div class="info-text">
        <p class="subtitle" style="color: white;" in:fly={{ x: -50, duration: 1000, delay: 400, easing: quintOut }}>Formation: </p>
        <p class="subtitle" style="color: #FF00F5;" in:fly={{ x: -50, duration: 1000, delay: 450, easing: quintOut }}>BUT Informatique</p>
    </div>

    <p class="subtitle" style="color: white;" in:fly={{ x: -50, duration: 1000, delay: 500, easing: quintOut }}>
  Actuellement en deuxième année de <span style="color: #00FFFF;">BUT Informatique</span> à l'IUT de Vélizy, Ilyes Mouhsini se spécialise dans <span style="color: #00FFFF;">l'analyse décisionnelle</span> et <span style="color: #00FFFF;">l'exploitation de données</span>. 
  Passionné par la <span style="color: #FFFF00;">Business Intelligence</span>, il mobilise une solide base technique en <span style="color: #00FFFF;">modélisation </span> et en <span style="color: #00FFFF;">gestion de bases de données SQL</span> pour transformer la donnée brute en levier stratégique.
</p>

<p class="subtitle" style="color: white;" in:fly={{ x: -50, duration: 1000, delay: 550, easing: quintOut }}>
  Tourné vers l'avenir du web, il développe une expertise en <span style="color: #00FFFF;">développement Full-Stack</span> et en <span style="color: #00FFFF;">intégration moderne</span>. 
  Passionné par l'architecture logicielle/web, il met à profit sa maîtrise de frameworks comme <span style="color: #FFFF00;">SvelteKit</span> et de l'écosystème <span style="color: #00FFFF;">TypeScript</span> pour concevoir des applications web ultra-performantes, fluides et interactives. Son profil allie <span style="color: #00FFFF;">créativité</span> et sensibilité à l'<span style="color: #00FFFF;">expérience utilisateur (UI/UX)</span>, avec l'ambition de concevoir des architectures applicatives innovantes, esthétiques et parfaitement adaptées aux besoins métiers du marché.
</p>
    
    </div>

    <div class="image-section">
      <img
        in:fly={{ y: -50, duration: 1000, delay: 600, easing: quintOut }} 
        src="/Icon_photo_de moi_cyber_2.png" 
        alt="Portrait Ilyes vertical" 
        class="profile-pic"
      />
    </div>

    
    <div class="text-section">

        <p class="subtitle-big" in:fly={{ y: 20, duration: 800, delay: 700 }}>/ Hard Skills</p>

        <ul class="skills-list">
            <li class="skill-item" in:fly={{ y: 20, duration: 800, delay: 750 }}>SQL, PL/SQL</li>
            <li class="skill-item" in:fly={{ y: 20, duration: 800, delay: 800 }}>Python</li>
            <li class="skill-item" in:fly={{ y: 20, duration: 800, delay: 850 }}>Java</li>
            <li class="skill-item" in:fly={{ y: 20, duration: 800, delay: 900 }}>C, C++</li>
            <li class="skill-item" in:fly={{ y: 20, duration: 800, delay: 950 }}>Suite Adobe</li>
            <li class="skill-item" in:fly={{ y: 20, duration: 800, delay: 1000 }}>HTML</li>
            <li class="skill-item" in:fly={{ y: 20, duration: 800, delay: 1050 }}>CSS</li>
            <li class="skill-item" in:fly={{ y: 20, duration: 800, delay: 1100 }}>Javascript</li>
            <li class="skill-item" in:fly={{ y: 20, duration: 800, delay: 1150 }}>PHP</li>
            <li class="skill-item" in:fly={{ y: 20, duration: 800, delay: 1200 }}>Git</li>
            <li class="skill-item" in:fly={{ y: 20, duration: 800, delay: 1250 }}>Figma</li>
            <li class="skill-item" in:fly={{ y: 20, duration: 800, delay: 1300 }}>Svelte</li>
            <li class="skill-item" in:fly={{ y: 20, duration: 800, delay: 1350 }}>TypeScript</li>
            <li class="skill-item" in:fly={{ y: 20, duration: 800, delay: 1400 }}>Power BI</li>
            
        </ul>
        
        
    <button class="learn-more-btn" in:fly={{ y: 20, duration: 800, delay: 1600 }} onclick={() => scrollToSection('experiences')}>
        En savoir plus
      </button>
    </div>
    
  </main>
  {/if}
</div>