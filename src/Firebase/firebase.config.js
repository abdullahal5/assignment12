// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATfFMWj3UEW_GVGKoiPFkOG226nj3j7D4",
  authDomain: "react-firebase-auth-d544e.firebaseapp.com",
  projectId: "react-firebase-auth-d544e",
  storageBucket: "react-firebase-auth-d544e.appspot.com",
  messagingSenderId: "452596122531",
  appId: "1:452596122531:web:745a561185a87d0cc75016"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth