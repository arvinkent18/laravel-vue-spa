import Vue from "vue";
import Vuex from "vuex";

import notification from "./notification/";
import user from "./user/";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        notification,
        user
    }
});

export default store;
