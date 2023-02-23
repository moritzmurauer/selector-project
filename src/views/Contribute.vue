<template>
  <div class="content text-center mt-12">
    <h2 class="text-2xl">Why you♥ should join us as an artist!</h2>
    <div class="rounded-md border-creator mx-12 mt-2">
      <div class="flex justify-between">
        <div class="w-96 m-8 text-left">
          <p class="text-sm  leading-relaxed mt-3">
            By joining Selector, you gain access to a wide network of potential
            clients, collaborators, and opportunities that can help increase
            your exposure and take your career to new heights. Our team is
            dedicated to providing the support and resources you need to succeed
            as an artist, from professional development workshops and training
            sessions to portfolio management and promotion.
          </p>
          <button v-if="!user" class="btn-outline rounded-full mt-4">
            <router-link :to="{ name: 'Signup' }">Join us now!</router-link>
          </button>
          <button v-if="user" class="btn-outline rounded-full mt-4">
            <router-link :to="{ name: 'CreatePost' }"
              >Upload your art!</router-link
            >
          </button>
        </div>
        <div class="mr-20">
          <img
            class="max-h-72"
            src="@/assets/imgs/highfive.png"
            alt="illustration highfive"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getUser from "../composables/getUser";
export default {
  setup() {
    const { user } = getUser();

    return { user };
  },
};
</script>

<style>
.border-creator {
  border: 1px var(--primary) solid;
}
</style>
