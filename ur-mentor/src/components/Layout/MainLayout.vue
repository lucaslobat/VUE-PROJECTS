<template>
  <div class="root-container flex">
    <!-- Navbar -->
    <Navbar />

    <!-- Main container -->
    <main class="main-layout flex">
      <RouterView></RouterView>
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>
<script>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

export default {
  components: { Navbar, Footer },
};
</script>
<style scoped>
.root-container {
  flex-direction: column;
  align-items: center;
  height: 100vh;
}
.main-layout {
  flex-direction: column;
  flex:1;
  width:80vw;
}
</style>
