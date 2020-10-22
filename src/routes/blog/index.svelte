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
    @apply h-48 w-full flex mb-6 bg-gradient-to-br from-green-100 to-yellow-100 text-gray-500 border border-gray-500 transition-shadow duration-100;
    box-shadow: 0.25rem 0.25rem 0 theme("colors.gray.500");
  }

  .post:hover {
    box-shadow: 0 0 0 theme("colors.gray.500");
  }
</style>

<MainWrapper>
  <div class="w-full max-w-5xl min-h-full mx-auto">
    <h1 class="font-mono text-5xl">Blog</h1>

    {#each posts as post}
      <a href="/blog/{post.slug}" class="post">
        <div class="flex flex-col flex-grow px-6 py-3">
          <span class="font-mono text-3xl ">{post.title}</span>

          <p>{post.content.replace(/<([^>]+)>/gi, '').substr(0, 255)}</p>
        </div>
        <div class="w-64 h-full overflow-hidden border-l border-gray-500">
          <img src={post.thumbnail} alt="" class="object-cover h-full" />
        </div>
      </a>
    {/each}
  </div>
</MainWrapper>
