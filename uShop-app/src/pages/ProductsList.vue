<template>
  <section>
    <ul>
      <ProductItem v-for="prod in productsGetter" :key="prod.id" :id="prod.id" :title="prod.title" :image="prod.image"
        :description="prod.description" :price="prod.price"></ProductItem>
    </ul>
  </section>
</template>

<script>
import ProductItem from '../components/products/ProductItem.vue';

export default {
  components: {
    ProductItem,
  },

  computed: {
    productsGetter() {
      return this.$store.getters.productsGetter;
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 40rem;
}
</style>