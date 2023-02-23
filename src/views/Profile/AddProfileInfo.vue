<template>
  <form class="mt-8 mb-8 bg-slate-100" @submit.prevent="handleSubmit">
    <h1 class="text-center mb-3">Let the community know who you are!</h1>

    <div
      class="grid place-items-center bg-white border border-black rounded-lg place-content-center p-4"
    >
      <div
        class="mt-2 bg-slate-200 p-4 shadow-lg border border-primary rounded-lg"
        v-if="userInfo"
      >
        <img
          class="avatar"
          v-if="userInfo.avatarUrl"
          :src="userInfo.avatarUrl"
        />
        <img
          class="avatar"
          v-if="!userInfo.avatarUrl"
          src="@/assets/default.png"
        />
      </div>

      <label class="custom-file-upload">
        <input type="file" @change="handleChange" />
        <h4><i class="far fa-file-image"></i> update your avatar</h4>
      </label>
    </div>
    <p v-if="formError" class="error">{{ formError }}</p>
    <small class="file-name" v-if="file">{{ file.name }}</small>

    <div>
      <div v-if="userInfo" class="field">
        <label for="bio">Biography</label>
        <input
          v-model="userInfo.bio"
          required
          placeholder="Tell us something about yourself!"
          type="textarea"
          class="bg-white focus:outline-none focus:shadow-outline border border-primary rounded-lg py-2 pb-24 px-4 block w-full appearance-none leading-normal"
        />
      </div>
    </div>

    <div>
      <div v-if="userInfo" class="field">
        <label for="website">Website</label>
        <input
          type="textarea"
          placeholder="Your website"
          required
          v-model="userInfo.website"
          class="bg-white focus:outline-none focus:shadow-outline border border-primary-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        />
      </div>
    </div>

    <!-- select category -->
    <div class="field mt-2 mb-2">
      <label class="mb-1">Profile Grid</label>
      <select
        class="bg-white focus:outline-none focus:shadow-outline border border-black rounded-lg py-2 pb-3 px-4 block w-full appearance-none leading-normal"
        v-model="selected"
      >
        <option value="" disabled selected>Select your option</option>
        <option
          selected="selected"
          class=""
          v-for="option in options"
          :key="option.value"
          >{{ option.text }}
        </option>
      </select>
    </div>

    <div class="error"></div>

    <button
      v-if="!isPending"
      class="btn-full text-center w-full rounded-full mt-4"
    >
      Update Info
    </button>
    <div v-else disabled class="w-full flex justify-center">
      <span class="save-icon">
        <span class="loader"></span>
        <span class="loader"></span>
        <span class="loader"></span>
      </span>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import useStorage from "@/composables/useStorage";
import useDocument from "@/composables/useDocument";
import getUser from "@/composables/getUser";
import getDocument from "@/composables/getDocument";
import { useRouter } from "vue-router";

export default {
  setup() {
    const { user } = getUser();
    const { url, filePath, uploadProfilePicture } = useStorage();
    const { document: userInfo } = getDocument("users", user.value.uid);
    const { error, updateDoc } = useDocument("users", user.value.uid);

    console.log(user.value.uid);

    const router = useRouter();

    const bio = ref("");
    const website = ref("");
    const file = ref(null);
    const fileError = ref(null);
    const isPending = ref(false);
    var formError = ref(null);

    const options = ref([
      { text: "Triple Grid", value: "A" },
      { text: "Double Grid", value: "B" },
      { text: "Single Grid", value: "C" },
    ]);

    const selected = ref("");
    //const checkedCategory = ref([])

    const handleSubmit = async () => {
      if (!file.value) {
        formError.value = "missing photo";
        return;
      }
      if (file.value) {
        isPending.value = true;

        await uploadProfilePicture(file.value);
        const res = await updateDoc({
          bio: userInfo.value.bio,
          website: userInfo.value.website,
          profileId: user.value.uid,
          avatarUrl: url.value,
          grid: selected.value,
          filePath: filePath.value,
        });

        console.log(res);

        isPending.value = false;
        if (!error.value) {
          console.log("Info updated");
          router.push({ name: "UserPosts", params: { id: user.value.uid } });
        }
      }
    };

    //allowed file types

    const types = ["image/png", "image/jpeg"];

    const handleChange = (event) => {
      const selected = event.target.files[0];
      formError.value = null;
      console.log(selected);

      if (selected && types.includes(selected.type)) {
        file.value = selected;
        fileError.value = null;
      } else {
        file.value = null;
        fileError.value = "Please select an image file (png or jpeg)";
      }
    };

    return {
      bio,
      website,
      file,
      handleSubmit,
      handleChange,
      fileError,
      isPending,
      userInfo,
      formError,
      options,
      selected,
    };
  },
};
</script>

<style scoped>
.category input {
  padding: 0;
  margin: 0;
  display: flex;
  width: 100%;
}

.category-field {
  margin-right: 25px;
}

.avatar {
  width: 35px;
  height: 35px;
}

.category {
  margin-bottom: 50px;
  border: 1px solid rgba(128, 128, 128, 0.609);
  border-radius: 20px;
  padding: 10px;
  display: flex;
}

.category-headline {
  margin-bottom: 10px;
}

textarea {
  height: 200px;
}

.field {
  margin: 30px 0;
}

input {
  margin: 0 !important;
}

input[type="file"] {
  display: none;
}

.custom-file-upload {
  border: 1px solid #ccc;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
  margin: 10px 0;
}

.file-name {
  display: block;
  color: rgb(255, 115, 0);
}

.save-icon {
  position: relative;
  border: 1px solid var(--primary);
  background: white;
  height: 40px;
  width: 35px;
  display: block;
  padding-top: 10px;

  -moz-border-radius: 3px;
  border-radius: 3px;
}

.save-icon:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  border-width: 0 10px 10px 0;
  border-style: solid;
  border-color: #a4a6a7 #3c4145;
}

.save-icon:after {
  content: "✓";
  color: var(--primary);
  font-size: 30px;
  position: absolute;
  top: 15%;
  left: 20%;
  -webkit-transform: scale(0);
  -moz-transform: scale(0);
  transform: scale(0);

  -webkit-animation: pop 0.5s 3s forwards;
  -moz-animation: pop 0.5s 3s forwards;
  animation: pop 0.5s 3s forwards;
}

.loader {
  background: #e2e2e2;
  width: 80%;
  height: 5px;
  display: block;
  margin: 3px auto;

  position: relative;
  overflow: hidden;

  -webkit-animation: fade-loaders 0.2s 3s forwards;
  -moz-animation: fade-loaders 0.2s 3s forwards;
  animation: fade-loaders 0.2s 3s forwards;
}

.loader:after {
  content: "";
  background: #2c3033;
  width: 0;
  height: 5px;
  position: absolute;
  top: 0;
  left: 0;
}

.loader:first-child:after {
  -webkit-animation: loader 0.4s 1s forwards;
  -moz-animation: loader 0.4s 1s forwards;
  animation: loader 0.4s 1s forwards;
}

.loader:nth-child(2n):after {
  -webkit-animation: loader 0.4s 1.5s forwards;
  -moz-animation: loader 0.4s 1.5s forwards;
  animation: loader 0.4s 1.5s forwards;
}

.loader:nth-child(3n):after {
  -webkit-animation: loader 0.4s 2s forwards;
  -moz-animation: loader 0.4s 2s forwards;
  animation: loader 0.4s 2s forwards;
}

@-webkit-keyframes loader {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
@-moz-keyframes loader {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
@keyframes loader {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

@-webkit-keyframes pop {
  0% {
    -webkit-transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
  }
}
@-moz-keyframes pop {
  0% {
    -moz-transform: scale(0);
  }
  100% {
    -moz-transform: scale(1);
  }
}
@keyframes pop {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

@-webkit-keyframes fade-loaders {
  0% {
    opactity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-moz-keyframes fade-loaders {
  0% {
    opactity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes fade-loaders {
  0% {
    opactity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
