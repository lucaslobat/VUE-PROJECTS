<template>
  <v-container class="app-container">
    <!-- First row -->
    <v-row class="first-row">
      <!-- Header -->
      <v-col class="header" cols="12">
        <span class="text-h4 title">
          <span class="font-weight-black">Scholar</span> Docs
        </span>
      </v-col>

      <!-- Search bar -->
      <v-col cols="12">
        <v-card class="input-container py-12 px-6">
          <CustomInput placeholder="Article, book or webpage">
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

    <!-- Second row -->
    <!-- Side panel and Main content -->
    <v-row class="second-row px-4">
      <v-col class="sidebar" cols="12" xs="12" sm="12" md="3" lg="3">
        <LanguageSearch />
      </v-col>
      <v-col class="main-content" cols="12" xs="12" sm="12" md="9" lg="9"
        >Main content</v-col
      >
    </v-row>
  </v-container>
</template>

<script>
import LanguageSearch from "../components/LanguageSearch.vue";
import searchCardImage from "../assets/search-card-image.png";
import CustomInput from "../components/CustomInput.vue";
import axios from "axios";
export default {
  components: { LanguageSearch, CustomInput },
  data() {
    return {
      searchCardImage,
      restData: null,
    };
  },
  async created() {
    const locallyStoredData = localStorage.getItem("scholarDocuments");
    if (locallyStoredData) {
      this.restData = JSON.parse(locallyStoredData);
      console.log(this.restData.data);
    } else {
      const response = await axios.get("http://localhost:3000/api")
      this.restData = response.data;
      localStorage.setItem('scholarDocuments',JSON.stringify(this.restData));
      console.log(this.restData);

    }
  },
};
</script>

<style scoped>
.app-container {
  min-height: 100vh;
}

.first-row {
  /* outline:2px solid red; */
}

.second-row {
  /* outline:2px solid blue; */
}
.title {
  color: var(--text-color);
}

.fake-input {
  background-color: white;
  border-radius: 0.2em;
}
.input-container {
  background-image: url("../assets/search-card-image.png");
  background-size: 100%;
  background-repeat: no-repeat;
}

.sidebar {
  /* outline: 2px solid greenyellow; */
}

.main-content {
  outline: 2px solid magenta;
}
</style>
