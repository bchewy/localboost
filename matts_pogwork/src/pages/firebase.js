import firebase from "firebase/compat/app";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDbfsx4MhDSAmRLznoQETMnpMlWKbMbGGs",
    authDomain: "demotest-6cff8.firebaseapp.com",
    projectId: "demotest-6cff8",
    storageBucket: "demotest-6cff8.appspot.com/",
    messagingSenderId: "603633691382",
    appId: "1:603633691382:web:12d706f23e67f9a81b5ad7"
};

export const app = firebase.initializeApp(firebaseConfig);

//export const storage = getStorage(app);
// Use Firebase services
// ...
