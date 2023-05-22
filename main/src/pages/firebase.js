import firebase from "firebase/compat/app";
import { getStorage } from "firebase/storage";

// Initialize Firebase
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

export const app = firebase.initializeApp(firebaseConfig);

//export const storage = getStorage(app);
// Use Firebase services
// ...
