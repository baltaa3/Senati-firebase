
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAxUfZqPlHSCa21vn_tAiubwj761lMYU3Y",
    authDomain: "logind-e6de0.firebaseapp.com",
    projectId: "logind-e6de0",
    storageBucket: "logind-e6de0.firebasestorage.app",
    messagingSenderId: "400490442127",
    appId: "1:400490442127:web:a3547c157c366700316ffa",
    measurementId: "G-V1Z4KSX1S7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
