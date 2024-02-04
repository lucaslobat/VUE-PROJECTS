<template>
  <v-row class="d-flex justify-center">
    <v-col cols="12" xs="12" sm="12" md="8" lg="8">
      <!-- Search bar -->
      <v-card variant="flat" class="input-container py-12 px-6">
        <CustomInput
          @initiateSearch="initiateSearchHandler"
          placeholder="Article, book or webpage"
          prependIcon="mdi-file-document-outline"
          appendIcon="mdi-magnify"
        >
        </CustomInput>
      </v-card>
    </v-col>
  </v-row>

  <v-row class="second-row d-flex justify-center">
    <v-col class="sidebar" cols="12" xs="12" sm="12" md="8" lg="2">
      <LanguageRadioButtons @emitRadioButtonValue="radioButtonValueHandler" />
    </v-col>

    <v-col class="main-content" cols="12" xs="12" sm="12" md="8" lg="6">
      <DocumentList />
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from "vue";
import LanguageRadioButtons from "../components/LanguageRadioButtons.vue";
import DocumentList from "../components/DocumentList.vue";

const searchOptions = ref({inputValue: "", language: "",});

const initiateSearchHandler = (inputValue) => {
  searchOptions.value.inputValue = inputValue;
  console.log(searchOptions.value);
};

const radioButtonValueHandler = (radioButtonValue) => {
  searchOptions.value.language = radioButtonValue;
}
</script>

<style scoped>
.fake-input {
  background-color: white;
  border-radius: 0.2em;
}
.input-container {
  background-image: url("../assets/search-card-image.png");
  background-size: auto;
  background-repeat: no-repeat;
}
</style>
