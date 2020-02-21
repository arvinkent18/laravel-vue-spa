<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Forgot Password form</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form ref="forgotPasswordForm" :value="isFormValid">
            <v-text-field
              label="Email Address"
              name="email"
              prepend-icon="email"
              type="email"
              v-model="email"
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" @click="sendForgotPassword">Send Email</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-snackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      :multi-line="snackbar.mode"
      :right="snackbar.x"
      :timeout="snackbar.timeout"
      :top="snackbar.y"
      vertical="vertical"
    >
      {{ snackbar.text }}
      <v-btn dark text @click="snackbar.show = false">Close</v-btn>
    </v-snackbar>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ForgotPassword",
  props: {
    source: String
  },
  data: () => ({
    isFormValid: false,
    email: "",
    snackbar: {
      show: false,
      text: "",
      color: "",
      mode: "",
      timeout: 6000,
      x: "right",
      y: "top"
    }
  }),
  methods: {
    ...mapActions({
      addNotification: "addNotification",
      forgotPassword: "forgotPassword"
    }),
    sendForgotPassword() {
      if (this.$refs.forgotPasswordForm.validate()) {
        this.forgotPassword({ email: this.email })
          .then(response => {
            this.addNotification({
              show: true,
              text: "Sent to mail successfully"
            });
          })
          .catch(() => {
            this.addNotification({
              show: true,
              text: "Failed to send mail"
            });
          });
      }
    }
  },
  created() {
    console.log(this.$store.state);
  }
};
</script>
<style scoped></style>
