<script>
  import MainWrapper from "../components/MainWrapper.svelte";

  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
</script>

<style>
  h1,
  p {
    @apply font-mono text-gray-500;
  }
  h1 {
    @apply text-6xl font-mono font-bold text-gray-500;
  }
</style>

<svelte:head>
  <title>{status} - Jasper van der Linden</title>
</svelte:head>

<MainWrapper>
  <div class="w-full flex flex-col justify-center items-center my-auto">
    <h1>{status}</h1>

    <p>{error.message}</p>

    {#if dev && error.stack}
      <pre>{error.stack}</pre>
    {/if}
  </div>
</MainWrapper>
