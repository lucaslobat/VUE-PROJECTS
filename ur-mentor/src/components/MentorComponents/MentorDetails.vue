<template>
  <BaseContainer customClass="card-container flex">
    <div class="mentor-details flex">
      <div class="area-badges">
        <v-chip
          v-for="area in identifiedMentor.areas"
          :key="area"
          color="primary"
          >{{ area }}</v-chip
        >
      </div>
      <div class="about">
        <h2>About</h2>
        <p>{{ identifiedMentor.about }}</p>
      </div>
    </div>

    <div class="mentor-card flex">
      <v-avatar size="100">
        <v-img
          cover
          src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
        ></v-img>
      </v-avatar>

      <h4>
        {{ `${identifiedMentor.firstName} ${identifiedMentor.lastName}` }}
      </h4>

      <div class="card-details flex">
        <span>Hourly rate</span>
        <span>{{ identifiedMentor.rate }}€</span>
      </div>
      <div class="card-details flex">
        <span>Average response</span>
        <span>1h</span>
      </div>
      <div class="card-details flex">
        <span># of students</span>
        <span>30</span>
      </div>
    </div>
  </BaseContainer>
</template>
<script>
export default {
  computed: {
    identifiedMentor() {
      return this.$store.getters[`mentorsModule/getMentorById`](this.$route.params.id);
    },
  },
};
</script>
<style scoped>
.card-container {
  gap: 1em;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
}

.mentor-details {
  flex-direction: column;
  gap: 1em;
  max-width: 40%;
  border-radius: 0.5em;
  padding: 1em;
  background-color: #fff8ef;
}

.mentor-card {
  flex-direction: column;
  gap: 1em;
  align-items: center;
  padding: 1em;
  min-width: 20%;
  border-radius: 0.5em;
  background-color: #fff8ef;
}

.card-details {
  justify-content: space-between;
  width: 100%;
}
</style>
