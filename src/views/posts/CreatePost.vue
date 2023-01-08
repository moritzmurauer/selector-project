<template>
  <div class="background-create mt-16">
    <form @submit.prevent="handleSubmit">
      <h4>Create a New Post</h4>

      <!-- text information -->
      <input type="text" required placeholder="Post title" v-model="title" />
      <textarea
        required
        placeholder="Post description..."
        v-model="description"
      ></textarea>

      <!-- select category -->
      <div class="field mt-2 mb-2">
        <h4>Please select a category</h4>
        <select class="mb-1 mt-1 pl-3 p-3 pt-1 pb-1" v-model="selected">
          <option value="" disabled selected>Select your option</option>
          <option
            selected="category?"
            class="p-3"
            v-for="option in options"
            :key="option.value"
            >{{ option.text }}
          </option>
        </select>
        <p>Category: {{ selected }}</p>
      </div>

      <!-- upload Post image -->
      <label>Upload Post Cover Image</label>
      <input type="file" @change="handleChange" />
      <div class="error">{{ fileError }}</div>

      <button v-if="!isPending">Post</button>
      <button v-else disabled>Saving...</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import useStorage from "@/composables/useStorage";
import useCollection from "@/composables/useCollection";
import getUser from "@/composables/getUser";
import { timestamp } from "@/firebase/config";
import { useRouter } from "vue-router";

export default {
  setup() {
    const { filePath, url, uploadImage } = useStorage();
    const { error, addDoc } = useCollection("posts");
    const { user } = getUser();
    const router = useRouter();

    const title = ref("");
    const description = ref("");
    const file = ref(null);
    const fileError = ref(null);
    const isPending = ref(false);

    // post gets created with information from form
    const handleSubmit = async () => {
      if (file.value) {
        isPending.value = true;
        await uploadImage(file.value);
        const res = await addDoc({
          title: title.value,
          description: description.value,
          userId: user.value.uid,
          userName: user.value.displayName,
          category: selected.value,
          coverUrl: url.value,
          filePath: filePath.value,
          createdAt: timestamp(),
        });
        isPending.value = false;
        if (!error.value) {
          router.push({ name: "Artworks", params: { id: res.id } });
        }
      }
    };

    // Defines possible Category Inputs
    const options = ref([
      { text: "Photography", value: "A" },
      { text: "Illustration", value: "B" },
      { text: "Drawing", value: "C" },
    ]);

    const selected = ref("");

    // allowed file types
    const types = ["image/png", "image/jpeg"];

    // image upload
    const handleChange = (e) => {
      let selected = e.target.files[0];
      console.log(selected);

      if (selected && types.includes(selected.type)) {
        file.value = selected;
        fileError.value = null;
      } else {
        file.value = null;
        fileError.value = "Please select an image file (png or jpg)";
      }
    };

    return {
      title,
      description,
      handleSubmit,
      fileError,
      handleChange,
      isPending,
      options,
      selected,
    };
  },
};
</script>

<style>
form {
  background: white;
}
input[type="file"] {
  border: 0;
  padding: 0;
}

textarea {
  height: 200px;
}

label {
  font-size: 12px;
  display: block;
  margin-top: 30px;
}
button {
  margin-top: 20px;
}
</style>
