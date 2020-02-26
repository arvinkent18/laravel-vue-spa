import Vue from "vue";
import Vuetify from "vuetify";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

const vuetify = new Vuetify({
    icons: {
        iconfont: "mdi" // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
    theme: {
        themes: {
            light: {
                primary: "#00897B",
                secondary: "#26A69A",
                accent: "#8c9eff",
                error: "#b71c1c",
                info: "#2196F3",
                success: "#4CAF50",
                warning: "#FFC107"
            }
        }
    }
});

export default vuetify;
