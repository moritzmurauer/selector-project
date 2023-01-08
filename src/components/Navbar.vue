<template>
  <div class="mt-8">
    <nav>
      <div>
        <router-link :to="{ name: 'Home' }"
          ><h1 class="text-xl">Selector.</h1></router-link
        >
      </div>
      <div class="flex">
        <p class="pr-8">
          <router-link :to="{ name: 'Home' }">Home</router-link>
        </p>
        <p class="pr-8">
          <router-link :to="{ name: 'Artworks' }">Posts</router-link>
        </p>
        <p>
          <router-link :to="{ name: 'Explore' }">Artists</router-link>
        </p>
      </div>
      <div class="links">
        <div v-if="user">
          <router-link :to="{ name: 'CreatePost' }">Add new Post</router-link>
          <router-link class="ml-4" :to="{ name: 'AddProfileInfo' }"
            >Account</router-link
          >

          <span>Hi there, {{ user.displayName }}</span>
          <button class="btn-outline rounded-full ml-4" @click="handleClick">
            Logout
          </button>
        </div>
        <div class="flex" v-else>
          <div class="mt-3 mr-4">
            <router-link :to="{ name: 'Login' }">Login</router-link>
          </div>
          <button class="btn-outline rounded-full">
            <router-link :to="{ name: 'Signup' }">Register</router-link>
          </button>
        </div>
      </div>
      <div class="mobile-nav pr-1">
        <div @click="openModal">
          <img src="@/assets/icons/icons8-menu.png" alt="burger" />
        </div>
      </div>
    </nav>
  </div>
  <div class="modal white" v-if="modalActive">
    <div class="content modal-links">
      <button @click="closeModal" class="close">X</button>
      <router-link class="white" :to="{ name: 'Home' }">Home</router-link>
      <router-link class="white" :to="{ name: 'Explore' }"
        >Projects</router-link
      >
      <router-link class="white" :to="{ name: 'Home' }">Leistungen</router-link>

      <div v-if="user">
        <button @click="handleClick">Logout</button>
        <router-link :to="{ name: 'CreatePost' }">Add new Art</router-link>
      </div>
      <div v-else></div>
    </div>
  </div>
</template>

<script>
import getUser from "../composables/getUser";
import useLogout from "../composables/useLogout";
import { useRouter } from "vue-router";
import { ref } from "@vue/reactivity";

export default {
  setup() {
    const { user } = getUser();
    const { logout } = useLogout();
    const router = useRouter();
    const modalActive = ref(false);

    const openModal = () => {
      modalActive.value = true;
    };

    const closeModal = () => {
      modalActive.value = false;
    };

    const handleClick = async () => {
      await logout();
      console.log("logged out");
      router.push({ name: "Home" });
    };

    return { handleClick, user, modalActive, openModal, closeModal };
  },
};
</script>

<style scoped>
.modal,
.mobile-nav {
  display: none;
}

.modal-links {
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
}

.modal-links a {
  padding: 1rem 0;
  margin: 0.5rem 0;
  text-align: center;
  background: var(--secondary);
  font-size: 2rem;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}
nav img {
  max-height: 60px;
}

.modal {
  background: var(--primary);
  position: fixed;
  width: 100%;
  height: 100vh;
}

span {
  font-size: 14px;
  display: inline-block;
  margin-left: 16px;
  padding-left: 16px;
  border-left: 1px solid #eee;
}

@media only screen and (max-width: 900px) {
  .links,
  .nav-links {
    display: none;
  }

  .modal,
  .mobile-nav {
    display: block;
  }
}
</style>
