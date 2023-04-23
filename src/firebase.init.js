// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDLJXAMSrHuCf9Dh45F_MFYSVi6ucZ6HCE",
    authDomain: "akacoin-8bd78.firebaseapp.com",
    projectId: "akacoin-8bd78",
    storageBucket: "akacoin-8bd78.appspot.com",
    messagingSenderId: "228825178808",
    appId: "1:228825178808:web:78f34214255499f4960a4d",
    measurementId: "G-ZZSRVJLD8W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);