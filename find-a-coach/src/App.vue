<template>
  <Navbar />
  <div v-for="coach in getAllCoaches" class="card">
    <div class="name">{{ `${coach.lastName}, ${coach.firstName}` }}</div>
    <div class="biography">
      {{ coach.biography }}
    </div>
    <div class="rate">
      {{ `Rate: €${coach.rate}/hour` }}
    </div>
    <div class="technologies">
      {{ coach.technologies }}
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Layout/Navbar.vue"
export default {
  components: { Navbar },
  computed: {
    getAllCoaches() {
      return this.$store.getters['coachModule/getAllCoaches'];
    }
  }
}
</script>

<style scoped>
.card {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  width: 300px;
  text-align: center;
}

.name {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.biography {
  font-size: 14px;
  margin-bottom: 10px;
}

.rate {
  font-size: 18px;
  color: #0077b6;
  margin-bottom: 10px;
}

.technologies {
  font-size: 14px;
}
</style>
