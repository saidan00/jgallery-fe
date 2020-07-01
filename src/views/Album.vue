<template>
  <div class="row">
    <Loader v-if="isLoading" />
    <template v-else>
      <div class="row pt-4 mb-5 text-center mx-auto">
        <div class="col-12">
          <h2 class="text-white">'{{ album.title }}'</h2>
          <h2 class="text-white mb-4" v-if="album.pictures">{{ album.pictures.length }} Pictures</h2>
        </div>
      </div>

      <div class="row align-items-stretch mx-auto">
        <div
          class="col-6 col-md-6 col-lg-4"
          data-aos="fade-up"
          v-for="picture in album.pictures"
          :key="picture.id"
        >
          <a :href="picture.imgLink" class="d-block photo-item" data-fancybox="gallery">
            <img :src="picture.imgLink" alt="Image" class="img-fluid" />
            <div class="photo-text-more">
              <span class="icon icon-search"></span>
            </div>
          </a>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Loader from "@/components/common/Loader";
export default {
  name: "Album",
  props: ["id"],
  components: {
    Loader
  },
  methods: mapActions(["fetchAlbum"]),
  computed: mapGetters({
    album: "getAlbum",
    isLoading: "getIsLoadding"
  }),
  created() {
    console.log("album created" + this.id);
    this.fetchAlbum(this.id);
  }
};
</script>

<style>
</style>