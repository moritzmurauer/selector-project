<template>
  <footer class="py-12 mt-24 w-full">
    <div class="content mx-auto flex flex-wrap mt-6">
      <div class="w-full md:w-1/4 text-center md:text-left">
        <h4 class="mb-6">Links</h4>
        <ul class="list-reset">
          <li class="mb-3">
            <router-link :to="{ name: 'Home' }">Home</router-link>
          </li>
          <li class="mb-3">
            <router-link :to="{ name: 'Artworks' }">Artworks</router-link>
          </li>
          <li class="mb-3">
            <router-link :to="{ name: 'Explore' }">Artists</router-link>
          </li>
        </ul>
      </div>
      <div class="w-full md:w-1/4 text-center md:text-left">
        <h4 class="mb-6">Contact</h4>
        <p class="text-sm ">
          Talblick 7<br />
          93152 Nittendorf, Germany <br />
          (+49) 1766-8496549<br />
          selector@gmail.com
        </p>
      </div>
      <div class="w-full md:w-1/4 text-center md:text-left">
        <h4 class=" mb-6">Follow Us</h4>
        <ul class="list-reset">
          <li class="mb-3">
            <a class="" href="#">Facebook</a>
          </li>
          <li class="mb-3">
            <a class="" href="#">Twitter</a>
          </li>
          <li class="mb-3">
            <a class="" href="#">Instagram</a>
          </li>
        </ul>
      </div>
      <div class="w-full md:w-1/4 text-center md:text-left">
        <h4 class="mb-6">About Us</h4>
        <p class="text-sm ">
          Selector a curated art platform and a portfolio manager for indonesian
          based artists.
        </p>
      </div>
    </div>
    <div class="container mx-auto py-4">
      <p class="text-center text-sm ">
        Copyright &copy; {{ currentYear }} Selector
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped></style>
