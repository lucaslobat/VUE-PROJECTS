<template>
  <Navbar />
  <RouterView></RouterView>
</template>

<script>
import Navbar from "./components/Layout/Navbar.vue";
export default {
  components: { Navbar},
}
</script>
<style scoped></style>
