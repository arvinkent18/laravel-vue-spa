import can from "../helpers/can";
import store from "../store";

export default function checkPermissions({ next, to, from, router }) {
    const requiredPermissions = to.meta.permissions;

    if (!from.name) {
        store.dispatch("setUserDetails").then(() => {
            const permitted = can(requiredPermissions);

            if (permitted) {
                return next();
            }

            console.log(requiredPermissions, permitted);

            return router.push({ name: "home" });
        });
    } else {
        const permitted = can(requiredPermissions);

        if (can(permitted)) {
            return next();
        }

        return router.push({ name: "home" });
    }
}
