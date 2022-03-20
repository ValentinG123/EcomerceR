// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxZ9PruIDdUz6cKGDRY_p58RwEOMztvzI",
  authDomain: "ecomerce-fd14a.firebaseapp.com",
  projectId: "ecomerce-fd14a",
  storageBucket: "ecomerce-fd14a.appspot.com",
  messagingSenderId: "69150336942",
  appId: "1:69150336942:web:b9236eda75c02a7cb2ca3f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp