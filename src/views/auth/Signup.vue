<template>
  <Navbar />
  <div class="bg">
    <div class="background-cliff">
      <form class="mt-4 space-y-12 formblock" @submit.prevent="handleSubmit">
        <h3>Sign up</h3>
        <input type="text" v-model="displayName" placeholder="Name" />
        <input type="email" v-model="email" placeholder="Email" />
        <input type="password" v-model="password" placeholder="password" />
        <div class="mt-2 mb-5">
          <h4>Please select a category</h4>
          <select
            class="mb-1 mt-1 pl-3 p-3 pt-1 pb-1 outline-primary"
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
          <p>Category: {{ style }}</p>
        </div>
        <div class="error" v-if="error">{{ error }}</div>

        <button class="btn outline" v-if="!isPending">Sign up</button>
        <button v-if="isPending" disabled>Loading...</button>

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
import Navbar from "@/components/Navbar.vue";
import useSignup from "@/composables/useSignup";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  components: { Navbar },
  setup() {
    const { error, signup, isPending } = useSignup();
    const router = useRouter();

    const bio = ref("");
    const email = ref("");
    const password = ref("");
    const displayName = ref("");

    // Defines possible Category Inputs
    const options = ref([
      { text: "Photography", value: "A" },
      { text: "Drawings", value: "B" },
      { text: "Illustration", value: "C" },
    ]);

    const style = ref("");

    const handleSubmit = async () => {
      const res = await signup(
        email.value,
        password.value,
        displayName.value,
        style.value
      );
      if (!error.value) {
        router.push({ name: "Home" });
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

.formblock {
  box-shadow: 4px 6px 4px 4px rgba(50, 50, 50, 0.2);
}
</style>
