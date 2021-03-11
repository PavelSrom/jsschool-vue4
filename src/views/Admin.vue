<template>
  <div class="container mx-auto">
    <div class="flex justify-between items-center">
      <h1 class="text-center text-3xl font-semibold my-8">Products</h1>
      <button
        class="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-500 hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
        @click="addMode = true"
      >
        Add new
      </button>
    </div>

    <form
      @submit="handleSubmit"
      v-if="addMode"
      class="grid grid-cols-12 gap-8 my-4"
    >
      <div class="col-span-2">
        <input required v-model="newProduct.name" placeholder="Name" />
      </div>
      <div class="col-span-2">
        <input
          required
          v-model="newProduct.description"
          placeholder="Description"
        />
      </div>
      <div class="col-span-2">
        <input required v-model="newProduct.price" placeholder="Price" />
      </div>
      <div class="col-span-2">
        <input required v-model="newProduct.image" placeholder="Image URL" />
      </div>
      <div class="col-span-4">
        <button>Add</button>
      </div>
    </form>

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

    <admin-row
      v-for="product in products"
      :key="product.id"
      :product="product"
      @onEdit="update(product.id, product)"
      @onRemove="remove(product.id)"
    />
  </div>
</template>

<script>
  import { ref } from "vue";
  import AdminRow from "../components/AdminRow";
  import { getProducts, useProduct } from "../composables";

  export default {
    components: {
      AdminRow
    },
    setup() {
      const initialValues = {
        name: "",
        description: "",
        price: 5,
        image: ""
      };

      const addMode = ref(false);
      const newProduct = ref(initialValues);

      const { products } = getProducts();
      const { add, update, remove } = useProduct();

      const handleSubmit = e => {
        e.preventDefault();

        add(newProduct.value).finally(() => {
          addMode.value = false;
          newProduct.value = initialValues; // doesn't work??
        });
      };

      return { products, addMode, newProduct, handleSubmit, update, remove };
    }
  };
</script>
