// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf_HBEVOfAfNDaPNrucuPTr3xE_VaryxM",
  authDomain: "emajohn-router.firebaseapp.com",
  projectId: "emajohn-router",
  storageBucket: "emajohn-router.appspot.com",
  messagingSenderId: "262969145080",
  appId: "1:262969145080:web:4c31bfbd014b12a20c6d0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;