<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input } from "flowbite-svelte";
  //import { MugHotSolid } from 'flowbite-svelte-icons';
  import { onMount } from 'svelte';
  let isDark = false;

  onMount(() => {
    isDark = document.documentElement.classList.contains('dark');
  });

  function toggleDark() {
    isDark = !isDark;
    document.documentElement.classList.toggle('dark', isDark);
  }
</script>

<Navbar class="sticky z-[10] top-0 bg-gray-100">
  <NavBrand href="Navigationleiste">
    <img src="/Steel_Pulse_.png" class="me-3 ml-5 h-6 sm:h-9" alt="steelPulse" />
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Steelpulse</span>
  </NavBrand>
  <div class="flex md:order-2">
    <Button size="sm">Get in Contact</Button>
    <button on:click={toggleDark} class="ml-2 px-2 py-2 rounded bg-transparent">
      {isDark ? '🌙' : '☀️'}
    </button>
    <NavHamburger />
  </div>
  <NavUl class="order-1">
    <NavLi href="/">Home</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/pricing">Pricing</NavLi>
    <NavLi href="/contact">Contact</NavLi>
  </NavUl>
</Navbar>