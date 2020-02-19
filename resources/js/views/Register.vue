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
                        />

                        <v-text-field
                            label="Email Address"
                            name="email"
                            prepend-icon="email"
                            type="email"
                            v-model="user.email"
                        />

                        <v-text-field
                            id="password"
                            label="Password"
                            name="password"
                            prepend-icon="lock"
                            type="password"
                            v-model="user.password"
                        />
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn color="primary" @click="registerUser"
                        >Register</v-btn
                    >
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
            <v-btn dark text @click="snackbar.show = false">
                Close
            </v-btn>
        </v-snackbar>
    </v-row>
</template>
<script>
import axios from "axios";

export default {
    name: "Register",
    data: () => ({
        isFormValid: false,
        user: {
            name: "",
            email: "",
            password: ""
        },
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
        registerUser(event) {
            if (this.$refs.registerForm.validate()) {
                axios
                    .post("http://localhost:8000/api/register", this.user)
                    .then(response => {
                        if (response.data.success) {
                            this.snackbar = {
                                show: true,
                                text: "Registered successfully"
                            };

                            this.$router.push({
                                name: "login"
                            });
                        }
                    })
                    .catch(() => {
                        this.snackbar = {
                            show: true,
                            text: "Failed to register"
                        };
                    });
                console.log(this.user);
                console.log(event, this.$refs.registerForm);
            }
        }
    }
};
</script>
<style scoped></style>
