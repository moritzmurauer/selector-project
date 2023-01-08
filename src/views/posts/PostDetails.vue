<template>
  <div class="content">
    <div class="error" v-if="error">{{ error }}</div>
    <div v-if="post" class="post-details mt-12">
      <!-- post information -->
      <div class="post-info">
        <div class="cover">
          <img :src="post.coverUrl" />
        </div>
      </div>
      <div>
        <!-- standard view -->
        <div v-if="!editMode">
          <h2>{{ post.title }}</h2>
          <p class="username">Created by {{ post.userName }}</p>
        </div>

        <!-- edit view -->
        <form v-if="editMode" class="mt-3 mb-8" @submit.prevent="handleSubmit">
          <div v-if="post">
            <label for="title">Edit title</label>
            <input type="textarea" required v-model="post.title" />
          </div>

          <div v-if="post">
            <label for="description">Edit info</label>
            <input
              class="textarea-input"
              type="textarea"
              required
              v-model="post.description"
            />
          </div>

          <button>Submit</button>
        </form>

        <!-- delete or edit control panel -->
        <p v-if="!editMode" class="description">{{ post.description }}</p>
        <button class="delete-button" v-if="user" @click="handleDelete">
          Delete Post
        </button>
        <button
          class="edit-button"
          v-if="user && !editMode"
          @click="handleForm"
        >
          Edit
        </button>

        <p class="badge-edit" v-if="changedPost">Post got edited</p>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
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

    const changedPost = ref(false);

    // deleting a post
    const handleDelete = async () => {
      router.push({ name: "Home" });
      await deleteDoc();
      await deleteImage(post.value.filePath);
    };

    // updating a post with feedback
    const handleSubmit = async () => {
      changedPost.value = true;
      const res = await updateDoc({
        title: post.value.title,
        description: post.value.description,
      });
      editMode.value = false;
      setTimeout(() => {
        changedPost.value = false;
      }, 3000);
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
      changedPost,
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
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  max-width: 100%;
  height: auto;
}

.badge-edit {
  display: table;
  padding: 5px 10px;
  background: rgba(0, 177, 9, 0.315);
  margin-top: 2rem !important;
  color: rgb(34, 56, 0);
  margin: 0 auto;
  transition: all ease 0.4s;
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

.delete-button {
  margin-right: 1rem;
  background: rgb(255, 105, 105);
}

.edit-button {
  background: rgb(255, 245, 105);
  color: var(--primary);
}

@media only screen and (max-width: 1000px) {
  .post-details {
    display: block;
  }
}
</style>
