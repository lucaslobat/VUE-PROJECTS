<!-- 
    ## States ##
    isFullTimeSelected (Boolean): Stores the value of the checkbox.
    radioButtonValue (String): Stores the value of one of the selected radio buttons.
-->

<template>
  <div class="d-flex flex-column">
    <span class="location-text text-uppercase font-weight-bold mb-5">Language</span>

    <CustomInput placeholder="">
      <template v-slot:inputIcon>
        <v-icon icon="mdi-translate" size="small" color="#B9BDCF" />
      </template>
    </CustomInput>

    <v-radio-group v-model="radioButtonValue" class="mt-5">
      <v-radio label="English" value="english"></v-radio>
      <v-radio label="Spanish" value="spanish"></v-radio>
      <v-radio label="Portuguese" value="portuguese"></v-radio>
      <v-radio label="Finnish" value="finnish"></v-radio>
    </v-radio-group>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isFulltimeSelected: false,
            radioButtonValue: "",
        }
    }
};
</script>

<style scoped>
.location-text {
  color: #B9BDCF;
}

.fake-input {
  background-color: white;
  border-radius: 0.2em;
}
</style>
