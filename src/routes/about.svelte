<script>
  import MainWrapper from "../components/MainWrapper.svelte";
</script>

<style>
  .profile-pic {
    shape-outside: ellipse();
    @apply h-64 w-64 -mr-24 p-3 float-right rounded-full bg-clip-content;
  }

  @screen md {
    .profile-pic {
      @apply h-128 w-128;
    }
  }

  p {
    @apply mb-2;
  }
</style>

<MainWrapper>
  <div class="w-full max-w-5xl min-h-full mx-auto">
    <h1 class="font-mono text-5xl">About me</h1>

    <img src="profile-pic.jpg" alt="Me!" class="profile-pic" />

    <p>This is the 'about' page. There's not much here (yet).</p>

    <p>
      Molestiae et est et fuga quia. Optio unde omnis culpa sapiente. In
      quibusdam quisquam cumque ipsam beatae veritatis cupiditate. Voluptate
      dolor expedita beatae reprehenderit pariatur quo blanditiis non. Et
      voluptates facere ad. Amet voluptas aspernatur impedit voluptates autem
      corporis fuga minus.
    </p>

    <p>
      Architecto dicta qui quis numquam et. Natus ratione atque praesentium
      culpa similique. Enim eos maxime temporibus aut natus dolore molestiae.
      Aut eos laboriosam officiis quia ad tempora magnam.
    </p>

    <p>
      Delectus temporibus molestias itaque nihil aut ut. Vitae assumenda sed
      sint architecto voluptatem quasi eos est. Exercitationem placeat voluptas
      corporis quis et aspernatur et aspernatur. Corrupti impedit placeat
      molestiae. Mollitia corrupti quidem est quia. Aliquid ullam ipsam sit
      vitae omnis natus laborum.
    </p>

    <p>
      Quae iusto asperiores aut architecto. Voluptatum a facere sit velit ab
      provident excepturi. Labore est adipisci error quae porro non. Blanditiis
      quo suscipit occaecati voluptatem id. Cumque amet impedit reiciendis
      impedit voluptas.
    </p>

    <p>
      Itaque nam voluptatem quae nobis ab quidem consequatur laudantium. Aut
      expedita facere exercitationem voluptatibus ipsum minus. Laudantium eius
      esse sed sequi ad.
    </p>
  </div>

</MainWrapper>
