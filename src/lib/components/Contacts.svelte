<script lang="ts">
  import { onMount } from "svelte";
  import { sineOut, quintOut } from "svelte/easing";
  import { fly } from "svelte/transition";
  import { observeIntersection } from "$lib/observer";
  import { scrollToSection } from '$lib/ScrollToSection';
  
  // Remplacement de "visible" par "mounted" avec le $state de Svelte 5
  let mounted = $state(false);

</script>

<div id="contacts" class="page-container" use:observeIntersection={() => mounted = true}>

{#if mounted}

  <p class="section-title" in:fly={{ x: -50, duration: 1000, delay: 100, easing: quintOut }}>/ Contacts</p>

  <main class="main-content">
  
      <div class="text-section" style="margin-right: 0;">

        <p class="subtitle-big" in:fly={{ y: 20, duration: 800, delay: 700 }}>Contacter Ilyes Mouhsini :</p>

        <ul class="skills-list">
            <li class="skill-item" in:fly={{ y: 20, duration: 800, delay: 750 }}>Adresse mail : <span style="color: var(--cyber-blue);"> ilyes.mouhsini@gmail.com</span></li>
            <li class="skill-item" in:fly={{ y: 20, duration: 800, delay: 800 }}>Téléphone : <span style="color: var(--cyber-blue);"> 07 69 38 03 35</span></li>
        </ul>
        
       <p class="subtitle-big" in:fly={{ y: 20, duration: 800, delay: 900 }}>Liens et CV :</p> 
        <a 
  class="learn-more-btn" 
  in:fly={{ y: 20, duration: 800, delay: 1000 }} 
  href="https://www.linkedin.com/in/ily%C3%A8s-mouhsini-772653297/?skipRedirect=true"
  style="display: inline-block; text-decoration: none;"
  >
  LinkedIn
</a>
<a 
  class="learn-more-btn" 
  in:fly={{ y: 20, duration: 800, delay: 1100 }} 
  href="https://github.com/IlyesMouhsini"
  style="display: inline-block; text-decoration: none;"
  >
  GitHub
</a>
<a 
  class="learn-more-btn" 
  in:fly={{ y: 20, duration: 800, delay: 1200 }} 
  href="#"
  style="display: inline-block; text-decoration: none;"
  >
  CV
</a>
    </div>
    

    <div class="image-section" style="margin-left: 0;">
      <img
        in:fly={{ y: -50, duration: 1000, delay: 600, easing: quintOut }} 
        src="/Icon_photo_de_moi_cyber_3.png" 
        alt="Portrait Ilyes vertical" 
        class="profile-pic"
      />
    </div>

    
  
  </main>
  {/if}
</div>