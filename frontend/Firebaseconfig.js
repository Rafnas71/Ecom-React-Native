// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYLhx7OVKl4yhHzqcQ_wyOOLwIuKPRODc",
  authDomain: "ecom-app-a7397.firebaseapp.com",
  projectId: "ecom-app-a7397",
  storageBucket: "ecom-app-a7397.appspot.com",
  messagingSenderId: "117702960896",
  appId: "1:117702960896:web:c80ef87bb19f769071f5e5",
  measurementId: "G-Z3F8VJF6W1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth =getAuth(app);
const db = getFirestore();
export {Auth,db};