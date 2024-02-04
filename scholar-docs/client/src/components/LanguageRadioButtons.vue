<!-- 
    ## States ##
    isFullTimeSelected (Boolean): Stores the value of the checkbox.
    radioButtonValue (String): Stores the value of one of the selected radio buttons.
-->

<template>
  <div class="d-flex flex-column">
    <div class="d-flex align-center ga-2 buttons-div">
      <v-icon icon="mdi-translate" size="small" color="#282538" />
      <span class="location-text text-uppercase font-weight-bold"
        >Language
      </span>
    </div>

    <v-radio-group v-model="radioButtonValue" class="mt-2">
      <v-radio label="English" value="english"></v-radio>
      <v-radio label="Spanish" value="spanish"></v-radio>
      <v-radio label="Portuguese" value="portuguese"></v-radio>
      <v-radio label="Finnish" value="finnish"></v-radio>
    </v-radio-group>
  </div>
</template>

<script setup>
import { ref, watchEffect, onMounted } from "vue";
const emits = defineEmits(['emitRadioButtonValue']);
const radioButtonValue = ref("english");

watchEffect(() => {
  if (radioButtonValue) {
    emits("emitRadioButtonValue", radioButtonValue.value);
  }
});

onMounted(() => {
  emits("emitRadioButtonValue", radioButtonValue.value);
});

</script>

<style scoped>
.location-text {
  color: var(--text-color);
}
.fake-input {
  background-color: white;
  border-radius: 0.2em;
}
</style>
