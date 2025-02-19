firebase-config.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJUK6admlQzx_JdB9XcVeyMq4hE3JQ3f8",
  authDomain: "rapid-40c97.firebaseapp.com",
  projectId: "rapid-40c97",
  storageBucket: "rapid-40c97.firebasestorage.app",
  messagingSenderId: "504675237315",
  appId: "1:504675237315:web:bbcaa0baaba15db2705176",
  measurementId: "G-5CL3QSJLVF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

// Example function to add data to Firestore
async function addData() {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: "Ada Lovelace",
      age: 30,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// Call the function to add data (you can trigger this in your app logic)
addData();
