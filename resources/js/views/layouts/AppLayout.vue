<template>
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

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        Application
        <v-spacer>Logout</v-spacer>
      </v-toolbar-title>
    </v-app-bar>

    <material-chart-card color="info" type="Line">
      <h4 class="title font-weight-light">Daily Sales</h4>
      <p class="category d-inline-flex font-weight-light">
        <v-icon color="green" small>mdi-arrow-up</v-icon>
        <span class="green--text">55%</span>&nbsp;
        increase in today's sales
      </p>
    </material-chart-card>

    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <v-tooltip left>
              <template v-slot:activator="{ on }">
                <v-btn :href="source" icon large target="_blank" v-on="on">
                  <v-icon large>mdi-code-tags</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>

            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  large
                  href="https://codepen.io/johnjleider/pen/zgxeLQ"
                  target="_blank"
                  v-on="on"
                >
                  <v-icon large>mdi-codepen</v-icon>
                </v-btn>
              </template>
              <span>Codepen</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
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
