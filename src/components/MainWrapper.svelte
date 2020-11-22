<script>
  import { fade } from "svelte/transition";
</script>

<main
  class="flex flex-col w-full min-h-full px-6 py-4 text-gray-500 md:py-8"
  transition:fade={{ duration: 200 }}>
  <slot />
</main>
