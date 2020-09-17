<script>
  import { fade } from "svelte/transition";
</script>

<main class="flex-grow w-full text-gray-500 px-6 py-4" transition:fade={{ duration: 100 }}>
  <slot />
</main>
