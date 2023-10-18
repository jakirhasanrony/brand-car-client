// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw8jqlvmrjrGUClSHg_3Iqrr5DQZ9GdDA",
  authDomain: "brand-car-client.firebaseapp.com",
  projectId: "brand-car-client",
  storageBucket: "brand-car-client.appspot.com",
  messagingSenderId: "939234787775",
  appId: "1:939234787775:web:73b4c331eeb61d45d3a10a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;