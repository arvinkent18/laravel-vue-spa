<template>
  <v-app light>
    <v-container fluid>
      <v-toolbar flat class="menu-shadow" color="white" height="64">
        <v-row>
          <v-col cols="12">
            <v-toolbar-title class="text-uppercase">AKL App</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn small @click="logout" v-if="loggedIn">Logout</v-btn>
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
      <v-snackbar
        :key="index"
        v-for="(snackbar, index) in allNotifications"
        v-model="snackbar.show"
        right="right"
        :timeout="6000"
        top="top"
        vertical="vertical"
      >
        {{ snackbar.text }}
        <v-btn dark text @click="removeNotification(index)">Close</v-btn>
      </v-snackbar>

      <v-footer app>
        <!-- -->
      </v-footer>
    </v-container>
  </v-app>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  data: () => ({}),
  methods: {
    ...mapActions({
      checkUserState: "setLoggedInState",
      logoutUser: "logoutUser",
      removeNotification: "removeNotification"
    }),
    logout() {
      this.logoutUser().then(() => {
        this.$router.push({ name: "login" });
      });
    }
  },
  created() {
    this.checkUserState();
  },
  computed: {
    ...mapGetters({
      loggedIn: "loggedIn",
      allNotifications: "notifications"
    })
  }
};
</script>
<style scoped></style>
