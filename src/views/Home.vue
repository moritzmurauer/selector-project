<template>
  <div class="home">
    <Navbar />
    <div class="flex content">
      <div class="mt-24 space-y-6">
        <h1 class="text-4xl w-80 leading-tight">
          Handselected art from indonesian based artists.
        </h1>
        <p class="leading-relaxed">
          An absolute random example of some text <br />
          together to make it look like someone <br />
          has written something meaningful already.
        </p>
        <div class="mt-8">
          <button class="btn-full rounded-full mr-4 px-8">explore</button>
          <button class="btn-outline rounded-full">contribute</button>
        </div>
      </div>
      <div>
        <img class="mt-16" src="../assets/imgs/header-selector.png" alt="img" />
      </div>
    </div>
  </div>

  <div class="attributes content">
    <Attributes />
  </div>

  <div class="projects">
    <div class="content">
      <h2 class="white mt-2">
        Unsere neuesten <span class="secondary">Projekte</span>.
      </h2>
      <div v-if="error" class="error">Could not fetch the data</div>
      <div v-if="documents" class="post-grid">
        <ListView :posts="documents" />
      </div>
      <div v-if="documents == 0">
        <p>Here are no projects listed yet</p>
        <div v-if="user">
          <h4>Add one</h4>
          <router-link :to="{ name: 'CreatePost' }">***here***</router-link>
        </div>
      </div>
    </div>
  </div>

  <div>
    <Team />
  </div>

  <div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Team from "../components/Team.vue";
import Attributes from "../components/Attributes.vue";
import ListView from "../components/ListView.vue";
import getCollection from "../composables/getCollection";
import getUser from "../composables/getUser";

export default {
  name: "Home",
  components: { ListView, Navbar, Attributes, Team, Footer },
  setup() {
    //gets all posts made so far
    const { error, documents } = getCollection("posts");
    const { user } = getUser();

    return { error, documents, user };
  },
};
</script>

<style scoped>
/*
.home {
  height: 100vh;
  max-width: 100%;
  background-image: url("../assets/imgs/header-selector.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
*/

.attributes {
  margin-top: 6rem;
}

.projects {
  background: var(--primary);
  padding: 3rem 0;
  margin-top: 8rem;
}

.post-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 5rem;
}

@media only screen and (max-width: 1050px) {
  .post-grid {
    grid-template-columns: 1fr 1fr;
    padding: 0 10px;
  }

  .home {
    background-position: center left;
  }
}

@media only screen and (max-width: 800px) {
  .post-grid {
    display: block;
  }
}
</style>
