import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAsRrI_i7qQQO7enjxir2ctKV1OR3qzFoE",
    authDomain: "clone-54242.firebaseapp.com",
    projectId: "clone-54242",
    storageBucket: "clone-54242.appspot.com",
    messagingSenderId: "672358727790",
    appId: "1:672358727790:web:a8ae041c0ea63055ef267f",
    measurementId: "G-7T8WYN81Y7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth}