import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyA3X2Bo3NJMyTq4uVly5jHl9mfrk-X7yyc",
    authDomain: "login-4e91e.firebaseapp.com",
    projectId: "login-4e91e",
    storageBucket: "login-4e91e.appspot.com",
    messagingSenderId: "660810232660",
    appId: "1:660810232660:web:100284ae668b1f8641cec1"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  
  export default fire;