<template>
  <div class="grid grid-cols-12 gap-8">
    <div class="col-span-2">
      <input class="w-full p-2 mb-1" v-model="prod.name" />
    </div>
    <div class="col-span-2">
      <input class="w-full p-2 mb-1" v-model="prod.description" />
    </div>
    <div class="col-span-2">
      <input class="w-full p-2 mb-1" v-model="prod.price" type="number" />
    </div>
    <div class="col-span-2">
      <input class="w-full p-2 mb-1" v-model="prod.image" />
    </div>
    <div class="col-span-4 flex items-center space-x-4">
      <div @click="onEdit">
        <span
          class="material-icons cursor-pointer text-gray-400 hover:text-gray-900"
        >
          edit
        </span>
      </div>
      <div @click="onRemove">
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
  import { toRefs } from "vue";
  export default {
    props: {
      product: {
        name: String,
        description: String,
        price: Number,
        image: String
      }
    },
    setup(props, context) {
      const { product } = toRefs(props);

      const onEdit = () => context.emit("onEdit");
      const onRemove = () => context.emit("onRemove");

      return { prod: product, onEdit, onRemove };
    }
  };
</script>
