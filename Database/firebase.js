//import * as firebase from "firebase";
import firebase from 'firebase/compact/app';
import 'firebase/compact/auth';
import 'firebase/compact/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAIkuN024Q2rM-JC1tmFqCjtfyEpmup0Z4",
    authDomain: "login-ad6a5.firebaseapp.com",
    projectId: "login-ad6a5",
    storageBucket: "login-ad6a5.appspot.com",
    messagingSenderId: "309012340596",
    appId: "1:309012340596:web:4948a3f43f0c35c9c15621",
    measurementId: "G-B6X06GCEE1"
};

let app;
if(firebase.app.length ==0 ){
    app = firebase.initializeApp(firebaseConfig);
}
else{
    app = firebase.app();
}

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth( );

export default {auth};
  