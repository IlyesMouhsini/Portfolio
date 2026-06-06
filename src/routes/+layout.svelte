<script>
	import '$lib/app.css';
	import './layout.css';
	import { onMount } from "svelte";
  	import { sineOut } from "svelte/easing";
  	import { fly } from "svelte/transition";
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte'; // On importe le composant
  import {scrollToSection} from '$lib/ScrollToSection';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

  <nav class="navbar">
    <img src="/IM%20Logo.png" alt="Logo Ilyes" class="logo" />
    <div class="nav-links">
      <a onclick={() => scrollToSection('about')}>/ A propos</a>
      <a onclick={() => scrollToSection('experiences')}>/ Experiences</a>
      <a href="#">/ Projets</a>
      <a href="#">/ Contacts</a>
      <a href="#">/ SP</a>
    </div>
  </nav>
{@render children()}
