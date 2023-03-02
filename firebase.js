// import firebase from "firebase";
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase;"

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

firebase.initializeApp({
    apiKey: "AIzaSyCdlblxCsDRGLk9F93pWyYEqh5VXnJoQho",
    authDomain: "clone-d65b3.firebaseapp.com",
    projectId: "clone-d65b3",
    storageBucket: "clone-d65b3.appspot.com",
    messagingSenderId: "328070253826",
    appId: "1:328070253826:web:dfc34d37001d4d8d63461b",
    measurementId: "G-KJ4TXBEN05"
});

const auth = firebase.auth();

export { auth };