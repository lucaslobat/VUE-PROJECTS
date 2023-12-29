<template>
    <!-- Navbar -->
  <Navbar />

  <!-- Main container -->
  <main class="main-layout">
    <RouterView></RouterView>
  </main>

  <!-- Footer -->
  <Footer />
</template>
<script>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

export default {
  components: { Navbar, Footer },
};
</script>
<style scoped>
.main-layout{
  display:flex;
  flex-direction: column;
  width:80vw;
  margin:0 auto;
  padding:1rem;
}
</style>
