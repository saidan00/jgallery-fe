import axios from 'axios';
import { API_URL } from '../../assets/config';

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
    const response = await axios.get(API_URL + '/albums');

    commit('setAlbums', response.data.data);
  },
  async fetchAlbum({ commit }, id) {
    const response = await axios.get(API_URL + '/albums/' + id);
    console.log(id);
    console.log(response.data.data);
    commit('setAlbum', response.data.data);
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

