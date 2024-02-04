<template>
  <v-row class="d-flex justify-center">
    <v-col cols="12" xs="12" sm="12" md="8" lg="8">
      <!-- Search bar -->
      <v-card variant="flat" class="input-container py-12 px-6">
        <CustomInput
          @initiateSearch="initiateSearchHandler"
          placeholder="Article, book or webpage"
        >
          <template v-slot:inputIcon>
            <v-icon
              icon="mdi-file-document-outline"
              size="small"
              color="#B9BDCF"
            />
          </template>
          <template v-slot:searchButton>
            <v-btn icon="mdi-magnify" size="small"> </v-btn>
          </template>
        </CustomInput>
      </v-card>
    </v-col>
  </v-row>

  <v-row class="second-row d-flex justify-center">
    <v-col class="sidebar" cols="12" xs="12" sm="12" md="8" lg="2">
      <LanguageRadioButtons @radioButtonValue="radioButtonvalueHandler" />
    </v-col>

    <v-col class="main-content" cols="12" xs="12" sm="12" md="8" lg="6">
      <DocumentList/>
    </v-col>
  </v-row>
</template>

<script>
import LanguageRadioButtons from "../components/LanguageRadioButtons.vue";
import DocumentList from "../components/DocumentList.vue";
export default {
  components: { LanguageRadioButtons, DocumentList },
  data(){
    return {
        searchOptions: {inputValue: "", language: ""}
    }
  },
  methods: {
    initiateSearchHandler(inputValue) {
      this.searchOptions.inputValue = inputValue;
      console.log(this.searchOptions)
    },
    radioButtonvalueHandler(radioButtonValue) {
        this.searchOptions.language = radioButtonValue;
    },
  },
};
</script>

<style scoped>
.fake-input {
  background-color: white;
  border-radius: 0.2em;
}
.input-container {
  background-image: url("../assets/search-card-image.png");
  background-size:auto;
  background-repeat: no-repeat;
}
</style>
