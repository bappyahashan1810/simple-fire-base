// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCeIT7wlI1BYPliak4LvX6wMOc1wF9-6Bw",
    authDomain: "simple-fire-base-auth.firebaseapp.com",
    projectId: "simple-fire-base-auth",
    storageBucket: "simple-fire-base-auth.appspot.com",
    messagingSenderId: "135532695670",
    appId: "1:135532695670:web:49d2b7887146d5423e4f57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;