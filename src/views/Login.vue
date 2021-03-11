<template>
  <form
    @submit.prevent="handleSubmit"
    class="flex flex-col space-y-4 max-w-screen-sm mx-auto mt-10"
  >
    <h1 class="text-3xl text-center text-green-500">Sign in</h1>

    <div
      v-if="!!error"
      class="bg-red-100 border border-red-500 p-2 text-center"
    >
      <p>{{ error }}</p>
    </div>

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
      Sign in
    </button>
    <a class="underline cursor-pointer" @click="navigate({ name: 'Register' })"
      >No account? Sign up</a
    >
  </form>
</template>

<script>
  import { ref, watchEffect } from "vue";
  import { useRouter } from "vue-router";
  import { getUser, useLogin } from "../composables";

  export default {
    setup() {
      const email = ref("");
      const password = ref("");

      const { user } = getUser();
      const { error, login } = useLogin();
      const { push: navigate } = useRouter();

      const handleSubmit = async () => {
        await login(email.value, password.value);
        if (!error.value) {
          navigate({ name: "Products" });
        }
      };

      /**
       * watch = whenever a specific piece of state changes, doesn't run on mount, only on updates
       * watchEffect = whenever anything thats inside it changes, runs both on mount and on updates
       * https://markus.oberlehner.net/blog/watch-vs-watcheffect-when-to-use-what-with-vue/
       */
      watchEffect(() => {
        if (user.value) navigate({ name: "Products" });
      });

      return { email, password, error, handleSubmit, navigate };
    }
  };
</script>
