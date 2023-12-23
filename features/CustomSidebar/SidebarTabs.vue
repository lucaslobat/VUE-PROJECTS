<template>
    <div class="sidebar">
      <div
        v-for="(icon, index) in icons"
        :key="index"
        @click="selectView(index)"
        :class="{ highlight: selectedIndex === index }"
        class="icon"
      >
        {{ icon }}
      </div>
      <div v-if="selectedIndex !== null" class="highlight-bar"></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        icons: ["🏠", "📁", "🔍"],
        selectedIndex: null,
      };
    },
    methods: {
      selectView(index) {
        this.selectedIndex = index;
        this.$emit("view-selected", index);
      },
    },
  };
  </script>
  
  <style scoped>
  .sidebar {
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    width: 80px;
    background-color: #333;
    padding: 20px;
    height: 100%;
  }
  
  .icon {
    font-size: 24px;
    cursor: pointer;
    color: #fff;
    position: relative;
  }
  
  .highlight-bar {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 2px;
    background-color: #f90;
    transition: transform 0.3s ease-in-out;
  }
  
  .icon:hover {
    border-left: 2px solid #f90;
  }
  
  .highlight {
    border-left: 2px solid #f90;
  }
  
  .highlight-bar.slide {
    transform: translateY(
      {{selectedIndex * 50}}%
    ); /* Adjust the percentage based on your icon size */
  }
  </style>
  