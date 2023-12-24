<template>
  <span class="badge"><slot></slot></span>
</template>
<style scoped>
.badge {
  display: inline-block;
  padding: 0.3em;
  text-transform: capitalize;
  font-size: 0.7em;
  font-weight: bold;
  text-align: center;
  color: #fff;
  background-color: #595f39;
  border-radius: 1em;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  width:6.2em;
}
</style>
