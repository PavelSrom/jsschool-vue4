<template>
  <stats-header v-if="!!user" />

  <router-view v-if="shouldRenderRouter" />
  <p v-else class="text-center">Loading...</p>
</template>

<script>
  import { watch, ref } from "vue";
  import StatsHeader from "./components/Header";
  import { getUser } from "./composables";

  export default {
    components: {
      StatsHeader
    },

    setup() {
      const shouldRenderRouter = ref(false);
      const { user } = getUser();

      watch(user, () => {
        shouldRenderRouter.value = true;
      });

      return { shouldRenderRouter, user };
    }
  };
</script>

<style>
  body {
    background: #f4f4f4;
  }
</style>
