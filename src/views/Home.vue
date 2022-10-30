<template>
  <div class="home">
    <Navbar />
    <div class="header content">
      <h1 class="text-4xl">
        Wir stehen nicht <br />auf der <span class="secondary">Leitung.</span>
      </h1>
      <p>
        An absolute random example of some text <br />
        together to make it look like someone <br />
        has written something meaningful already.
      </p>
      <button>Kontaktieren Sie uns</button>
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
.home {
  height: 100vh;
  max-width: 100%;
  background-image: url("../assets/imgs/background-header.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.header {
  margin-top: 6rem;
}

.header h1 {
  text-transform: uppercase;
}

.header p {
  margin: 20px 0;
  line-height: 200%;
}

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
