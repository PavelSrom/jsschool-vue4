<template>
  <div class="container mx-auto">
    <div class="flex justify-between items-center">
      <h1 class="text-center text-3xl font-semibold my-8">Products</h1>
      <button
        class="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-500 hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
      >
        Add new
      </button>
    </div>

    <div class="grid grid-cols-12 gap-8 mb-4">
      <div class="col-span-2">
        <p class="font-semibold">Name</p>
      </div>
      <div class="col-span-2">
        <p class="font-semibold">Description</p>
      </div>
      <div class="col-span-2">
        <p class="font-semibold">Price</p>
      </div>
      <div class="col-span-2">
        <p class="font-semibold">Image</p>
      </div>
      <div class="col-span-4">
        <p class="font-semibold">Actions</p>
      </div>
    </div>

    <div
      v-for="product in products"
      :key="product.id"
      class="grid grid-cols-12 gap-8"
    >
      <div class="col-span-2">
        <input v-model="product.name" />
      </div>
      <div class="col-span-2">
        <input v-model="product.description" />
      </div>
      <div class="col-span-2">
        <input v-model="product.price" type="number" />
      </div>
      <div class="col-span-2">
        <input v-model="product.image" />
      </div>
      <div class="col-span-4 space-x-4">
        <span
          class="material-icons cursor-pointer text-gray-400 hover:text-gray-900"
        >
          edit
        </span>
        <span
          class="material-icons cursor-pointer text-gray-400 hover:text-gray-900"
        >
          delete
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import { getProducts } from "../composables";
  export default {
    setup() {
      const { products } = getProducts();

      return { products };
    }
  };
</script>
