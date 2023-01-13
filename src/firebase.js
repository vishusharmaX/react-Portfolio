// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCavqb6wpLVCl8swhB61yMUiOwjAueToeQ",
  authDomain: "vishu-firbase.firebaseapp.com",
  projectId: "vishu-firbase",
  storageBucket: "vishu-firbase.appspot.com",
  messagingSenderId: "121901912727",
  appId: "1:121901912727:web:024900c72f4ddc26e04fd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db =getFirestore()