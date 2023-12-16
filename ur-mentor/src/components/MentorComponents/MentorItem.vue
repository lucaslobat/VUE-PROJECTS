<template>
  <BaseCard customClass="card-item">
    <div class="name">{{ `${firstName} ${lastName}` }}</div>
    <div class="rate">{{ rate }}€ / hour</div>
    <div class="technologies">{{ technologies }}</div>
    <div class="areas">{{ areas }}</div>
    <div class="controls">
        <button>Contact</button>
        <button>Detail</button>
    </div>
  </BaseCard>
</template>

<script>
export default {
  props: [
    "id",
    "firstName",
    "lastName",
    "rate",
    "technologies",
    "areas",
  ],
};
</script>
<style scoped>
.card-item {
  flex-direction: column;
  gap: 0.5rem;
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
  color: #ff5a5f;
  margin-bottom: 10px;
}

.technologies {
  font-size: 1rem;
}

.controls {
  margin: 1rem 0;
}
</style>
