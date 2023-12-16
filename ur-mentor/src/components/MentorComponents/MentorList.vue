<template>
  <BaseCard customClass="card-container">
    <MentorItem
      v-for="mentor in getAllMentors"
      :key="mentor.id"
      :firstName="mentor.firstName"
      :lastName="mentor.lastName"
      :biography="mentor.biography"
      :rate="mentor.rate"
      :technologies="mentor.technologies"
      :areas="mentor.areas"
    ></MentorItem>
  </BaseCard>
</template>

<script>
import MentorItem from "./MentorItem.vue";
export default {
  components: { MentorItem },
  computed: {
    getAllMentors() {
      return this.$store.getters["mentorsModule/getAllMentors"];
    },
  },
};
</script>
<style scoped>
.card-container {
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.card-container > * {
  flex: 1;
  min-width: 30%;
}
</style>
