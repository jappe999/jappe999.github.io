<script>
  import Menu from "../components/Menu.svelte";

  export let segment;
  export let menuOpen = false;

  const toggleMenu = () => {
    menuOpen = !menuOpen;
  };
</script>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

<div class="flex flex-no-wrap">
  <Menu {segment} {menuOpen} on:toggle={toggleMenu} />

  <main class="min-h-screen w-full overflow-y-scroll overflow-x-hidden p-4">
    <slot />
  </main>
</div>
