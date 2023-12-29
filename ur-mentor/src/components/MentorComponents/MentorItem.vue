<template>
  <BaseContainer customClass="card-item">
    <div class="name">{{ `${firstName} ${lastName}` }}</div>

    <div class="areas">
      <BaseBadge v-for="area in areas" :key="area">{{ area }}</BaseBadge>
    </div>

    <div class="rate">{{ rate }}€ / hour</div>
    <div class="technologies">
      <i
        v-for="(tech, index) in technologies"
        :key="index"
        :class="getIconClass(tech)"
        class="colored"
      ></i>
    </div>
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
  data() {
    return {};
  },
  computed: {
    detailsLink() {
      /* Grab the current route and concatenate the id prop. This is useful in case we ever change the route definition in our router.js */
      return `${this.$route.path}/${this.id}`;
    },
    contactLink() {
      return `${this.$route.path}/${this.id}/contact`;
    },
  },
  methods: {
    getIconClass(tech) {
      const lowerCasedTech = tech.toLowerCase();
      if (lowerCasedTech === "vue") {
        return "devicon-vuejs-plain";
      } else if (lowerCasedTech === "javascript") {
        return "devicon-javascript-plain";
      } else if (lowerCasedTech === "html") {
        return "devicon-html5-plain";
      } else if (lowerCasedTech === "css") {
        return "devicon-css3-plain";
      } else if (lowerCasedTech === "c#") {
        return "devicon-csharp-plain";
      } else if (lowerCasedTech === ".net") {
        return "devicon-dot-net-plain";
      } else if (lowerCasedTech === "python") {
        return "devicon-python-plain";
      }
    },
  },
};
</script>
<style scoped>
.card-item {
  flex-direction: column;
  gap: 1rem;
  border-radius: 1em;
}

.card-item > * {
  flex: 1;
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
  font-size: 2rem;
}

.controls {
  margin: 1rem 0;
}
</style>
