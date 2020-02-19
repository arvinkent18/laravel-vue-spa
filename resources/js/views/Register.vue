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
    </v-row>
</template>
<script>
export default {
    name: "Register",
    data: () => ({
        isFormValid: false,
        user: {
            name: "",
            email: "",
            password: ""
        }
    }),
    methods: {
        registerUser(event) {
            if (this.$refs.registerForm.validate()) {
                console.log(event, this.$refs.registerForm);
            }
        }
    }
};
</script>
<style scoped></style>
