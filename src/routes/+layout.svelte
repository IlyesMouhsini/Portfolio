<script>
	import '$lib/app.css';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte'; // On importe le composant

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

  <nav class="navbar">
    <img src="/IM%20Logo.png" alt="Logo Ilyes" class="logo" />
    <div class="nav-links">
      <a href="#">/ A propos</a>
      <a href="#">/ Experiences</a>
      <a href="#">/ Projets</a>
      <a href="#">/ Contacts</a>
      <a href="#" style="color: #FF00FF; hover-color: white;">/ SP</a>
    </div>
  </nav>
{@render children()}
