<template>
  <router-view v-if="shouldRenderRouter" />
  <p v-else class="text-center">Loading...</p>
</template>

<script>
import { watch, ref } from "vue"
import { getUser } from "./composables/getUser"

export default {
  setup() {
    const shouldRenderRouter = ref(false)
    const { user } = getUser()

    watch(user, () => {
      shouldRenderRouter.value = !!user.value
    })

    return { shouldRenderRouter }
  },
}
</script>
