<template>
  <div class="row align-items-stretch">
    <div
      class="col-6 col-md-6 col-lg-4"
      data-aos="fade-up"
      v-for="picture in allPictures"
      :key="picture.id"
    >
      <a :href="picture.imgLink" class="d-block photo-item">
        <img :src="picture.imgLink" alt="Image" class="img-fluid" />
        <div class="photo-text-more">
          <div class="photo-text-more">
            <h3 class="heading">{{ picture.title }}</h3>
            <span class="meta">42 Photos</span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  methods: mapActions(["fetchPictures"]),
  computed: mapGetters(["allPictures"]),
  created() {
    this.fetchPictures();
  },
  mounted() {},
  destroyed() {}
};
</script>
