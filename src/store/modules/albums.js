import router from '../../router';
import firebase from '../../firebase';
import { ref, get, child, query, orderByChild, equalTo } from 'firebase/database';

const state = {
  albums: [],
  album: {}
};

const getters = {
  getAllAlbums: state => state.albums,
  getAlbum: state => state.album
};

const dbRef = ref(firebase);

const actions = {
  async fetchAlbums({ commit }) {
    await get(child(dbRef, `albums`)).then((snapshot) => {
      if (snapshot.exists()) {
        const response = snapshot.val();
        commit('setAlbums', response);
        // console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

    // const response = await axios.get(API_URL + '/albums.json');
  },
  async fetchAlbum({ commit }, id) {
    let albumSnap = await get(child(dbRef, `albums/${id}`));
    
    if (albumSnap.exists()) {
      let album = albumSnap.val();
      
      const queryConstraints = [orderByChild('album_id'), equalTo(id)];
      let picturesSnap = await get(query(child(dbRef, `pictures`), ...queryConstraints));
      let pictures = picturesSnap.val();

      var _ = require('lodash');
      album.pictures = _.orderBy(pictures, 'order_number');
  
      commit('setAlbum', album);
    } else {
      router.push({ path: '/404' });
    }

    // const response = await axios.get(API_URL + '/albums.json');
    // let album = response.data.find(anAlbum => anAlbum.id == id) || [];
    // if (album.length == 0) {
    //   router.push({ path: '/404' });
    // }

    // commit('setAlbum', album);
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

