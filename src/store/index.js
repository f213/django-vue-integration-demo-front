import Vue from 'vue';
import Vuex from 'vuex';

import VuexPersistence from 'vuex-persist';
import auth from './auth';
import sepulkas from './sepulkas';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  reducer: state => ({ auth: state.auth }),
});

export default new Vuex.Store({
  modules: {
    auth,
    sepulkas,
  },
  plugins: [vuexLocal.plugin],
});
