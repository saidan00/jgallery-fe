<template>
  <div class="row justify-content-center my-footer">
    <div class="col-md-12 text-center py-5">
      <p>
        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
        Copyright &copy; {{ currentYear }} All rights reserved | This template is made with
        <i
          class="icon-heart"
          aria-hidden="true"
        ></i> by
        <a href="https://colorlib.com" target="_blank">Colorlib</a>
        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
      </p>
    </div>
  </div>
</template>

<script>
let currentYear = new Date().getFullYear();

export default {
  name: "Footer",
  data() {
    return {
      currentYear
    };
  }
};
</script>

<style scoped>
.my-footer {
  margin-top: -140px;
}
</style>