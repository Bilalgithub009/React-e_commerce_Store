import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth , onAuthStateChanged, createUserWithEmailAndPassword , signOut } from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyAMdZ89uFYIlK6rUV7lVKIKPqPGbGtiVc0",
  authDomain: "react-e-commerce-web-edde3.firebaseapp.com",
  projectId: "react-e-commerce-web-edde3",
  storageBucket: "react-e-commerce-web-edde3.appspot.com",
  messagingSenderId: "838554560",
  appId: "1:838554560:web:24e2da63da642f75476e25",
  measurementId: "G-EPKQHSBED8"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// console.log(auth)


onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log("user is login")
    // ...
  } else {
    // User is signed out
    // ...
    console.log("user is not login")

  }
});




export {app,auth, signOut }
