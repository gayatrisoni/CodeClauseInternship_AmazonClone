import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBvuo9DXOHIBMfl2Ty03N7KjGb9HBraQYU",
    authDomain: "amz-clone-166dc.firebaseapp.com",
    projectId: "amz-clone-166dc",
    storageBucket: "amz-clone-166dc.appspot.com",
    messagingSenderId: "265200651964",
    appId: "1:265200651964:web:493c776fd1d6b34935cab9",
    measurementId: "G-XEKRR03SWN"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };