<template>
  <div
    class="p-4 bg-green-500 text-white shadow-lg flex justify-between items-center"
  >
    <div>
      <p class="text-xl font-semibold">Hello {{ user.displayName }}</p>
      <p>Logged in as {{ user.email }}</p>
    </div>
    <button
      @click="logout()"
      class="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-500 hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
    >
      Sign out
    </button>
  </div>
</template>

<script>
import { getUser, useLogout } from "../composables"

export default {
  setup() {
    const { user } = getUser()
    const { logout } = useLogout()

    return { user, logout }
  },
}
</script>
