<template>
  <form
    @submit.prevent="handleSubmit"
    class="flex flex-col space-y-4 max-w-screen-sm mx-auto mt-10"
  >
    <h1 class="text-3xl text-center text-green-500">Sign up</h1>

    <div
      v-if="!!error"
      class="bg-red-100 border border-red-500 p-2 text-center"
    >
      <p>{{ error }}</p>
    </div>

    <input
      type="text"
      required
      placeholder="Name"
      v-model="name"
      class="p-2 border border-black rounded-md"
    />
    <input
      type="email"
      required
      placeholder="Email"
      v-model="email"
      class="p-2 border border-black rounded-md"
    />
    <input
      type="password"
      required
      placeholder="Password"
      v-model="password"
      class="p-2 border border-black rounded-md"
    />
    <button
      class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
    >
      Sign up
    </button>
    <a class="underline" @click="navigate({ name: 'Login' })"
      >Already registered? Sign in</a
    >
  </form>
</template>

<script>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useRegister } from "../composables"

export default {
  setup() {
    const { error, register } = useRegister()
    const { push: navigate } = useRouter()

    const name = ref("")
    const email = ref("")
    const password = ref("")

    const handleSubmit = async () => {
      await register(email.value, password.value, name.value)
      if (!error.value) {
        navigate({ name: "Login" })
        // navigate to login or sign in directly
      }
    }

    return { name, email, password, error, handleSubmit, navigate }
  },
}
</script>
