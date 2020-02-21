import Vue from "vue";
import Vuex from "vuex";

import application from "./application";
import user from "./user";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        application,
        user
    }
});

export default store;
