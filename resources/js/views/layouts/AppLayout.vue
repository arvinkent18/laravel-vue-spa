<template>
  <v-container fluid>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn small @click="logout" v-if="loggedIn">Logout</v-btn>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center"></v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer color="primary" app>
      <span class="white--text">&copy; 2020</span>
    </v-footer>
  </v-container>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AppLayout",
  data: () => ({
    drawer: null
  }),
  methods: {
    ...mapActions({
      addNotification: "addNotification",
      logoutUser: "logoutUser"
    }),
    logout() {
      this.logoutUser().then(() => {
        this.addNotification({
          show: true,
          text: "Logout successfully"
        }).then(() => {
          this.$router.push({ name: "login" });
        });
      });
    }
  },
  computed: {
    ...mapGetters({
      loggedIn: "loggedIn"
    })
  }
};
</script>
<style scoped></style>
