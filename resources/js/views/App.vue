<template>
  <v-app light>
    <router-view></router-view>
    <v-snackbar
      :key="index"
      v-for="(snackbar, index) in allNotifications"
      v-model="snackbar.show"
      right="right"
      :timeout="6000"
      top="top"
      vertical="vertical"
      :color="snackbar.color"
    >
      {{ snackbar.text }}
      <v-btn dark text @click="removeNotification(index)">Close</v-btn>
    </v-snackbar>
  </v-app>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  methods: {
    ...mapActions({
      checkUserState: "setLoggedInState",
      removeNotification: "removeNotification",
      setUserDetails: "setUserDetails"
    })
  },
  created() {
    this.checkUserState().then(() => {
      if (this.loggedIn) {
        this.setUserDetails().then(() => {
          console.log("Permitted: ", this.$can("view-pages"));
        });
      }
    });
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
