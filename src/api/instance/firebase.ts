import firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD_2f2tzECmVxvZA__XjxSA7n7cW2J_olQ",
    authDomain: "zikiza.firebaseapp.com",
    projectId: "zikiza",
    storageBucket: "zikiza.appspot.com",
    messagingSenderId: "575132232397",
    appId: "1:575132232397:web:298a1b03917a684b655784",
    measurementId: "G-Z8JL1T5RN0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
