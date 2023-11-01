<template>
  <Navbar />
  <p>{{ getAllCoaches }}</p>
</template>

<script>
import Navbar from "./components/Layout/Navbar.vue"
export default {
  components: { Navbar },
  computed: {
    getAllCoaches() {
      return this.$store.getters.getAllCoaches;
    }
  }
}
</script>

<style scoped></style>
