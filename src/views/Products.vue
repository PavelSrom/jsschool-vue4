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
  import { watch } from "vue";
  import { useRouter } from "vue-router";
  import { getProducts, getUser } from "../composables";
  import ProductCard from "../components/ProductCard";

  export default {
    components: {
      ProductCard
    },
    setup() {
      const { user } = getUser();
      const { products } = getProducts();
      const { push: navigate } = useRouter();

      watch(products, () => {
        console.log(products.value);
      });

      watch(user, () => {
        if (!user.value) navigate({ name: "Login" });
      });

      return { products };
    }
  };
</script>
