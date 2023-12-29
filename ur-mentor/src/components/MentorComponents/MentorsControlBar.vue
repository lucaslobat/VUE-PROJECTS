<template>
  <!-- Menu -->
  <BaseContainer customClass="card-container menu">
    <section>
      <BaseButton :isRouterLink="false">Filter</BaseButton>
    </section>
    <section class="flex">
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
.menu {
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
</style>
