<template>
    <v-app light>
        <v-container fluid>
            <v-toolbar flat class="menu-shadow" color="white" height="64">
                <v-row>
                    <v-col cols="12">
                        <v-toolbar-title class="text-uppercase"
                            >AKL App</v-toolbar-title
                        >
                        <v-spacer></v-spacer>
                        <v-toolbar-items>
                            <v-btn small @click="logout" v-if="loggedIn">
                                Logout
                            </v-btn>
                        </v-toolbar-items>
                    </v-col>
                </v-row>
            </v-toolbar>

            <!-- Sizes your content based upon application components -->
            <v-content>
                <!-- Provides the application the proper gutter -->
                <v-container fluid>
                    <!-- If using vue-router -->
                    <router-view></router-view>
                </v-container>
            </v-content>

            <v-footer app>
                <!-- -->
            </v-footer>
        </v-container>
    </v-app>
</template>
<script>
export default {
    name: "App",
    data: () => ({}),
    methods: {
        logout() {
            localStorage.removeItem("token");
            this.loggedIn = false;
            this.$router.push({
                name: "login"
            });
        }
    },
    created() {
        if (localStorage.getItem("token")) {
            this.loggedIn = true;
        }
    },
    computed: {
        loggedIn() {
            return this.$store.getters["loggedIn"];
        }
    }
};
</script>
<style scoped></style>
