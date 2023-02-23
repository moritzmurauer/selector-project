<template>
  <div class="bg">
    <div class="background-cliff">
      <form
        class="mt-4 space-y-12 formblock shadow-md"
        @submit.prevent="handleSubmit"
      >
        <h2 class="text-center text-2xl">Sign up</h2>
        <input
          class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 pb-3 px-4 block w-full appearance-none leading-normal"
          type="text"
          v-model="displayName"
          placeholder="Name"
        />
        <input
          class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 pb-3 px-4 block w-full appearance-none leading-normal"
          type="email"
          v-model="email"
          placeholder="Email"
        />
        <input
          class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 pb-3 px-4 block w-full appearance-none leading-normal"
          type="password"
          v-model="password"
          placeholder="password"
        />
        <div class="mt-2 mb-5">
          <h4 class="text-center">
            Please select in which category your art is
          </h4>
          <select
            class="mb-1 mt-1 pl-3 p-3 pt-1 pb-1 border rounded-lg border-primary-400 w-full"
            v-model="style"
            placeholder="pick here"
          >
            <option value="" disabled selected>Select your option</option>
            <option
              selected="category?"
              class="p-3"
              v-for="option in options"
              :key="option.value"
            >
              {{ option.text }}
            </option>
          </select>
        </div>
        <div class="error" v-if="error">{{ error }}</div>

        <button class="w-full btn-full rounded mt-5" v-if="!isPending">
          Sign up
        </button>
        <div v-else disabled class="w-full flex justify-center mt-5">
          <span class="save-icon">
            <span class="loader"></span>
            <span class="loader"></span>
            <span class="loader"></span>
          </span>
        </div>

        <p class="mt-1 d-flex justify-content-center align-center">
          Already have an Account? Log in&nbsp;<router-link
            :to="{ name: 'Login' }"
            ><span class="underline-link">here</span>
          </router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import useSignup from "@/composables/useSignup";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const { error, signup, isPending } = useSignup();
    const router = useRouter();

    const bio = ref("");
    const email = ref("");
    const password = ref("");
    const displayName = ref("");
    const grid = ref("Triple Grid");

    // Defines possible Category Inputs
    const options = ref([
      { text: "Photography", value: "A" },
      { text: "Drawings", value: "B" },
      { text: "Illustration", value: "C" },
      { text: "Diverse", value: "D" },
    ]);

    const style = ref("");

    const handleSubmit = async () => {
      const res = await signup(
        email.value,
        password.value,
        displayName.value,
        grid.value,
        style.value
      );
      if (!error.value) {
        router.push({ name: "UserPosts", params: { id: res.user.uid } });
      }
    };

    return {
      email,
      password,
      displayName,
      handleSubmit,
      bio,
      error,
      isPending,
      options,
      style,
      grid,
    };
  },
};
</script>

<style scoped>
.btn {
  width: 100%;
}

.underline-link {
  text-decoration: underline;
}
</style>
