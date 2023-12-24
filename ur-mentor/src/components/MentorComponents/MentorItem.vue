<template>
  <BaseContainer customClass="card-item">
    <div class="name">{{ `${firstName} ${lastName}` }}</div>

    <div class="areas">
      <BaseBadge v-for="area in areas" :key="area">{{ area }}</BaseBadge>
    </div>

    <div class="rate">{{ rate }}€ / hour</div>
    <div class="technologies">{{ technologies }}</div>
    <div class="controls">
      <BaseButton isRouterLink :toProp="detailsLink" customClass="styled-button"
        >Details</BaseButton
      >
      <BaseButton isRouterLink :toProp="contactLink" customClass="styled-button"
        >Contact</BaseButton
      >
    </div>
  </BaseContainer>
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
      return `${this.$route.path}/${this.id}/contact`;
    },
  }
};
</script>
<style scoped>
.card-item {
  flex-direction: column;
  gap: 1rem;
}

.card-item > * {
  flex:1;
}

.name {
  font-size: 1.5em;
  font-weight: bold;
  color: #1b1b1b;
}

.biography {
  font-size: 14px;
}

.rate {
  font-size: 18px;
  color: #ff9f1c;
  font-weight: 600;
}

.technologies {
  font-size: 1rem;
}

.controls {
  margin: 1rem 0;
}
</style>
