// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1TAYeKq8j8o3IEJNf-RSDAhgd-ooSLLs",
  authDomain: "localboost-f9623.firebaseapp.com",
  projectId: "localboost-f9623",
  storageBucket: "localboost-f9623.appspot.com",
  messagingSenderId: "280142981800",
  appId: "1:280142981800:web:14f14b0e634a7a9b0ef09d",
  measurementId: "G-32KDLSJJDK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase;