<script>
  import MainWrapper from "../components/MainWrapper.svelte";

  export let segment;
</script>

<style>
  .card {
    @apply mx-auto mb-1 px-6 py-3 bg-white text-gray-500 border border-gray-500 transition-shadow duration-100 shadow;
  }

  .button {
    @apply relative mb-2 px-6 py-3 bg-white text-gray-500 border border-gray-500 transition-shadow duration-100 shadow;
  }

  .button:hover {
    box-shadow: 0 0 0 theme("colors.gray.500");
  }
</style>

{#if segment === undefined}
  <style>
    body {
      @apply bg-gradient-to-br from-green-100 to-yellow-100;
    }

    .navigation {
      color: white !important;
      text-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
    }
  </style>
{/if}

<MainWrapper>
  <div
    class="flex flex-col items-center justify-center w-full min-h-full m-auto">
    <div class="flex flex-wrap items-center justify-center w-full max-w-5xl">
      <div
        class="flex flex-col items-center justify-center h-full p-6 font-mono text-center text-gray-500">
        <img src="profile-pic.jpg" alt="Me!" class="w-64 h-64 rounded-full" />
      </div>

      <div
        class="flex flex-col items-center justify-center h-full p-6 font-mono text-center text-gray-500">
        <div class="flex flex-col mt-auto card">
          <h1 class="text-5xl">Jasper van der Linden</h1>
          <h2 class="text-3xl">Full-Stack Web Developer</h2>
        </div>

        <div class="flex flex-wrap justify-between w-full mt-8 text-xl">
          <a href="/projects" class="button">Projects</a>
          <a href="/about" class="button">About</a>
          <a href="/contact" class="button">Contact me</a>
          <a href="/blog" class="button">Blog</a>
        </div>
      </div>
    </div>
  </div>
</MainWrapper>
