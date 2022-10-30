<template>
  <div class="navbar">
    <nav>
      <div>
      <h1><router-link :to="{ name: 'Home' }"><img src="../assets/icons/logo-walther.png" alt=""></router-link></h1>
      </div>
      <div class="nav-links">
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'Home' }">Projects</router-link>
        <router-link :to="{ name: 'Home' }">Leistungen</router-link>
      </div>
      <div class="links">
        <div v-if="user">
          <router-link :to="{ name: 'CreatePost' }">Add new Post</router-link>
          <span>Hi there, {{ user.displayName }}</span>
          <button @click="handleClick">Logout</button>
        </div>
        <div v-else>
          <router-link class="btn" :to="{ name: 'Home' }">Get in touch</router-link>
        </div>
      </div>
      <div class="mobile-nav pr-1">
        <div @click="openModal">
          <img src="@/assets/icons/icons8-menu.png" alt="burger">
        </div>
        
      </div>
    </nav>
  </div>
  <div class="modal white" v-if="modalActive">
    <div class="content modal-links">
        <button @click="closeModal" class="close">X</button>
        <router-link class="white" :to="{ name: 'Home' }">Home</router-link>
        <router-link class="white" :to="{ name: 'Home' }">Projects</router-link>
        <router-link class="white" :to="{ name: 'Home' }">Leistungen</router-link>

        <div v-if="user">
          <router-link  :to="{ name: 'CreatePost' }">Add new Post</router-link>
          <button @click="handleClick">Logout</button>
        </div>
        <div v-else>
          
        </div>
    </div>
  </div>
</template>

<script>

import getUser from '../composables/getUser'
import useLogout from '../composables/useLogout'
import { useRouter } from 'vue-router'
import { ref } from '@vue/reactivity'

export default {
  setup() {
    const { user } = getUser()
    const { logout } = useLogout()
    const router = useRouter()
    const modalActive = ref(false)

    const openModal = () => {
      modalActive.value = true
    }

    const closeModal = () => {
      modalActive.value = false
    }

    const handleClick = async () => {
      await logout()
      console.log('logged out')
      router.push({ name: 'Home' })
    }

    return { handleClick, user, modalActive, openModal, closeModal }
  }
}
</script>

<style scoped>
  .navbar {
    padding: 16px 10px;
    position: relative;
    margin-bottom: 60px;
  }

  .modal, .mobile-nav {
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
    font-size: 2rem
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


  .nav-links a {
    padding: 0 70px;
    color: var(--secondary);
    text-transform: uppercase;
  }

  nav .links a, button {
    margin-left: 16px;
    font-size: 14px;
  }
  span {
    font-size: 14px;
    display: inline-block;
    margin-left: 16px;
    padding-left: 16px;
    border-left: 1px solid #eee;
  }

   @media only screen and (max-width: 900px) {
   .links, .nav-links {
       display: none;
   }

   .modal, .mobile-nav {
    display: block;
  }
  }
</style>