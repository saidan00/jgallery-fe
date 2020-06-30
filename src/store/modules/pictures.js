import axios from 'axios';
import { API_URL } from '../../assets/config';

const state = {
  pictures: []
};

const getters = {
  allPictures: state => state.pictures
};

const actions = {
  async fetchPictures({ commit }) {
    // console.log(API_URL + '/pictures');
    const response = await axios.get(API_URL + '/pictures');

    commit('setPictures', response.data.data);
  },
  async filterTodos({ commit }, e) {
    // Get selected number
    const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText
    );

    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);

    commit('setPictures', response.data);
  }
};

const mutations = {
  setPictures: (state, pictures) => (state.pictures = pictures)
};

export default {
  state,
  getters,
  actions,
  mutations
};

