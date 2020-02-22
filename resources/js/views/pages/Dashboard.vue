<template>
  <div>Dashboard</div>
</template>
<script>
export default {
  name: "Dashboard",
  mounted() {
    this.$store.dispatch("setUserDetails");
  }
};
</script>
