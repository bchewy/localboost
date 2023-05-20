// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1TAYeKq8j8o3IEJNf-RSDAhgd-ooSLLs",
  authDomain: "localboost-f9623.firebaseapp.com",
  databaseURL: "https://localboost-f9623-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "localboost-f9623",
  storageBucket: "localboost-f9623.appspot.com",
  messagingSenderId: "280142981800",
  appId: "1:280142981800:web:25847523674a98600ef09d",
  measurementId: "G-K8MTLCTCZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);