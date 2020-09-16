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
      description: "Web/Software Developer",
      href: "",
      attributes: {
        "aria-current": segment === undefined ? "page" : undefined,
      },
    },
    {
      name: "Projects",
      description: "Projects",
      href: "projects",
      attributes: {
        "aria-current": segment === "projects" ? "page" : undefined,
      },
    },
    {
      name: "About",
      description: "About",
      href: "about",
      attributes: {
        "aria-current": segment === "about" ? "page" : undefined,
      },
    },
    {
      name: "Contact",
      description: "Contact",
      href: "contact",
      attributes: {
        "aria-current": segment === "about" ? "page" : undefined,
      },
    },
    {
      name: "Blog",
      description: "Blog",
      href: "blog",
      attributes: {
        rel: "prefetch",
        "aria-current": segment === "blog" ? "page" : undefined,
      },
    },
  ];
</script>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

<div class="flex flex-no-wrap">
  <Menu {segment} {menuOpen} {menuItems} on:toggle={toggleMenu} />
  <div class="h-screen w-full flex flex-col overflow-y-scroll overflow-x-hidden">
    <Nav {segment} {menuItems} />

    <main class="w-full p-6 text-gray-500">
      <slot />
    </main>
  </div>
</div>
