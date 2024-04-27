// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV77bHui-2M9DmFWxISOP7-zsj_rKIWrQ",
  authDomain: "real-state-auth-a9.firebaseapp.com",
  projectId: "real-state-auth-a9",
  storageBucket: "real-state-auth-a9.appspot.com",
  messagingSenderId: "1032555720833",
  appId: "1:1032555720833:web:7f9a03cfd88f06560bdd80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;