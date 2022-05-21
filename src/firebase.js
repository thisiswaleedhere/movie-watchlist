
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyD8joQl8dDsGux_ubjbn_roy4KKjN6HEwM",
    authDomain: "first-rodeo-69c74.firebaseapp.com",
    projectId: "first-rodeo-69c74",
    storageBucket: "first-rodeo-69c74.appspot.com",
    messagingSenderId: "1837446952",
    appId: "1:1837446952:web:48302b2cc01243d98b421d",
    measurementId: "G-LSDNMMH83N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

