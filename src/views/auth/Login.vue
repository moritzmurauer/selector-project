<template>
  <form class="mt-16" @submit.prevent="handleSubmit">
    <h3 class="text-center text-2xl">Login</h3>
    <input
      class="bg-white mt-5 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 pb-3 px-4 block w-full appearance-none leading-normal"
      type="email"
      placeholder="Email"
      v-model="email"
    />
    <input
      class="bg-white mt-5 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 pb-3 px-4 block w-full appearance-none leading-normal"
      type="password"
      placeholder="Password"
      v-model="password"
    />
    <div v-if="error" class="error">{{ error }}</div>
    <button class="w-full btn-full rounded mt-5" v-if="!isPending">
      Log in
    </button>
    <div v-else disabled class="w-full flex justify-center mt-5">
      <span class="save-icon">
        <span class="loader"></span>
        <span class="loader"></span>
        <span class="loader"></span>
      </span>
    </div>
  </form>
</template>

<script>
// login for admins of the page
import useLogin from "@/composables/useLogin";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const { error, login, isPending } = useLogin();
    const router = useRouter();

    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      const res = await login(email.value, password.value);
      if (!error.value) {
        router.push({ name: "Home" });
      }
    };

    return { email, password, handleSubmit, error, isPending };
  },
};
</script>
