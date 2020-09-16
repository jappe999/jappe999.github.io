<script>
  import { createEventDispatcher } from "svelte";
  import { fade, fly } from "svelte/transition";

  const dispatch = createEventDispatcher();

  export let segment;
  export let menuOpen = false;
  export let menuItems = [];

  const getName = (segment) => {
    const item = menuItems.find(({ href }) => href === segment || (href === "" && segment === undefined));
    return (item || {}).description;
  };

  const close = () => {
    dispatch("toggle", false);
  };

  const open = () => {
    dispatch("toggle", true);
  };

  $: segment && close();
</script>

<style>
  .sidebar {
    @apply h-screen flex flex-col items-center p-6 shadow-xs text-gray-500;
  }

  .sidebar-menu {
    @apply h-8 w-8;
  }

  .sidebar-menu__line {
    @apply bg-gray-500 rounded-full;
    height: 0.1875rem;
    margin-top: 0.375rem;
  }

  .sidebar-segment {
    @apply h-full w-full relative flex justify-center items-center text-center;
  }

  .sidebar-segment__text {
    @apply absolute text-2xl whitespace-no-wrap font-mono transform -rotate-90 origin-center;
  }

  .menu-wrapper {
    @apply h-screen w-full fixed flex p-6 bg-white shadow text-gray-500 font-light font-mono overflow-auto;
  }

  .menu {
    @apply m-auto text-center;
  }

  .menu-item {
    @apply py-6 text-3xl;
  }

  .menu-item__anchor {
    @apply border-b-2 border-transparent transition-colors duration-300;
  }

  .menu-item__anchor--active {
    @apply border-gray-500;
  }
</style>

<svelte:head>
  <title>{getName(segment)} - Jasper van der Linden</title>
</svelte:head>

<div class="sidebar">
  <div class="sidebar-menu" on:click={open}>
    <div class="sidebar-menu__line w-8" />
    <div class="sidebar-menu__line w-4" />
    <div class="sidebar-menu__line w-6" />
  </div>
  <div class="sidebar-segment">
    <p class="sidebar-segment__text">{getName(segment)}</p>
  </div>
</div>

{#if menuOpen}
  <nav class="menu-wrapper" in:fade out:fade={{ delay: 200 }}>
    <div class="w-full fixed mt-2">
      <div class="sidebar-menu relative" on:click={close}>
        <div class="sidebar-menu__line w-8 absolute transform origin-center rotate-45" />
        <div class="sidebar-menu__line w-8 absolute transform origin-center -rotate-45" />
      </div>
    </div>
    <ul class="menu">
      {#each menuItems as menuItem, i}
        <li
          class="menu-item"
          in:fly={{ y: 100, duration: 500, delay: i * 100 }}
          out:fly={{ y: 100, duration: 500, delay: (menuItems.length - i - 1) * 100 }}>
          <a
            class="menu-item__anchor"
            class:menu-item__anchor--active={segment === menuItem.href || (menuItem.href === '' && segment === undefined)}
            href={menuItem.href}
            {...menuItem.attributes}>
            {menuItem.name}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
{/if}
