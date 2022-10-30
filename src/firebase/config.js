import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

 // web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC8w0FGZiKVeIpchM1mlKt27Rune67g3pE",
    authDomain: "abschlusspruefung-2e825.firebaseapp.com",
    projectId: "abschlusspruefung-2e825",
    storageBucket: "abschlusspruefung-2e825.appspot.com",
    messagingSenderId: "398034314890",
    appId: "1:398034314890:web:f2d8a55d11f67ca11bef73"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }

