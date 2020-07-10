import axios from 'axios';
import { API_URL } from '../../assets/config';
import router from '../../router';

const state = {
  albums: [],
  album: {}
};

const getters = {
  getAllAlbums: state => state.albums,
  getAlbum: state => state.album
};

const actions = {
  async fetchAlbums({ commit }) {
    const response = await axios.get(API_URL + '/albums.json');
    commit('setAlbums', response.data.data);
  },
  async fetchAlbum({ commit }, id) {
    const response = await axios.get(API_URL + '/albums.json');
    let album = response.data.data.find(anAlbum => anAlbum.id == id) || [];
    console.log(album);
    if (album.length == 0) {
      router.push({ path: '/404' });
    }

    commit('setAlbum', album);
  }
};

const mutations = {
  setAlbums: (state, albums) => (state.albums = albums),
  setAlbum: (state, album) => (state.album = album)
};

export default {
  state,
  getters,
  actions,
  mutations
};

