<script>
  import Menu from "../components/Menu.svelte";
  import Nav from "../components/Nav.svelte";

  export let segment;
  let menuOpen = false;
  let menuItems = [];

  const toggleMenu = (event) => {
    if (event.detail !== undefined) menuOpen = event.detail;
    else menuOpen = !menuOpen;
  };

  $: menuItems = [
    {
      name: "Home",
      description: "Full-Stack Web Developer",
      href: "/",
      attributes: {
        "aria-current": segment === undefined ? "page" : undefined,
      },
    },
    {
      name: "Projects",
      description: "Projects",
      href: "/projects",
      attributes: {
        "aria-current": segment === "projects" ? "page" : undefined,
      },
    },
    {
      name: "About",
      description: "About",
      href: "/about",
      attributes: {
        "aria-current": segment === "about" ? "page" : undefined,
      },
    },
    {
      name: "Contact",
      description: "Contact",
      href: "/contact",
      attributes: {
        "aria-current": segment === "about" ? "page" : undefined,
      },
    },
    {
      name: "Blog",
      description: "Blog",
      href: "/blog",
      attributes: {
        rel: "prefetch",
        "aria-current": segment === "blog" ? "page" : undefined,
      },
    },
  ];
</script>

<style global>
  @import "../assets/css/main.css";

  body::before {
    content: "";
    @apply absolute inset-0 h-full w-full bg-no-repeat transition-all duration-200 bg-fixed bg-gradient-to-br from-yellow-100 to-green-100 opacity-0;

    @screen sm {
      background-position: theme("width.20") 0;
    }
  }
</style>

<div class="flex flex-col flex-no-wrap overflow-hidden sm:flex-row">
  <Menu {segment} {menuOpen} {menuItems} on:toggle={toggleMenu} />

  <div
    class="flex flex-col w-full h-screen overflow-x-hidden overflow-y-scroll">
    <Nav {segment} {menuItems} />

    <div class="relative flex flex-grow">
      <slot />
    </div>
  </div>
</div>
