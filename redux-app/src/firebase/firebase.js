import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAoyW5bbhE4zqYxWX1W3V2335Q2W72Ywqw",
    authDomain: "redux-deneme.firebaseapp.com",
    projectId: "redux-deneme",
    storageBucket: "redux-deneme.appspot.com",
    messagingSenderId: "789124596180",
    appId: "1:789124596180:web:2d4957365b17ae9f881641",
    measurementId: "G-KH2ND3MF3E"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()

  export default db