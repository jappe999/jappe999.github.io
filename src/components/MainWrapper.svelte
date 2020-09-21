<script>
  import { fade } from "svelte/transition";
</script>

<main class="min-h-full w-full flex flex-col px-6 py-4 md:py-8 text-gray-500" transition:fade={{ duration: 200 }}>
  <slot />
</main>
