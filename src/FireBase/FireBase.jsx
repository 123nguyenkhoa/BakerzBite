import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDQ2B_I6nM1s38-6fh9-OjeFem8l-cETF8",
  authDomain: "khoa456-5d322.firebaseapp.com",
  projectId: "khoa456-5d322",
  storageBucket: "khoa456-5d322.appspot.com",
  messagingSenderId: "881034810406",
  appId: "1:881034810406:web:ddb6ea04c39cd4986502e7",
  measurementId: "G-J51EK0G7DC",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export {
  auth,
  googleProvider,
  facebookProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  analytics,
};
