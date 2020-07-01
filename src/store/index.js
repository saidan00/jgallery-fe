import Vue from 'vue';
import Vuex from 'vuex';
import albums from '@/store/modules/albums';
import loader from '@/store/modules/loader';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    albums,
    loader
  }
})
