<script>
  import Navbar from '$lib/Navbar.svelte';
  import Footer from '$lib/Footer.svelte';
  import Hero from '$lib/Hero.svelte';
  import "../app.css";
</script>

<Navbar />
<slot />
<Footer />
