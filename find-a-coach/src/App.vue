<template>
  <Navbar />
  <RouterView></RouterView>
</template>

<script>
import Navbar from "./components/Layout/Navbar.vue";
import CoachList from "./components/Coaches/CoachList.vue";
export default {
  components: { Navbar, CoachList },
}
</script>
<style scoped></style>
