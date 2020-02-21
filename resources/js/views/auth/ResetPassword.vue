<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Forgot Password form</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form ref="resetPasswordForm" :value="isFormValid">
            <v-text-field
              label="Email Address"
              name="email"
              prepend-icon="email"
              type="email"
              v-model="user.email"
            />
            <v-text-field
              label="Password"
              name="password"
              prepend-icon="lock"
              type="password"
              v-model="user.password"
            />
            <v-text-field
              label="Password Confirmation"
              name="password"
              prepend-icon="lock"
              type="password"
              v-model="user.password_confirmation"
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" @click="sendResetPassword">Send Email</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ResetPassword",
  props: {
    source: String
  },
  data: () => ({
    isFormValid: false,
    user: {
      email: "",
      password: "",
      password_confirmation: ""
    }
  }),
  methods: {
    ...mapActions({
      addNotification: "addNotification",
      resetPassword: "resetPassword"
    }),
    sendResetPassword() {
      if (this.$refs.resetPasswordForm.validate()) {
        const token = this.$route.query.token;
        this.resetPassword({ ...this.user, token })
          .then(response => {
            this.addNotification({
              show: true,
              text: "Reset password successfully"
            }).then(() => {
              this.$router.push({
                name: "login"
              });
            });
          })
          .catch(() => {
            this.addNotification({
              show: true,
              text: "Failed to Reset password"
            });
          });
      }
    }
  }
};
</script>
<style scoped></style>
