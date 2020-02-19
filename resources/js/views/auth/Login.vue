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
                    <v-btn color="primary" @click="loginUser">Login</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "Login",
    props: {
        source: String
    },
    data: () => ({
        isFormValid: false,
        user: {
            email: "",
            password: ""
        }
    }),
    methods: {
        loginUser() {
            if (this.$refs.loginForm.validate()) {
                this.$store.dispatch("loginUser", this.user).then(response => {
                    this.$router.push({ name: "dashboard" });
                    console.log(response);
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
