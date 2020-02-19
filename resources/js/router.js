import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Login from "./views/Login";
import Register from "./views/Register";

const routes = [
    {
        path: "/",
        name: "home"
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/register",
        name: "register",
        component: Register
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
