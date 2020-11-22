<script context="module">
  export async function preload({ params }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import MainWrapper from "../../components/MainWrapper.svelte";

  export let post;
</script>

<style global>
  .blog-post p {
    @apply mt-2;
  }

  .blog-post h2,
  .blog-post h3,
  .blog-post h4,
  .blog-post h5,
  .blog-post h6 {
    @apply mt-4 mb-1;
  }

  .blog-post h2 {
    @apply text-4xl;
  }

  .blog-post h3 {
    @apply text-3xl;
  }

  .blog-post h4 {
    @apply text-2xl;
  }

  .blog-post h5 {
    @apply text-xl;
  }

  .blog-post h6 {
    @apply text-lg;
  }

  .blog-post .hljs {
    @apply rounded-md;
  }
</style>

<svelte:head>
  <title>{post.title} - Jasper van der Linden</title>
  <meta name="description" content={post.meta.description} />
  <meta name="keywords" content={post.meta.keywords.join(', ')} />
</svelte:head>

<MainWrapper>
  <div class="flex flex-col w-full max-w-5xl min-h-full mx-auto">
    {#if post.thumbnail}
      <div
        class="flex w-full h-64 mb-1 text-gray-500 border border-gray-500 shadow">
        <img src={post.thumbnail} alt="" class="object-cover w-full" />
      </div>
    {/if}

    <a href="/blog" class="my-4">&larr; Return to list of blog posts</a>

    <article class="blog-post">
      <h1 class="font-mono text-5xl">{post.title}</h1>

      {@html post.html}
    </article>
  </div>
</MainWrapper>
