<template>
  <BaseCard customClass="card-item">
    <div class="name">{{ `${firstName} ${lastName}` }}</div>
    <div class="rate">{{ rate }}€ / hour</div>
    <div class="technologies">{{ technologies }}</div>
    <div class="areas">{{ areas }}</div>
    <div class="controls">
      <BaseButton isRouterLink :toProp="detailsLink" customClass="styled-button"
        >Details</BaseButton
      >
      <BaseButton isRouterLink :toProp="contactLink" customClass="styled-button"
        >Contact</BaseButton
      >
    </div>
  </BaseCard>
</template>

<script>
export default {
  props: ["id", "firstName", "lastName", "rate", "technologies", "areas"],
  computed: {
    detailsLink() {
      /* Grab the current route and concatenate the id prop. This is useful in case we ever change the route definition in our router.js */
      return `${this.$route.path}/${this.id}`;
    },
    contactLink() {
      return `${this.$route.path}/${this.id}/contact`;;
    },
  },
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
  color:#1B1B1B
}

.biography {
  font-size: 14px;
  margin-bottom: 10px;
}

.rate {
  font-size: 18px;
  color: #8b6212;
  margin-bottom: 10px;
}

.technologies {
  font-size: 1rem;
}

.controls {
  margin: 1rem 0;
}
</style>
