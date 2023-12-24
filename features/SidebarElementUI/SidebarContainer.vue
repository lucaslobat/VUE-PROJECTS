<template>
  <div class="tabs-container">
    <SidebarElementUI></SidebarElementUI>
  </div>
</template>

<script>
import SidebarElementUI from "./SidebarElementUI.vue";
export default {
  name: "SidebarContainer",
  components: { SidebarElementUI },

  methods: {
    addButtonToSidebar() {
      /* Seleccionamos el elemento que contiene las pestañas */
      let tabsContainerElement = document.querySelector(
        "div .el-tabs--right .el-tabs__header.is-right "
      );

      /* Creamos un botón y se le asocia un texto y una clase */
      let sidebarArrowButton = document.createElement("button");
      sidebarArrowButton.textContent = ">";
      sidebarArrowButton.classList.add("sidebar-arrow-button");

      /* Añadimos el botón creado anteriormente 
      al final del contenedor de las pestañas */
      tabsContainerElement.appendChild(sidebarArrowButton);
    },
  },

  mounted() {
    this.addButtonToSidebar();
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

/* El elemento que tiene esta clase contendrá el output de <el-tabs>  */
.tabs-container {
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 60rem;
  max-height: 60vh;
  margin: 0 auto;
  border: 2px solid blue;
}

.el-tabs {
  /*   display:flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  width:100%;
  padding:0.5rem; */
  height: 100%;
}

/* El elemento que tiene la clase 'el-tabs__header' almacena las pestañas */
div .el-tabs--right .el-tabs__header.is-right {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
}

/* El elemento que tiene esta clase almacena las vistas */
.el-tabs__content {
  border: 0.2rem solid green;
  /* width:100%; */
}

.el-tabs__nav {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0.5rem;
}

.sidebar-arrow-button {
  background-color: white;
  color: black;
  padding: 0.5rem;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  border: 0.01em solid gray;
}

.sidebar-arrow-button:hover {
  color: #409eff;
}
</style>
