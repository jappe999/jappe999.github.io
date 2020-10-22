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

<MainWrapper>
  <div class="flex flex-col w-full max-w-5xl min-h-full mx-auto">
    <div class="flex w-full h-64">
      <img
        src="data:image;base64,{post.thumbnail}"
        alt=""
        class="object-cover w-full" />
    </div>

    <article>
      <h1 class="font-mono text-5xl">{post.title}</h1>

      {@html post.content}
    </article>
  </div>
</MainWrapper>
