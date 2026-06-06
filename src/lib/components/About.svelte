<script lang="ts">
  //import SectionHeader from "./SectionHeader.svelte";
  //import MeImage from "./MeImage.svelte";
  import { onMount } from "svelte";
  import { sineOut } from "svelte/easing";
  import { fly } from "svelte/transition";
  let techlist: HTMLElement | null = null;
  let visible = false;
  
</script>

<div class="page-container">

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

    <p class="subtitle" style="color: white;" in:fly={{ x: -50, duration: 1000, delay: 500, easing: quintOut }}>Actuellement en deuxième année de <span style="color: #00FFFF;">BUT Informatique</span>  à l'IUT de Vélizy, Ilyes Mouhsini se spécialise dans <span style="color: #00FFFF;">l'analyse décisionnelle</span> et <span style="color: #00FFFF;">l'exploitation de données</span>. Passionné par la <span style="color: #FFFF00;">Business Intelligence</span>, il mobilise une solide base technique en <span style="color: #00FFFF;">modélisation </span> et en <span style="color: #00FFFF;">gestion de bases de données SQL</span> pour transformer la donnée brute en levier stratégique.</p>
    <p class="subtitle" style="color: white;" in:fly={{ x: -50, duration: 1000, delay: 550, easing: quintOut }}>Expert en <span style="color: #00FFFF;">scripting Python</span>, il l’utilise pour automatiser les processus de traitement et d’analyse de données complexes. Il travaille actuellement sur un projet de <span style="color: #FFFF00;">scouting BI</span>, visant à concevoir un <span style="color: #00FFFF;">outil d'aide à la décision</span> pour identifier les futurs talents du football à l’horizon 2026. Son profil allie <span style="color: #00FFFF;">rigueur technique</span> et <span style="color: #00FFFF;">capacité de synthèse</span>, avec l'ambition de devenir un <span style="color: #FFFF00;">consultant</span> capable de traduire les <span style="color: #₀₀FFFF;">enjeux métiers</span> en <span style="color: #₀₀FFFF;">solutions analytiques performantes</span>. </p>
    
    </div>

    <div class="image-section">
      <img
        in:fly={{ x: -50, duration: 1000, delay: 600, easing: quintOut }} 
        src="/Icon_photo_de moi_cyber_2.png" 
        alt="Portrait Ilyes vertical" 
        class="profile-pic"
      />
    </div>

    
    <div class="text-section">

        <p class="subtitle-big" in:fly={{ y: 20, duration: 800, delay: 700 }}>/ Hard Skills</p>

        <ul class="skills-list">
            <li class="skill-item" in:fly={{ y: 20, duration: 800, delay: 750 }}>SQL</li>
            <li class="skill-item" in:fly={{ y: 20, duration: 800, delay: 800 }}>Python</li>
            <li class="skill-item" in:fly={{ y: 20, duration: 800, delay: 850 }}>Power Query</li>
            <li class="skill-item" in:fly={{ y: 20, duration: 800, delay: 900 }}>Power BI</li>
            <li class="skill-item" in:fly={{ y: 20, duration: 800, delay: 950 }}>Excel</li>
        </ul>
        
        
    
    </div>
  </main>
  {/if}
</div>