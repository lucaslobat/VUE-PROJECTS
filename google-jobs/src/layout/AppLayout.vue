<template>
  <v-container class="app-container">
    <!-- First row -->
    <v-row>
      <!-- Header -->
      <v-col class="header" cols="12">
        <span class="text-h4 title">
          <span class="font-weight-black">Google</span> Jobs
        </span>
      </v-col>

      <!-- Search bar -->
      <v-col cols="12">
        <v-card class="input-container py-12 px-6">
          <div class="d-flex fake-input align-center justify-center">
            <v-icon icon="mdi-briefcase-outline" size="small" color="#B9BDCF">
            </v-icon>
            <v-text-field
              placeholder="Title, companies, expertise..."
              variant="solo"
              density="compact"
              hide-details
              bg-color="white"
              flat
              clearable
            ></v-text-field>
            <v-btn icon="mdi-magnify" size="small"> </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Second row -->
    <!-- Side panel and Main content -->
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="3" lg="3">Sidebar</v-col>
      <v-col cols="12" xs="12" sm="12" md="6" lg="6">Main content</v-col>
    </v-row>
  </v-container>
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
.app-container {
  outline: 2px solid red;
  min-height: 100vh;
}
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
