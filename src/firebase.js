import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyD2TYyMqBayAC_q9nD1tFk1tiaAsNZvNoo",
    authDomain: "unichat-de333.firebaseapp.com",
    projectId: "unichat-de333",
    storageBucket: "unichat-de333.appspot.com",
    messagingSenderId: "1110856922",
    appId: "1:1110856922:web:fdcf4a75484f914f1081e3"
  }).auth();