// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyB-L9gso6sVGQ4OtV2CMvy_4ihfkyIr8ck",
	authDomain: "projekto-7f837.firebaseapp.com",
	projectId: "projekto-7f837",
	storageBucket: "projekto-7f837.appspot.com",
	messagingSenderId: "444801350385",
	appId: "1:444801350385:web:c3a997c2ac963d43100750",
	measurementId: "G-GQE98KYX9W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;
