import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyC-Wd2bFjejwh3R0i4ad_r9Gl1EJX8Y_60",
    authDomain: "akatsuki-portfolio.firebaseapp.com",
    projectId: "akatsuki-portfolio",
    storageBucket: "akatsuki-portfolio.firebasestorage.app",
    messagingSenderId: "312738868596",
    appId: "1:312738868596:web:b6d4e652b4cdc79ad59021",
    measurementId: "G-9B4KKT8ZBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
