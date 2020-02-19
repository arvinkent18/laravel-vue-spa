import Vue from "vue";
import VueRouter from "vue-router";
import Middleware from "../middlewares";

Vue.use(VueRouter);

import Login from "../views/auth/Login";
import Register from "../views/auth/Register";
import Dashboard from "../views/pages/Dashboard";

const routes = [
    {
        path: "/",
        name: "home"
    },
    {
        path: "/login",
        name: "login",
        component: Login,
        meta: {
            middleware: [Middleware.guest]
        }
    },
    {
        path: "/register",
        name: "register",
        component: Register
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
        meta: {
            middleware: [Middleware.auth]
        }
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

function nextCheck(context, middleware, index) {
    const nextMiddleware = middleware[index];

    if (!nextMiddleware) return context.next;

    return (...parameters) => {
        context.next(...parameters);

        const nextMiddle = nextCheck(context, middleware, index + 1);

        nextMiddleware({ ...context, next: nextMiddle });
    };
}

router.beforeEach((to, from, next) => {
    if (to.meta.middleware) {
        const middleware = Array.isArray(to.meta.middleware)
            ? to.meta.middleware
            : [to.meta.middleware];

        const context = {
            from,
            next,
            router,
            to
        };

        const nextMiddleware = nextCheck(context, middleware, 1);

        return middleware[0]({ ...context, next: nextMiddleware });
    }

    return next();
});

export default router;
