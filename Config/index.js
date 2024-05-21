


  // Import the functions you need from the SDKs you need
import app from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBctRAXdawwYDYtT0Xaq-A2_W4bNgBorAU",
    authDomain: "whatsapp-c51ca.firebaseapp.com",
    databaseURL: "https://whatsapp-c51ca-default-rtdb.firebaseio.com",
    projectId: "whatsapp-c51ca",
    storageBucket: "whatsapp-c51ca.appspot.com",
    messagingSenderId: "1001154620032",
    appId: "1:1001154620032:web:e0d7b3e1ba34e8e2ee5465",
    measurementId: "G-D3C3VXW1E1"
  };

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);
export default firebase;