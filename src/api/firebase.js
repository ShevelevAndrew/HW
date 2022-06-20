import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCuCKM_UENk9hN1SQG22PvMTzc3wRx-WB8",
  authDomain: "gb-chat8-9f879.firebaseapp.com",
  databaseURL:
    "https://gb-chat8-9f879-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gb-chat8-9f879",
  storageBucket: "gb-chat8-9f879.appspot.com",
  messagingSenderId: "88122836510",
  appId: "1:88122836510:web:4523ff90dd1aa6237ad00f",
  measurementId: "G-2ZMV7T0DRL",
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebase);
export const auth = getAuth(firebase);
export const database = getDatabase(firebase);
