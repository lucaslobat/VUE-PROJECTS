<template>
  <div class="d-flex flex-column ga-3">
    <DocumentItem
      v-for="document in responseData"
      :key = document.result_id
      :title="document.title"
      :subtitle="document.publication_info.summary"
      :text="document.snippet"
      :link="document.link"
    >{{ document.title }}</DocumentItem>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import DocumentItem from "../components/DocumentItem.vue";

const responseData = ref(null);

onMounted(async () => {
  /* Retrieve the information from localStorage */
  const localStorageData = localStorage.getItem("scholarDocuments");

  if (localStorageData) {
    /* If the data exists sets the local state 'reponseData' with it's value  */
    const {data} = JSON.parse(localStorageData)
    console.log(data);
    responseData.value = data;
  } else {
    /* If the data is non-existent launch a request to the server and set its response to the local state 
    and save it to the localStorage*/
    const serverResponse = await axios.get("http://localhost:3000/api");
    responseData.value = serverResponse.data;
    localStorage.setItem(JSON.stringify(responseData.value));
  }
});
</script>

<style scoped></style>
