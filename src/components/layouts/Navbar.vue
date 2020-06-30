<template>
  <header class="header-bar d-flex d-lg-block align-items-center">
    <div class="site-logo">
      <a href="/">Shutter</a>
    </div>

    <div
      class="d-inline-block d-lg-none ml-md-0 ml-auto py-3"
      style="position: relative; top: 3px;"
    >
      <a href="#" class="site-menu-toggle js-menu-toggle text-white">
        <span class="icon-menu h3"></span>
      </a>
    </div>

    <div class="main-menu">
      <ul class="js-clone-nav">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
a:hover,
.router-link-exact-active {
  color: #ef6c57;
}
</style>