<script context="module">
  export function preload({ params, query }) {
    return this.fetch("/blog.json")
      .then((r) => r.json())
      .then((posts) => ({ posts }));
  }
</script>

<script>
  import MainWrapper from "../../components/MainWrapper.svelte";

  export let posts;
</script>

<style>
  .post {
    @apply w-full flex mb-6 bg-gradient-to-br from-green-100 to-yellow-100 text-gray-500 border border-gray-500 transition-shadow duration-100;
    box-shadow: 0.25rem 0.25rem 0 theme("colors.gray.500");
  }

  .post:hover {
    box-shadow: 0 0 0 theme("colors.gray.500");
  }
</style>

<svelte:head>
  <title>Blog - Jasper van der Linden</title>
</svelte:head>

<MainWrapper>
  <div class="w-full max-w-5xl min-h-full mx-auto">
    <h1 class="font-mono text-5xl">Blog</h1>

    {#each posts as post}
      <a href="/blog/{post.slug}" class="post">
        <article class="flex flex-col flex-grow px-6 pt-3 pb-4">
          <h2 class="font-mono text-3xl">{post.title}</h2>
          <p>{post.meta.description}</p>
        </article>
      </a>
    {/each}
  </div>
</MainWrapper>
