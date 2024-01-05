<template>
  <!-- Menu -->
  <BaseContainer customClass="card-container menu">
    <section>
      <BaseButton :isRouterLink="false">Filter</BaseButton>
    </section>
    <section class="right-buttons flex">
      <BaseButton :isRouterLink="false">Refresh</BaseButton>
      <BaseButton isRouterLink to="/registration"
        >Register as a mentor
      </BaseButton>
    </section>
  </BaseContainer>
</template>

<script>
export default {};
</script>

<style scoped>
@media (width > 768px) {
  .menu {
    width: 100%;
  }
}
.menu {
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.right-buttons {
  gap: 0.5em;
}
</style>
