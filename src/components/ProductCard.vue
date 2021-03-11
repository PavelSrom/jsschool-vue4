<template>
  <div class="shadow-lg rounded-lg overflow-hidden w-full">
    <div
      class="h-40 bg-center bg-cover"
      :style="{ backgroundImage: `url(${prod.image})` }"
    />
    <div class="bg-white p-4">
      <div class="flex justify-between items-center">
        <p class="font-semibold text-xl">{{ prod.name }}</p>
        <p class="font-light text-lg text-gray-500">{{ prod.price }} DKK</p>
      </div>
      <p>{{ prod.description }}</p>
    </div>
  </div>
</template>

<script>
  import { toRefs } from "vue";

  export default {
    // you have to manually define props even if not using TypeScript
    props: {
      product: {
        image: String,
        name: String,
        description: String,
        price: Number
      }
    },
    // you can't destructure props here
    setup(props) {
      // you have to use toRefs if you want to destructure them
      const { product } = toRefs(props);

      // you can't pass then as the same property into the return,
      // because Vue just loves to make our lives more difficult
      return {
        prod: product
      };
    }
  };
</script>
