import Vue from 'vue';
import Vuex from 'vuex';

import auth from './auth';
import sepulkas from './sepulkas';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    sepulkas,
  },
});
