<script>
  import { fade } from "svelte/transition";

  export let segment;
</script>

<style>
  .card {
    @apply mx-auto mb-1 px-6 py-3 bg-white text-gray-500 border border-gray-500 transition-shadow duration-100;
    box-shadow: 0.25rem 0.25rem 0 theme("colors.gray.500");
  }

  .button {
    @apply relative mb-2 px-6 py-3 bg-white text-gray-500 border border-gray-500 transition-shadow duration-100;
    box-shadow: 0.25rem 0.25rem 0 theme("colors.gray.500");
  }

  .button:hover {
    box-shadow: 0 0 0 theme("colors.gray.500");
  }
</style>

{#if segment === undefined}
  <style>
    .navigation {
      color: white !important;
      text-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
    }
  </style>
{/if}

<main transition:fade={{ duration: 200 }} class="min-h-full w-full sm:-mt-20">
  <div
    class="min-h-screen w-full flex flex-col xl:flex-row justify-center items-center pt-20 bg-gradient-to-br
    from-green-100 to-yellow-100">
    <div class="flex flex-col">
      <div class="w-full max-w-5xl flex flex-wrap justify-center items-center">
        <div class="h-full flex flex-col justify-center items-center p-6 text-center text-gray-500 font-mono">
          <img src="profile-pic.jpg" alt="Me!" class="h-64 w-64 rounded-full" />
        </div>

        <div class="h-full flex flex-col justify-center items-center p-6 text-center text-gray-500 font-mono">
          <div class="card flex flex-col mt-auto">
            <h1 class="text-5xl">Jasper van der Linden</h1>
            <h2 class="text-3xl">Full-Stack Web Developer</h2>
          </div>

          <div class="w-full flex flex-wrap justify-between mt-8 text-xl">
            <a href="/projects" class="button">Projects</a>
            <a href="/about" class="button">About</a>
            <a href="/contact" class="button">Contact me</a>
            <a href="/blog" class="button">Blog</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
