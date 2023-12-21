<template>
    <div :class="customClass">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      customClass: {
        type: String,
        required: true,
        default: null,
      },
    },
  };
  </script>
  
  <style scoped>
  .card-container {
    display: flex;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    margin: 1rem auto;
  }
  
  .card-item {
    display: flex;
    background-color: #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    padding: 1rem;
  }
  </style>
  