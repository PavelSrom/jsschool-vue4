<template>
  <div>
    <h1>This is an products page</h1>
  </div>
</template>

<script>
import { watch } from "vue"
import { useRouter } from "vue-router"
import { getProducts, getUser } from "../composables"

export default {
  setup() {
    const { user } = getUser()
    const { products } = getProducts()
    const { push: navigate } = useRouter()

    watch(products, () => {
      console.log(products.value)
    })

    watch(user, () => {
      if (!user.value) navigate({ name: "Login" })
    })
  },
}
</script>
