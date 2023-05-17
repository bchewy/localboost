// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnsrYyGZOYtoDrlRxlrMrg9HzylMN1ss4",
  authDomain: "fir-f15d4.firebaseapp.com",
  projectId: "fir-f15d4",
  storageBucket: "fir-f15d4.appspot.com",
  messagingSenderId: "1094258087495",
  appId: "1:1094258087495:web:fadae8abc2c8fe9d47c362"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);