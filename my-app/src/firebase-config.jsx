import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBaK0DcKqbNCZoV6p1h4dghbpaHb43Vw6U",
  authDomain: "react-auth-khadim.firebaseapp.com",
  projectId: "react-auth-khadim",
  storageBucket: "react-auth-khadim.appspot.com",
  messagingSenderId: "1015123767739",
  appId: "1:1015123767739:web:070092f864e536a981549e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)