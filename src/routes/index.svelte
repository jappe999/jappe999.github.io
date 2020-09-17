<script>
  import { fade } from "svelte/transition";

  export let segment;
</script>

{#if segment === undefined}
  <style>
    .navigation {
      color: white !important;
      text-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
    }
  </style>
{/if}

<main transition:fade={{ duration: 100 }} class="min-h-full w-full sm:-mt-20">
  <div class="h-screen w-full bg-gradient-to-br from-green-100 to-yellow-100">
    <div class="h-full max-w-5xl flex flex-col justify-center items-center mx-auto text-center text-white font-mono">
      <p class="text-5xl">Hello!</p>
      <h1 class="text-3xl">My name is Jasper.</h1>
    </div>
  </div>
</main>
