// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf_rchyx5J5B8R9V1Plhcwyfz4sdM8mBI",
  authDomain: "jgallery-4b9b8.firebaseapp.com",
  databaseURL: "https://jgallery-4b9b8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jgallery-4b9b8",
  storageBucket: "jgallery-4b9b8.appspot.com",
  messagingSenderId: "733385071918",
  appId: "1:733385071918:web:7bd10653e2ecbbf66f6ebf",
  measurementId: "G-C3D9C7Y759"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getDatabase(app);