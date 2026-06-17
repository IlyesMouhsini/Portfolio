<script>
  // import les composants depuis le dossier lib/components
  import Accueil from '$lib/components/Acceuil.svelte';
  import About from '$lib/components/About.svelte';
  import Experiences from '$lib/components/Experiences.svelte';
	import Projets from '$lib/components/Projets.svelte';
  import Contacts from '$lib/components/Contacts.svelte';
  import Loader from '$lib/components/Loader.svelte';
</script>
<svelte:head>
  <title>Portfolio Ilyes Mouhsini</title>
</svelte:head>

<Loader />
<Accueil />
<About />
<Experiences />
<Projets />
<Contacts />