import Vue from "vue";
import VueRouter from "vue-router";
import Middleware from "../middlewares";

Vue.use(VueRouter);

import AppLayout from "../views/layouts/AppLayout";
import AuthLayout from "../views/layouts/AuthLayout";

import Login from "../views/auth/Login";
import Register from "../views/auth/Register";
import ForgotPassword from "../views/auth/ForgotPassword";
import ResetPassword from "../views/auth/ResetPassword";
import Home from "../views/pages/Home";
import Dashboard from "../views/pages/Dashboard";
import Profile from "../views/pages/Profile";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        name: "auth",
        path: "/",
        component: AuthLayout,
        children: [
            {
                path: "login",
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
                path: "/forgot-password",
                name: "forgotPassword",
                component: ForgotPassword,
                meta: {
                    middleware: [Middleware.guest]
                }
            },
            {
                path: "/reset-password",
                name: "resetPassword",
                component: ResetPassword,
                meta: {
                    middleware: [Middleware.guest]
                }
            }
        ]
    },
    {
        name: "app",
        path: "/",
        component: AppLayout,
        children: [
            {
                path: "/dashboard",
                name: "dashboard",
                component: Dashboard,
                meta: {
                    middleware: [Middleware.auth, Middleware.checkPermissions],
                    permissions: ["view-pages"]
                }
            },
            {
                path: "/profile",
                name: "profile",
                component: Profile,
                meta: {
                    middleware: [Middleware.auth]
                }
            }
        ]
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
