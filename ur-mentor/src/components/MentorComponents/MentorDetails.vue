<template>
  <BaseContainer customClass="card-container flex">
    <div class="primary-details">
      <div class="area-badges">
        <v-chip v-for="area in identifiedUser.areas" :key="area" color="primary">{{
          area
        }}</v-chip>
      </div>
      <div class="about">
        <p>{{ identifiedUser.about }}</p>
      </div>
    </div>

    <div class="secondary-details"></div>
  </BaseContainer>
</template>
<script>
export default {
  methods: {
    getAllMentors() {
      return this.$store.getters["mentorsModule/getAllMentors"];
    },

    getIdentifiedUser(param) {
      const allFetchedMentors = this.getAllMentors();
      const identifiedMentor = allFetchedMentors.find(
        (mentor) => mentor.id == param
      );

      return identifiedMentor || "";
    },
  },
  computed: {
    identifiedUser() {
      return this.getIdentifiedUser(this.$route.params.id);
    },
  },
};
</script>
<style scoped>
.card-container {
  gap: 1;
}
</style>
