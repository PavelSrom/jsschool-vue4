<template>
  <div class="container mx-auto">
    <h1 class="text-center text-3xl font-semibold my-8">Products</h1>

    <div class="grid grid-cols-12 gap-8">
      <div v-for="product in products" :key="product.id" class="col-span-4">
        <product-card :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
  import { getProducts } from "../composables";
  import ProductCard from "../components/ProductCard";

  export default {
    components: {
      ProductCard
    },
    setup() {
      const { products } = getProducts();

      return { products };
    }
  };
</script>
