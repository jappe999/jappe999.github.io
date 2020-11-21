<style>
  .button {
    @apply relative px-6 py-3 bg-white text-gray-500 border border-gray-500 transition-shadow duration-100;
    box-shadow: 0.25rem 0.25rem 0 theme("colors.gray.500");
  }

  .button:hover {
    box-shadow: 0 0 0 theme("colors.gray.500");
  }
</style>

<button class="button" role="button">
  <slot />
</button>
