<template>
  <!-- Menu -->
  <BaseContainer customClass="card-container menu">
    <section>
      <BaseButton :isRouterLink="false" customClass="styled-button"
        >Filter</BaseButton
      >
    </section>
    <section class="flex">
      <BaseButton :isRouterLink="false" customClass="styled-button"
        >Refresh</BaseButton
      >
      <BaseButton isRouterLink customClass="styled-button" to="/registration"
        >Register as a mentor
      </BaseButton>
    </section>
  </BaseContainer>
</template>

<script>
export default {};
</script>

<style scoped>
.menu {
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
</style>
