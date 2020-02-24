<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Login form</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form ref="loginForm" :value="isFormValid">
            <v-text-field
              label="Email Address"
              name="email"
              prepend-icon="email"
              type="email"
              v-model="user.email"
              :rules="[...requiredRules, ...emailRules]"
            />

            <v-text-field
              id="password"
              label="Password"
              name="password"
              prepend-icon="lock"
              type="password"
              v-model="user.password"
              :rules="requiredRules"
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" @click="loginUser">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  data: () => ({
    isFormValid: false,
    user: {
      email: "",
      password: ""
    },
    requiredRules: [v => !!v || "Name is required"],
    emailRules: [v => /.+@.+\..+/.test(v) || "E-mail must be valid"]
  }),
  methods: {
    ...mapActions({
      addNotification: "addNotification",
      login: "loginUser",
      setUserDetails: "setUserDetails"
    }),
    loginUser() {
      if (this.$refs.loginForm.validate()) {
        this.login(this.user).then(response => {
          this.addNotification({
            show: true,
            text: "Logged in successfully!"
          }).then(() => {
            this.$router.push({ name: "dashboard" });
          });
        });
      }
    }
  }
};
</script>
<style scoped></style>
