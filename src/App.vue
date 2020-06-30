<template>
  <div id="app">
    <SiteMobileMenu />
    <Navbar />
    <main class="main-content">
      <div class="container-fluid photos">
        <router-view />
        <Footer />
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from "./components/layouts/Navbar";
import SiteMobileMenu from "@/components/layouts/SiteMobileMenu";
import Footer from "./components/layouts/Footer";

export default {
  name: "app",
  components: {
    Navbar,
    SiteMobileMenu,
    Footer
  }
};
</script>

<style>
</style>
