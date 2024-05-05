import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"; // Import getStorage
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Define getReactNativePersistence function
const getReactNativePersistence = (storage) => {
  // Implement the persistence mechanism here
  return null; // For example, return 'local' or 'session'
};

const firebaseConfig = {
  //   apiKey: "AIzaSyDQa43QukLrFMqbX0iiLWZbnozchjBz8Oo",
  //   authDomain: "firstpro-c93e8.firebaseapp.com",
  //   projectId: "firstpro-c93e8",
  //   storageBucket: "firstpro-c93e8.appspot.com",
  //   messagingSenderId: "984624672033",
  //   appId: "1:984624672033:web:d66b70d67a04cb4370a260",
  //   measurementId: "G-VHB9Z36FSW",

  apiKey: "AIzaSyBiwFMH90jrn5e9mLUnnWu-BR2wPXRP95s",
  authDomain: "project-d8063.firebaseapp.com",
  projectId: "project-d8063",
  storageBucket: "project-d8063.appspot.com",
  messagingSenderId: "621886595684",
  appId: "1:621886595684:web:cc831d9ba67bb0e2a8f571",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize authentication
const firestore = getFirestore(app); // Initialize Firestore

export { auth, firestore };
