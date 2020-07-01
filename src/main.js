import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import "./assets/js/jquery-3.3.1.min.js";
// import "./assets/js/jquery-migrate-3.0.1.min.js";
// import "./assets/js/jquery-ui.js";
// import "./assets/js/popper.min.js";
// import "./assets/js/bootstrap.min.js";
// import "./assets/js/owl.carousel.min.js";
// import "./assets/js/jquery.stellar.min.js";
// import "./assets/js/jquery.countdown.min.js";
// import "./assets/js/jquery.magnific-popup.min.js";
// import "./assets/js/bootstrap-datepicker.min.js";
// import "./assets/js/aos.js";

// import "./assets/js/jquery.fancybox.min.js";

// import "./assets/js/main.js";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
