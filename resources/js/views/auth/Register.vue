<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Register form</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form ref="registerForm" :value="isFormValid">
            <v-text-field
              label="Name"
              name="name"
              prepend-icon="person"
              type="text"
              v-model="user.name"
              :rules="[...requiredRules, ...nameRules]"
            />

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
              :rules="[...requiredRules, ...passwordRules]"
            />

            <v-text-field
              id="password"
              label="Password Confirmation"
              name="password_confirmation"
              prepend-icon="lock"
              type="password"
              v-model="user.passwordConfirmation"
              :rules="[...requiredRules, ...passwordRules, passwordValidator]"
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" @click="registerUser">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  name: "Register",
  data: () => ({
    isFormValid: false,
    user: {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: ""
    },
    requiredRules: [v => !!v || "Name is required"],
    nameRules: [
      v => (v && v.length >= 5) || "Name must be at least 5 characters"
    ],
    emailRules: [v => /.+@.+\..+/.test(v) || "E-mail must be valid"],
    passwordRules: [
      v => (v && v.length >= 5) || "Password must be at least 5 characters"
    ]
  }),
  methods: {
    ...mapActions({
      addNotification: "addNotification",
      register: "register"
    }),
    registerUser(event) {
      if (this.$refs.registerForm.validate()) {
        this.register(this.user)
          .then(response => {
            this.addNotification({
              show: true,
              text: "Registered successfully",
              color: "success"
            }).then(() => {
              this.$router.push({
                name: "login"
              });
            });
          })
          .catch(() => {
            this.addNotification({
              show: true,
              text: "Failed to register",
              color: "error"
            });
          });
      }
    },
    passwordValidator(v) {
      return (
        this.user.passwordConfirmation === this.user.password ||
        "Password didn`t match"
      );
    }
  }
};
</script>
<style scoped></style>
