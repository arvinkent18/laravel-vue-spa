import store from "../store";

export default permissions => {
    const userPermissions = store.getters["userDetails"].permissions;

    let permitted = false;

    if (!userPermissions || !permissions) {
        return permitted;
    }

    if (!Array.isArray(permissions)) {
        permitted = userPermissions.includes(permissions);
    } else {
        permissions.forEach(permission => {
            permitted = userPermissions.includes(permission);
        });
    }

    return permitted;
};
