<script>
  import MainWrapper from '../components/MainWrapper.svelte';
</script>

<style>
  .project {
    @apply w-64 flex flex-col flex-grow mx-3 mb-6 p-2 bg-green-700 transition-shadow duration-100;
    box-shadow: 0.25rem 0.25rem 0 theme('colors.gray.500');
  }

  .project:hover {
    box-shadow: 0 0 0 theme('colors.gray.500');
  }

  .project__media-wrapper {
    @apply relative pb-2/3;
  }

  .project__media-wrapper img {
    @apply h-full w-full absolute border border-green-900 object-cover;
  }

  .project__media-wrapper--fit img {
    @apply object-fill;
  }

  .project__content {
    @apply h-full pt-2 flex flex-col text-white;
  }

  .project__title {
    @apply pb-3 text-2xl font-mono;
  }

  .project__button {
    @apply py-1 px-3 text-white italic bg-red-700 transition-transform transform;
  }

  .project__button:hover {
    @apply bg-red-900;
  }
</style>

<MainWrapper>
  <div class="max-w-5xl w-full mx-auto">
    <h1 class="text-5xl font-mono">Projects</h1>

    <ul class="flex flex-wrap items-stretch justify-between -mx-3">
      <li class="project">
        <div class="project__media-wrapper project__media-wrapper--fit bg-white">
          <img src="/projects/logo-project-cards.svg" alt="Project Cards logo" />
        </div>
        <div class="project__content">
          <b class="project__title">Project Cards</b>
          <p>A party game for horrible people. Online!</p>

          <div class="flex flex-wrap justify-end mt-auto pt-4 space-x-2">
            <a href="https://project-cards-v3.herokuapp.com" target="_blank" class="project__button">Website</a>
            <a href="https://github.com/jappe999/project-cards" target="_blank" class="project__button">Source</a>
          </div>
        </div>
      </li>

      <li class="project">
        <div class="project__media-wrapper">
          <img src="/projects/generated-terrain.png" alt="Generated terrain" />
        </div>
        <div class="project__content">
          <b class="project__title">Terrain Generator</b>
          <p>A simple tool to generate images of pixelated terrains. Quick build for a school project.</p>

          <div class="flex flex-wrap justify-end mt-auto pt-4 space-x-2">
            <a href="https://terrain-generator.vercel.app" target="_blank" class="project__button">Demo</a>
            <a href="https://github.com/jappe999/terrain-generator" target="_blank" class="project__button">Source</a>
          </div>
        </div>
      </li>

      <li class="project">
        <div class="project__media-wrapper">
          <img src="/projects/designtree.png" alt="" />
        </div>
        <div class="project__content">
          <b class="project__title">Design tree</b>
          <p>A tool to help the Delft boat race team developing their boat!</p>
        </div>

        <div class="flex flex-wrap justify-end mt-auto pt-4 space-x-2">
          <a href="https://designtree.herokuapp.com" target="_blank" class="project__button">Demo</a>
          <a href="https://github.com/jappe999/designtree" target="_blank" class="project__button">Source</a>
        </div>
      </li>

      <li class="project">
        <div class="project__media-wrapper">
          <img src="/projects/dailyperform.png" alt="" />
        </div>
        <div class="project__content">
          <b class="project__title">Daily Perform</b>
          <p>A suite of tools that can help runners progress in their training.</p>
        </div>

        <div class="flex flex-wrap justify-end mt-auto pt-4 space-x-2">
          <a href="https://dailyperform.com" target="_blank" class="project__button">Website</a>
        </div>
      </li>

      <li class="project">
        <div class="project__media-wrapper">
          <img src="/projects/codepen.png" alt="" />
        </div>
        <div class="project__content">
          <b class="project__title">CodePens!</b>
          <p>
            In the past I've created a lot of CSS fiddles and illustrations. I've showcased them all on my CodePen
            account.
          </p>
        </div>

        <div class="flex flex-wrap justify-end mt-auto pt-4 space-x-2">
          <a href="https://codepen.io/jappe/" target="_blank" class="project__button">CodePen</a>
        </div>
      </li>

      <li class="project">
        <div class="project__media-wrapper">
          <img src="successkid.jpg" alt="Success kid" />
        </div>
        <div class="project__content">
          <b class="project__title">Your Project!</b>
          <p>Want your awesome project added to this list?</p>
        </div>

        <div class="flex flex-wrap justify-center mt-auto pt-4">
          <a href="/contact" class="py-2 px-5 text-white italic bg-red-700 hover:bg-red-900">Contact me!</a>
        </div>
      </li>
    </ul>
  </div>
</MainWrapper>
