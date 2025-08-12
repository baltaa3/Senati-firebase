
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";
import { getAuth,googleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyAxUfZqPlHSCa21vn_tAiubwj761lMYU3Y",
    authDomain: "logind-e6de0.firebaseapp.com",
    projectId: "logind-e6de0",
    storageBucket: "logind-e6de0.firebasestorage.app",
    messagingSenderId: "400490442127",
    appId: "1:400490442127:web:a3547c157c366700316ffa",
    measurementId: "G-V1Z4KSX1S7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
auth.languageCode = 'es';
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById('google-login-btn');
googleLogin.addEventListener('click', function(){
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    console.log(user);
    windown.locate.href = "https://www.google.com"

    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
});

    // el javascriptdebe ser tipo typemodule