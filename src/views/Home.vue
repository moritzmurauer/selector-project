<template>
  <div class="home">
    <div class="flex content">
      <div class="mt-24 space-y-6">
        <h1 class="text-4xl w-80 leading-tight">
          Handselected art from indonesian based artists.
        </h1>
        <p class="leading-relaxed">
          Journey Through Indonesia's Artistic Landscape with Our Handpicked
          Collection of indonesias finest.
        </p>
        <div class="mt-8">
          <button class="btn-full rounded-full mr-4 px-4">
            <router-link :to="{ name: 'Artworks' }">
              <div class="flex">
                <p class="text-white">explore the collection</p>
                <div class="cursor-pointer back-arrow">
                  <svg
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path
                      d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
                    />
                  </svg>
                </div>
              </div>
            </router-link>
          </button>
        </div>
      </div>
      <div>
        <img class="mt-16" src="../assets/imgs/header-selector.png" alt="img" />
      </div>
    </div>
  </div>

  <div class="categories content mt-10">
    <Categories />
  </div>

  <div class="creator content mt-64">
    <Creator />
  </div>

  <div class="curated content mt-64 mb-64">
    <Curated />
  </div>

  <!--
  <div class="weekly content mt-64">
    <Weekly />
  </div>
  -->

  <!--
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
  -->

  <!--
  <div>
    <Team />
  </div>
   -->
</template>

<script>
import Footer from "../components/Footer.vue";
import Categories from "../components/Categories.vue";
import Weekly from "../components/Weekly.vue";
import Curated from "../components/Curated.vue";
import Creator from "../components/Creator.vue";
import ListView from "../components/ListView.vue";
import getCollection from "../composables/getCollection";
import getUser from "../composables/getUser";

export default {
  name: "Home",
  components: {
    ListView,
    Categories,
    Weekly,
    Curated,
    Footer,
    Creator,
  },
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

.categories {
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

.back-arrow:hover svg {
  transition: transform 0.3s ease-in-out;
  transform: translateX(-3px);
}

.back-arrow svg {
  transition: transform 0.3s ease-in-out;
  transform: translateX(3px), rotate(180);
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
