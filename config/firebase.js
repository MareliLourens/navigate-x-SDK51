// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; //setup authentication
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs14NFZJTBV5I7wxM4Z7dND5ExakJYqFw",
  authDomain: "class-work-2d953.firebaseapp.com",
  projectId: "class-work-2d953",
  storageBucket: "class-work-2d953.appspot.com",
  messagingSenderId: "601529970867",
  appId: "1:601529970867:web:59d52ebde39d52a1f380c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); //exporting our auth capabilities
