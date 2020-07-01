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
import SiteMobileMenu from "./components/layouts/SiteMobileMenu";
import Footer from "./components/layouts/Footer";
import { mapActions } from "vuex";
import axios from "axios";

export default {
  name: "app",
  components: {
    Navbar,
    SiteMobileMenu,
    Footer
  },
  methods: mapActions(["startLoading", "doneLoading"]),
  created() {
    axios.interceptors.request.use(
      config => {
        this.startLoading();
        return config;
      },
      error => {
        this.doneLoading();
        return Promise.reject(error);
      }
    );

    axios.interceptors.response.use(
      response => {
        this.doneLoading();
        return response;
      },
      error => {
        this.doneLoading();
        return Promise.reject(error);
      }
    );
  }
};
</script>

<style>
/* @import "https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700,900";
@import "./assets/fonts/icomoon/style.css";

@import "./assets/css/bootstrap.min.css";
@import "./assets/css/magnific-popup.css";
@import "./assets/css/jquery-ui.css";
@import "./assets/css/owl.carousel.min.css";
@import "./assets/css/owl.theme.default.min.css";

@import "./assets/css/bootstrap-datepicker.css";

@import "./assets/fonts/flaticon/font/flaticon.css";

@import "./assets/css/aos.css";
@import "./assets/css/fancybox.min.css";

@import "./assets/css/style.css"; */
</style>
