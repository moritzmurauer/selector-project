//Ähnlich wie Thrillseeker Project

import { projectStorage } from '../firebase/config'
import { ref } from "vue"
import getUser from "./getUser"

const { user } = getUser()

const useStorage = () => {
  const error = ref(null)
  const url = ref(null)
  const filePath = ref(null)

  // image gets uploaded
  const uploadImage = async (file) => {
    filePath.value = `covers/${user.value.uid}/${file.name}`
    const storageRef = projectStorage.ref(filePath.value)

    try {
      const res = await storageRef.put(file)
      url.value = await res.ref.getDownloadURL()
    } catch (err) {
      console.log(err.message)
      error.value = err
    }
  }

  // deleting an image function
  const deleteImage = async (path) => {
    const storageRef = projectStorage.ref(path);

    try {
      await storageRef.delete()
    } catch (err) {
      console.log(err.message)
      error.value = err
    }
  }

  return { uploadImage, deleteImage, url, filePath, error }
}

export default useStorage;