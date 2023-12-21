<template>
  <Navbar></Navbar>
  <RouterView></RouterView>
  <Footer></Footer>
</template>

<script>
import Navbar from "./components/Layout/Navbar.vue";
import Footer from "./components/Layout/Footer.vue";
export default {
  components: { Navbar, Footer },
};
</script>

<style scoped></style>
