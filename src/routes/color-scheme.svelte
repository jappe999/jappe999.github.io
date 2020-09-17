<script>
  const colors = ["gray", "green", "yellow", "orange", "red"];
  const numbers = new Array(8).fill(null).reduce((prev) => [...prev, prev[prev.length - 1] + 1], [1]);
</script>

<svelte:head>
  <title>Jasper van der Linden</title>
</svelte:head>

<div class="flex h-screen">
  {#each colors as color}
    <div class="h-full w-full flex flex-col">
      {#each numbers as i}
        <div class="h-full p-6 bg-{color}-{i * 100}" />
      {/each}
    </div>
  {/each}
</div>
