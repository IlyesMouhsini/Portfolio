<script>
  import '$lib/app.css';
  // 🚨 ASTUCE : J'ai désactivé layout.css. S'il te manque des styles, réactive-le, 
  // mais assure-toi qu'il ne modifie PAS la couleur de la navbar !
  // import './layout.css'; 

  import favicon from '$lib/assets/favicon.svg';
  import Navbar from '$lib/components/Navbar.svelte'; // On importe le composant

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<Navbar />

{@render children()}