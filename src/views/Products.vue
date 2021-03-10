<template>
  <div>
    <h1>This is an products page</h1>
  </div>
</template>

<script>
import { watch } from "vue"
import { useRouter } from "vue-router"
import { getUser } from "../composables/getUser"

export default {
  setup() {
    const { user } = getUser()
    const { push: navigate } = useRouter()

    watch(user, () => {
      if (!user.value) navigate({ name: "Login" })
    })
  },
}
</script>
