<template>
  <div
    class="p-4 bg-green-500 text-white shadow-lg flex justify-between items-center"
  >
    <div>
      <p class="text-xl font-semibold">Hello {{ user.displayName }}</p>
      <p>Logged in as {{ user.email }}</p>
    </div>
    <div class="space-x-4 flex">
      <button
        v-if="user.email === 'srompavel98@gmail.com'"
        @click="navigate({ name: 'Admin' })"
        class="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-700 md:py-4 md:text-lg md:px-10"
      >
        Manage products
      </button>
      <button
        @click="handleLogout"
        class="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-500 hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
      >
        Sign out
      </button>
    </div>
  </div>
</template>

<script>
  import { useRouter } from "vue-router";
  import { getUser, useLogout } from "../composables";

  export default {
    setup() {
      const { user } = getUser();
      const { logout } = useLogout();
      const { push: navigate } = useRouter();

      const handleLogout = () => {
        logout().then(() => navigate({ name: "Login" }));
      };

      return { user, handleLogout, navigate };
    }
  };
</script>
