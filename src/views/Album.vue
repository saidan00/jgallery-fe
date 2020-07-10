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
          class="col-6 col-md-6"
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
  methods: {
    ...mapActions(["fetchAlbum"])
  },
  computed: {
    ...mapGetters({
      album: "getAlbum",
      isLoading: "getIsLoadding"
    })
  },
  created() {
    this.fetchAlbum(this.id);
  },
  updated() {
    let colArr = [];
    let max = 2;
    let min = 1;
    let choose = Math.floor(Math.random() * (max - min + 1)) + min;

    if (choose === 1) {
      colArr = [3, 6, 3, 8, 4, 6, 6, 4, 4, 4, 3, 6, 3, 8, 4, 6, 6, 4, 8];
    } else {
      colArr = [8, 4, 3, 6, 3, 6, 6, 4, 4, 4, 3, 6, 3, 8, 4, 6, 6, 4, 8];
    }

    let count = 0;
    let pictureElements = document.getElementsByClassName("col-6 col-md-6");

    pictureElements.forEach(picture => {
      let col = colArr[count];
      count++;

      if (picture.classList.contains("col-lg-3")) {
        picture.classList.remove("col-lg-3");
      }
      if (picture.classList.contains("col-lg-4")) {
        picture.classList.remove("col-lg-4");
      }
      if (picture.classList.contains("col-lg-6")) {
        picture.classList.remove("col-lg-6");
      }
      if (picture.classList.contains("col-lg-8")) {
        picture.classList.remove("col-lg-8");
      }

      picture.classList.add("col-lg-" + col);

      if (count === colArr.length) {
        count = 0;
      }
    });
  }
};
</script>

<style>
</style>