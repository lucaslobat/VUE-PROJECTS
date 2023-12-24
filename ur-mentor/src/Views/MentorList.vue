<template>
  <!-- Control Bar -->
  <MentorsControlBar/>

  <!-- MentorItems list -->
  <BaseContainer v-if="hasMentors" customClass="card-container mentors-list">
    <MentorItem
      v-for="mentor in getAllMentors"
      :id="mentor.id"
      :key="mentor.id"
      :firstName="mentor.firstName"
      :lastName="mentor.lastName"
      :biography="mentor.biography"
      :rate="mentor.rate"
      :technologies="mentor.technologies"
      :areas="mentor.areas"
    ></MentorItem>
  </BaseContainer>

  <!-- If no mentor is found this container is rendered -->
  <BaseContainer v-else customClass="card-container">
    <span>No mentors found</span>
  </BaseContainer>
</template>

<script>
import MentorItem from "../components/MentorComponents/MentorItem.vue";
import MentorsControlBar from "../components/MentorComponents/MentorsControlBar.vue";

export default {
  components: { MentorItem, MentorsControlBar },
  computed: {
    getAllMentors() {
      return this.$store.getters["mentorsModule/getAllMentors"];
    },

    hasMentors(){
      return this.$store.getters['mentorsModule/hasMentors']
    }
  },
};
</script>
<style scoped>
.mentors-list {
  gap: 1rem;
  flex-wrap: wrap;
  width:100%;
}

.mentors-list  > * {
  flex: 1;
}
</style>
