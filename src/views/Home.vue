<template>
  <div class="row align-items-stretch">
    <Loader v-if="isLoading" />
    <div
      class="col-6 col-md-6 col-lg-4"
      data-aos="fade-up"
      v-for="album in albums"
      :key="album.id"
      v-else
    >
      <router-link :to="{path: '/album/' + album.id}" class="d-block photo-item">
        <img :src="album.coverImgLink" alt="Image" class="img-fluid" />
        <div class="photo-text-more">
          <div class="photo-text-more">
            <h3 class="heading">{{ album.title }}</h3>
            <span class="meta">{{ album.pictures_count }} pictures</span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Loader from "@/components/common/Loader";

export default {
  name: "Home",
  components: {
    Loader
  },
  methods: mapActions(["fetchAlbums"]),
  computed: mapGetters({
    albums: "getAllAlbums",
    isLoading: "getIsLoadding"
  }),
  created() {
    this.fetchAlbums();
  }
};
</script>
