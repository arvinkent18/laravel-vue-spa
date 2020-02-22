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
  </v-container>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AppLayout",
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
