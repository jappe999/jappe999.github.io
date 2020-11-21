<script>
  export let segment;
  export let menuItems = [];
</script>

<style>
  .navigation {
    @apply h-20 w-full hidden justify-between px-6 py-5 text-gray-500 z-30 transition-colors duration-100;
  }

  .navigation__title {
    @apply my-auto text-2xl font-semibold font-mono;
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
  <a href="/" class="navigation__title">Jasper van der Linden</a>

  <ul class="items-center hidden lg:flex">
    {#each menuItems as menuItem}
      <li class="navigation-item">
        <a
          class="navigation-item__anchor"
          class:navigation-item__anchor--active={segment === menuItem.href.substr(1) || (menuItem.href.substr(1) === '' && segment === undefined)}
          href={menuItem.href}
          {...menuItem.attributes}>
          {menuItem.name}
        </a>
      </li>
    {/each}
  </ul>
</nav>
