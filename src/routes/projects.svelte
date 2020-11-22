<script>
  import MainWrapper from "../components/MainWrapper.svelte";

  const projects = [
    {
      title: "Project Cards",
      description: "A party game for horrible people. Online!",
      image: {
        src: "/projects/logo-project-cards.svg",
        alt: "Project Cards logo",
        fill: true,
      },
      urls: [
        { text: "Website", href: "https://project-cards-v3.herokuapp.com" },
        { text: "Source", href: "https://github.com/jappe999/project-cards" },
      ],
    },
    {
      title: "Terrain Generator",
      description:
        "A simple tool to generate images of pixelated terrains. Quick build for a school project.",
      image: {
        src: "/projects/generated-terrain.png",
        alt: "Generated terrain",
      },
      urls: [
        { text: "Demo", href: "https://terrain-generator.vercel.app" },
        {
          text: "Source",
          href: "https://github.com/jappe999/terrain-generator",
        },
      ],
    },
    {
      title: "Design tree",
      description:
        "A tool to help the Delft boat race team designing their boat!",
      image: {
        src: "/projects/designtree.png",
        alt: "",
      },
      urls: [
        { text: "Demo", href: "https://designtree.herokuapp.com" },
        { text: "Source", href: "https://github.com/jappe999/designtree" },
      ],
    },
    {
      title: "Daily Perform",
      description:
        "A suite of tools that can help runners progress in their training.",
      image: {
        src: "/projects/dailyperform.png",
        alt: "A screenshot of DailyPerform",
      },
      urls: [{ text: "Website", href: "https://dailyperform.com" }],
    },
    {
      title: "CodePens!",
      description:
        "In the past I've created a lot of CSS fiddles and illustrations. I've showcased them all on my CodePen account.",
      image: {
        src: "/projects/codepen.png",
        alt: "A screenshot of a codpen of mine",
      },
      urls: [{ text: "Showcase", href: "https://codepen.io/jappe/" }],
    },
  ];
</script>

<style>
  .project {
    @apply w-64 flex flex-col flex-grow mx-3 mb-6 p-2 bg-green-700 transition-shadow duration-100;
    box-shadow: 0.25rem 0.25rem 0 theme("colors.gray.500");
  }

  .project:hover {
    box-shadow: 0 0 0 theme("colors.gray.500");
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

<svelte:head>
  <style>
    body::before {
      @apply opacity-100;
    }

    .navigation {
      color: white !important;
      text-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
    }
  </style>
</svelte:head>

<MainWrapper>
  <div class="relative w-full max-w-5xl mx-auto">
    <h1 class="font-mono text-5xl">Projects</h1>

    <ul class="flex flex-wrap items-stretch justify-between -mx-3">
      {#each projects as project}
        <li class="project">
          <div
            class="bg-white project__media-wrapper"
            class:project__media-wrapper--fit={project.image.fill}>
            <img src={project.image.src} alt={project.image.alt} />
          </div>
          <div class="project__content">
            <b class="project__title">{project.title}</b>
            <p>{project.description}</p>

            <div class="flex flex-wrap justify-end pt-4 mt-auto space-x-2">
              {#each project.urls as url}
                <a
                  href={url.href}
                  rel="noreferrer"
                  target="_blank"
                  class="project__button">
                  {url.text}
                </a>
              {/each}
            </div>
          </div>
        </li>
      {/each}

      <li class="project">
        <div class="project__media-wrapper">
          <img src="successkid.jpg" alt="Success kid" />
        </div>
        <div class="project__content">
          <b class="project__title">Your Project!</b>
          <p>Want your awesome project added to this list?</p>
        </div>

        <div class="flex flex-wrap justify-center pt-4 mt-auto">
          <a
            href="/contact"
            class="px-5 py-2 italic text-white bg-red-700 hover:bg-red-900">
            Contact me!
          </a>
        </div>
      </li>
    </ul>
  </div>
</MainWrapper>
