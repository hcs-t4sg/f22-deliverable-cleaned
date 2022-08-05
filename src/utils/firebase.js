// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyDnYXTrIyou5sVFQYqw1_s1Y3cEb9-0diw",
   authDomain: "t4sg-f22-deliv.firebaseapp.com",
   projectId: "t4sg-f22-deliv",
   storageBucket: "t4sg-f22-deliv.appspot.com",
   messagingSenderId: "507266397052",
   appId: "1:507266397052:web:8b3eefbbf5c6af78bceaf9",
   measurementId: "G-L6H014ZLGT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export default db;