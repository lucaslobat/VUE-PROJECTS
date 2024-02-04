<template>
  <v-container class="app-container">
    <slot name="header"></slot>

    <!-- Body -->
    <slot name="bodyView"> </slot>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const restData = ref(null);

onMounted(async () => {
  /* Store the information from localStorage */
  const locallyStoredData = localStorage.getItem("scholarDocuments");

  /* If the data exists sets the local state 'restData' with it's value  */
  if (locallyStoredData) {
    restData.value = JSON.parse(locallyStoredData);
    console.log("The storage contains the data:", restData.value.data[0]);
    /* If the data is non-existent launch a request to the server and set its response to the local state */
  } else {
    const response = await axios.get("http://localhost:3000/api");
    restData.value = response.data;
    localStorage.setItem("scholarDocuments", JSON.stringify(restData.value));
    console.log(restData.value);
  }
});
</script>

<style scoped>
.sidebar {
  /*  outline: 2px solid blue; */
}

.main-content {
  /* outline: 2px solid greenyellow; */
}
.app-container {
  min-height: 100vh;
}
</style>
