import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8000/api/"
});

instance.interceptors.request.use(
    function(config) {
        const token = localStorage.getItem("token");

        if (token) {
            const bearer = "Bearer " + token;
            config.headers.common["Authorization"] = bearer;
        }

        console.log(config);

        return config;
    },
    function(err) {
        return Promise.reject(err);
    }
);

export default instance;
