<template>
  <v-container class="app-container">
    <slot name="header"></slot>
    
    <!-- Body -->
    <slot name="bodyView"> </slot>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      restData: null,
    };
  },
  async created() {
    const locallyStoredData = localStorage.getItem("scholarDocuments");
    if (locallyStoredData) {
      this.restData = JSON.parse(locallyStoredData);
      console.log(this.restData.data);
    } else {
      const response = await axios.get("http://localhost:3000/api");
      this.restData = response.data;
      localStorage.setItem("scholarDocuments", JSON.stringify(this.restData));
      console.log(this.restData);
    }
  },
};
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
