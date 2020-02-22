<template>
  <v-container>
    <v-row>
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Your Profile</v-toolbar-title>
        </v-toolbar>
        <v-card-text>{{userDetails.name}}</v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "Profile",
  data: () => ({}),
  computed: {
    ...mapGetters({
      userDetails: "userDetails"
    })
  }
};
</script>