// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyD_VjINjfCHHulwFyyB8l-n6XlKdUHt5Bw",

  authDomain: "tau-flashcards.firebaseapp.com",

  projectId: "tau-flashcards",

  storageBucket: "tau-flashcards.appspot.com",

  messagingSenderId: "358208856769",

  appId: "1:358208856769:web:e741b7b48a660c9e88aa40",

  measurementId: "G-CKTNQ8JCEE"

};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);