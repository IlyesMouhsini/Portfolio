<script lang="ts">
  //import SectionHeader from "./SectionHeader.svelte";
  //import MeImage from "./MeImage.svelte";
  import { onMount } from "svelte";
  import { sineOut } from "svelte/easing";
  import { fly } from "svelte/transition";
  let techlist: HTMLElement | null = null;
  let visible = false;

  const techs = [
    "SQL & PL/SQL",
    "TypeScript",
    "Python",
    "Svelte",
    "Java & JavaScript",
    "WordPress",
  ];
  onMount(() => {
    if (!techlist) return;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        visible = true;
      }
    });
    observer.observe(techlist);
    return () => observer.disconnect();
  });
</script>

<p>Voici les technologies avec lesquelles j'ai travaillé:</p>
      <ul bind:this={techlist} class="tech-stack">
        {#each techs as tech}
          {#if visible}
            <li transition:fly={{ y: 100, duration: 700, easing: sineOut }}>
              {tech}
            </li>
          {/if}
        {/each}
      </ul>



<div class="page-container">

  <p class="section-title">/ À propos</p>

  <main class="main-content">

    
    <div class="text-section">

        <p class="subtitle" style="color: white;">Je m'appelle Ilyes Mouhsini, je suis actuellement en 2ème année de BUT Informatique à l'IUT de Vélizy. Passionné par l'exploitation des données et le développement, je maîtrise la gestion de bases de données SQL et le scripting, notamment en Python et Java.
Mon parcours est marqué par une solide base technique en modélisation de données. </p>
    
    </div>

    <div class="image-section">
      <img 
        src="/Icon_photo_de moi_cyber_2.png" 
        alt="Portrait Ilyes vertical" 
        class="profile-pic"
      />
    </div>

    <div class="text-section">

        <p class="subtitle" style="color: white;">Je m'appelle Ilyes Mouhsini, je suis actuellement en 2ème année de BUT Informatique à l'IUT de Vélizy. Passionné par l'exploitation des données et le développement, je maîtrise la gestion de bases de données SQL et le scripting, notamment en Python et Java.
Mon parcours est marqué par une solide base technique en modélisation de données. </p>
    
    </div>

  </main>
</div>