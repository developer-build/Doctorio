// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa6q7TJa0739bpjSkTfbLABQWf_zrn_IY",
  authDomain: "doctorio-a6a0c.firebaseapp.com",
  projectId: "doctorio-a6a0c",
  storageBucket: "doctorio-a6a0c.appspot.com",
  messagingSenderId: "994869743118",
  appId: "1:994869743118:web:02af3a1dd2748c91fe765f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
