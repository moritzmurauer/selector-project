<template>
  <div class="background-create my-8">
    <form @submit.prevent="handleSubmit">
      <h4 class="text-center mb-3">Upload your art</h4>

      <!-- upload Post image -->
      <div
        class="grid place-items-center border border-primary-300 mb-4 bg-white rounded-lg place-content-center p-2"
      >
        <label class="mb-2">Upload Post Cover Image</label>
        <input type="file" class="mb-12" @change="handleChange" />
        <div class="error">{{ fileError }}</div>
      </div>

      <!-- text information -->
      <label class="mb-1">Name</label>
      <input
        type="text"
        required
        placeholder="Name of your artwork..."
        v-model="title"
        class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 pb-3 px-4 block w-full appearance-none leading-normal"
      />

      <label class="mb-1">Description</label>
      <textarea
        required
        placeholder="about the artwork..."
        v-model="description"
        class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 pb-3 px-4 block w-full appearance-none leading-normal"
      ></textarea>

      <!-- price information -->
      <label class="mb-1">price €</label>
      <input
        type="number"
        required
        placeholder="Price of your artwork in euro..."
        v-model="price"
        class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 pb-3 px-4 block w-full appearance-none leading-normal"
      />

      <!-- Maße width -->
      <label class="mb-1">width</label>
      <input
        type="number"
        required
        placeholder="width of your artwork in cm..."
        v-model="height"
        class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 pb-3 px-4 block w-full appearance-none leading-normal"
      />

      <!-- Maße height -->
      <label class="mb-1">height</label>
      <input
        type="number"
        required
        placeholder="height of your artwork in cm..."
        v-model="width"
        class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 pb-3 px-4 block w-full appearance-none leading-normal"
      />

      <!-- select category -->
      <div class="field mt-2 mb-2">
        <label class="mb-1">category</label>
        <select
          class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 pb-3 px-4 block w-full appearance-none leading-normal"
          v-model="selected"
        >
          <option value="" disabled selected>Select your option</option>
          <option
            selected="category?"
            class=""
            v-for="option in options"
            :key="option.value"
            >{{ option.text }}
          </option>
        </select>
      </div>

      <button
        class="btn-full w-full rounded-full mt-4 place-self-auto"
        v-if="!isPending"
      >
        Post
      </button>
      <div v-else disabled class="w-full flex justify-center">
        <span class="save-icon">
          <span class="loader"></span>
          <span class="loader"></span>
          <span class="loader"></span>
        </span>
      </div>
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
    const price = ref("");
    const height = ref("");
    const width = ref("");
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
          price: price.value,
          height: height.value,
          width: width.value,
          userId: user.value.uid,
          userName: user.value.displayName,
          category: selected.value,
          coverUrl: url.value,
          filePath: filePath.value,
          createdAt: timestamp(),
        });
        isPending.value = false;
        if (!error.value) {
          router.push({ name: "PostDetail", params: { id: res.id } });
        }
      }
    };

    // Defines possible Category Inputs
    const options = ref([
      { text: "Photography", value: "A" },
      { text: "Illustration", value: "B" },
      { text: "Drawing", value: "C" },
      { text: "diverse", value: "D" },
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
      price,
      width,
      height,
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
