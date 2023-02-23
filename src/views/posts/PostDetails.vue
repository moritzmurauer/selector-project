<template>
  <div class="content">
    <div
      class="fixed top-0 left-0 right-0 bottom-0 z-40 bg-white opacity-90"
      v-if="showModal"
    ></div>
    <div class="error" v-if="error">{{ error }}</div>
    <div v-if="post" class="post-details mt-12">
      <!-- post information -->
      <div class="post-info">
        <div class="cover cursor-pointer" @click="openModal">
          <img :src="post.coverUrl" />
        </div>
      </div>
      <div>
        <!-- standard view -->
        <div v-if="!editMode">
          <h1 class="text-4xl">{{ post.title }}</h1>

          <router-link :to="{ name: 'UserPosts', params: { id: post.userId } }">
            <div
              class="flex items-center px-4 py-2 bg-white rounded-full shadow w-48 mt-4"
            >
              <img
                src="@/assets/default.png"
                class="object-cover object-center w-10 h-10 rounded-full"
              />

              <div class="ml-3 text-sm font-medium">
                created by {{ post.userName }}
              </div>
            </div>
          </router-link>

          <div class="mt-5">
            <p class="text-sm text-gray-500">about</p>
            <p>{{ post.description }}</p>
          </div>

          <div class="mt-5">
            <p class="text-sm text-gray-500">price</p>
            <div>
              <h2 class="text-2xl">{{ post.price }} €</h2>
              <button
                class="btn-full mt-1 py-1 px-3 rounded-full"
                @click="openModal"
              >
                buy now
              </button>
            </div>
          </div>

          <div class="mt-5">
            <p class="text-sm text-gray-500">dimensions</p>
            <h3>{{ post.width }} x {{ post.height }}</h3>
          </div>
        </div>

        <!-- edit view -->
        <form v-if="editMode" class="mt-3 mb-8" @submit.prevent="handleSubmit">
          <div v-if="post">
            <h2 class="text-center">
              Edit the informations about your picture!
            </h2>
            <label for="title">Edit title</label>
            <input
              type="textarea"
              class="bg-white focus:outline-none focus:shadow-outline border border-primary-300 rounded-lg py-2  px-4 block w-full appearance-none leading-normal"
              required
              v-model="post.title"
            />
          </div>

          <div v-if="post">
            <label for="description">Edit info</label>
            <input
              class="bg-white focus:outline-none focus:shadow-outline border border-primary-300 rounded-lg py-2 pb-12 px-4 block w-full appearance-none leading-normal"
              type="textarea"
              required
              v-model="post.description"
            />
          </div>

          <div v-if="post">
            <label for="description">Edit height</label>
            <input
              class="bg-white focus:outline-none focus:shadow-outline border border-primary-300 rounded-lg py-2  px-4 block w-full appearance-none leading-normal"
              type="number"
              required
              v-model="post.height"
            />
          </div>

          <div v-if="post">
            <label for="description">Edit width</label>
            <input
              class="bg-white focus:outline-none focus:shadow-outline border border-primary-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              type="number"
              required
              v-model="post.width"
            />
          </div>

          <div v-if="post">
            <label for="description">Edit the Price</label>
            <input
              class="bg-white focus:outline-none focus:shadow-outline border border-primary-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              type="number"
              required
              v-model="post.price"
            />
          </div>

          <button
            v-if="!isPending"
            class="btn-full w-full rounded-full mt-8 place-self-auto"
          >
            Submit
          </button>
          <div v-else disabled class="w-full flex justify-center mt-8">
            <span class="save-icon">
              <span class="loader"></span>
              <span class="loader"></span>
              <span class="loader"></span>
            </span>
          </div>
        </form>

        <!-- modal img -->
        <div>
          <div
            class="fixed top-0 left-0 right-0 bottom-0 z-50 overflow-auto"
            v-if="showModal"
            @click="closeModal"
          >
            <div
              class="relative mx-auto max-w-xl mt-16 p-8 bg-white shadow-xl"
              @click.stop
            >
              <img :src="post.coverUrl" alt="Artwork" class="w-full" />
              <button
                class="absolute top-0 right-0 mt-4 mr-4"
                @click="closeModal"
              >
                <svg
                  class="h-6 w-6 text-smoke-dark fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M14.3 16l-4.3-4.3 1.4-1.4L16 14.3l4.3-4.3 1.4 1.4L17.4 16l4.3 4.3-1.4 1.4L16 17.4l-4.3 4.3-1.4-1.4L14.3 16z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <button
            class="btn-primary text-primary p-2 rounded-full mt-3"
            @click="openModal"
            v-if="!editMode"
          >
            Show in full size
          </button>
        </div>
        <div
          class="rounded-full p-3 bg-white border border-primary-300 mt-3 relative"
          v-if="changedPost"
        >
          <p class="text-green-500">
            You're information got updated succesfully.
          </p>
        </div>
      </div>
    </div>
    <div class="flex">
      <div @click="goBack" class="cursor-pointer back-arrow flex mt-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          class="mr-2 mt-1"
        >
          <path
            d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
          />
        </svg>

        <p>Go Back</p>
      </div>

      <!-- modal delete -->
      <button
        v-if="ownership && !editMode"
        class="ml-24 mt-3 bg-red-600 text-white rounded p-2"
        @click="showDeleteModal = true"
      >
        Delete
      </button>

      <button
        class="ml-2 mt-3 bg-yellow-600 text-white rounded p-2"
        v-if="ownership && !editMode"
        @click="handleForm"
      >
        Edit
      </button>
      <!-- Modal overlay (hidden by default) -->
      <div
        class="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center"
        :class="{ hidden: !showDeleteModal }"
      >
        <!-- Modal content -->
        <div class="bg-white p-4 rounded shadow-md">
          <p class="mb-4">Are you sure you want to delete the picture?</p>

          <div class="flex justify-center">
            <button
              class="bg-red-600 text-white rounded p-2 mr-2"
              @click="handleDelete"
            >
              Yes, delete
            </button>

            <button
              class="bg-gray-400 text-white rounded p-2"
              @click="showDeleteModal = false"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import { onMounted, computed } from "vue";
import useStorage from "@/composables/useStorage";
import useDocument from "@/composables/useDocument";
import getDocument from "@/composables/getDocument";
import getUser from "@/composables/getUser";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  components: { Navbar },
  props: ["id"],
  setup(props) {
    // getting document with id
    const { error, document: post } = getDocument("posts", props.id);
    const { user } = getUser();
    const { deleteDoc, updateDoc } = useDocument("posts", props.id);
    const { deleteImage } = useStorage();
    const editMode = ref(false);
    const router = useRouter();
    const showModal = ref(false);
    const isPending = ref(false);
    const image = ref("");
    const showDeleteModal = ref(false);
    const changedPost = ref(false);

    const goBack = () => {
      router.go(-1);
    };

    const openModal = (img) => {
      showModal.value = true;
      image.value = img;
    };

    const closeModal = () => {
      showModal.value = false;
    };

    // check if logged in user created the post
    const ownership = computed(() => {
      return post.value && user.value && user.value.uid == post.value.userId;
    });

    // deleting a post
    const handleDelete = async () => {
      router.push({ name: "UserPosts", params: { id: user.value.uid } });
      await deleteDoc();
      await deleteImage(post.value.filePath);
      showDeleteModal.value = false;
    };

    // updating a post with feedback
    const handleSubmit = async () => {
      isPending.value = true;
      const res = await updateDoc({
        title: post.value.title,
        description: post.value.description,
        height: post.value.height,
        width: post.value.width,
        price: post.value.price,
      });
      editMode.value = false;
      isPending.value = false;
      changedPost.value = true;
      setTimeout(() => {
        changedPost.value = false;
      }, 3000);
      isPending.value = false;
    };

    // opens edit container
    const handleForm = async () => {
      editMode.value = true;
    };

    return {
      error,
      post,
      handleDelete,
      handleForm,
      handleSubmit,
      editMode,
      user,
      ownership,
      changedPost,
      showModal,
      image,
      openModal,
      closeModal,
      isPending,
      goBack,
      showDeleteModal,
    };
  },
};
</script>

<style scoped>
.post-details {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 80px;
}
.cover {
  overflow: hidden;
  border-radius: 20px;
  position: relative;
  padding: 220px;
}
.cover img {
  display: block;
  position: absolute;
  object-fit: cover;
  object-position: center center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.back-arrow:hover svg {
  transition: transform 0.3s ease-in-out;
  transform: translateX(-3px);
}

.back-arrow svg {
  transition: transform 0.3s ease-in-out;
  transform: translateX(3px);
}

.post-info h2 {
  text-transform: capitalize;
  font-size: 28px;
  margin-top: 20px;
}
.post-info p {
  margin: 20px 0;
}
.username {
  color: #999;
}
.description {
  text-align: left;
  margin-top: 20px;
}
</style>
