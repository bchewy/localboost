
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
