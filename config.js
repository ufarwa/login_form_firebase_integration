
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBDxVZ1hzKJDii06xzSeMZkG2pntXsFHGY",
    authDomain: "form-authentication-6cf8f.firebaseapp.com",
    projectId: "form-authentication-6cf8f",
    storageBucket: "form-authentication-6cf8f.appspot.com",
    messagingSenderId: "553331210603",
    appId: "1:553331210603:web:46a99e6b8cacd33786342e",
    measurementId: "G-1CMXPZNCK9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
export {app}