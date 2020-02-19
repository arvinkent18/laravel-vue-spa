import axios from "axios";

const state = {
    isLoggedIn: false,
    user: {}
};

const getters = {
    loggedIn(state) {
        return state.isLoggedIn;
    }
};

const mutations = {
    setLoggedIn(state, payload) {
        state.isLoggedIn = payload;
    }
};

const actions = {
    loginUser(ctx, payload) {
        return new Promise((resolve, reject) => {
            axios
                .post("http://localhost:8000/api/login", payload)
                .then(response => {
                    localStorage.setItem("token", response.data);
                    ctx.commit("setLoggedIn", true);
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
};

export default {
    namespace: true,
    state,
    getters,
    mutations,
    actions
};
