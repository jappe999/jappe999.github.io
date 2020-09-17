<script>
  export let segment;
  export let menuItems = [];
</script>

<style>
  .navigation {
    @apply w-full hidden justify-between px-6 py-5 text-gray-500 z-30;
  }

  .navigation__title {
    @apply text-2xl font-semibold font-mono;
  }

  .navigation-item {
    @apply px-3;
  }

  .navigation-item__anchor {
    @apply py-2 border-b-2 border-transparent;
  }

  .navigation-item__anchor--active {
    @apply border-red-500;
  }

  @screen sm {
    .navigation {
      @apply flex;
    }
  }
</style>

<nav class="navigation">
  <p class="navigation__title">Jasper van der Linden</p>

  <ul class="hidden lg:flex items-center">
    {#each menuItems as menuItem}
      <li class="navigation-item">
        <a
          class="navigation-item__anchor"
          class:navigation-item__anchor--active={segment === menuItem.href || (menuItem.href === '' && segment === undefined)}
          href={menuItem.href}
          {...menuItem.attributes}>
          {menuItem.name}
        </a>
      </li>
    {/each}
  </ul>
</nav>
