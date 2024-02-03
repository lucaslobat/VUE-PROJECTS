<template>
    <v-app class="app-layout">
      <!-- Header -->
      <v-app-bar title="Google Jobs"></v-app-bar>

      <!-- Left drawer -->
      <v-navigation-drawer>
        <v-list>
          <v-list-item title="Navigation drawer" />
        </v-list>
      </v-navigation-drawer>

      <!--Main content -->
      <v-main class="d-flex align center justify-center"> Main content </v-main>
    </v-app>
</template>

<script>
import searchCardImage from "../assets/search-card-image.png";
export default {
  data() {
    return {
      searchCardImage,
    };
  },
};
</script>

<style scoped>
.title {
  color: var(--title-color);
}

.fake-input {
  background-color: white;
  padding: 1em;
  border-radius: 0.5em;
}
.input-container {
  background-image: url("../assets/search-card-image.png");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
