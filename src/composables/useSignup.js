import { ref } from "vue";
import { projectAuth } from "../firebase/config";
import { projectFirestore } from "../firebase/config";

// refs & signup outside of exported function
// they don't need to be re-created every time we invoke useSignup
const error = ref(null);
const isPending = ref(false);

// Create a new User and sign him up with the input he filled in
const signup = async (email, password, displayName, style, grid) => {
  error.value = null;
  isPending.value = true;

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!res) {
      throw new Error("Could not complete signup");
    }
    await projectFirestore
      .collection("users")
      .doc(res.user.uid)
      .set({ style, displayName, grid });
    await res.user.updateProfile({ displayName });
    error.value = null;
    isPending.value = false;
    return res;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
    isPending.value = false;
  }
};

const useSignup = () => {
  return { error, signup, isPending };
};

export default useSignup;
