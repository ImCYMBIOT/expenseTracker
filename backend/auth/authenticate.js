// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD9OObhligbdeDQvVviVGRVvEc7vE9GlU",
  authDomain: "exp-tracker-1b271.firebaseapp.com",
  projectId: "exp-tracker-1b271",
  storageBucket: "exp-tracker-1b271.appspot.com",
  messagingSenderId: "648778148827",
  appId: "1:648778148827:web:53f1f855981c593e5c15fe",
  measurementId: "G-F1T2NGLP6M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);