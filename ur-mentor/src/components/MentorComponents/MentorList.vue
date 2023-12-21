<template>
  <!-- Menu -->
  <BaseContainer customClass="card-container menu">
    <section>
      <BaseButton :isRouterLink="false" customClass="styled-button">Filter</BaseButton>
    </section>
    <section class="controls flex">
      <BaseButton :isRouterLink="false" customClass="styled-button">Refresh</BaseButton>
      <BaseButton isRouterLink customClass="styled-button" to="/registration">Register as a mentor </BaseButton>
    </section>
  </BaseContainer>

  <!-- MentorItems list -->
  <BaseContainer customClass="card-container">
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
  gap: 1rem;
  width: 80vw;
  flex-wrap: wrap;
}

.card-container > * {
  flex: 1;
  min-width: 25%;
}

.menu {
  justify-content: space-between;
  align-items: center;
}
.controls {
  justify-content: end;
  gap:0.75rem;
}

.styled-button{
  background-color: #fdb652;
  color:#1b1b1b
}

.styled-button:hover {
  background: #FF9F1C;
  color: #1B1B1B;
}
</style>
