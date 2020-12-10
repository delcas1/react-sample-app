
import * as firebase from 'firebase';
//import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAPTW4qkslTbUyt4GrHedyWnc7rRgqymtM",
  authDomain: "sdc-auth.firebaseapp.com",
  databaseURL: "https://sdc-auth-default-rtdb.firebaseio.com",
  projectId: "sdc-auth",
  storageBucket: "sdc-auth.appspot.com",
  messagingSenderId: "895428822879",
  appId: "1:895428822879:web:70e75749ca6de959f198ea",
  measurementId: "G-YZ7GJHMHCX"
};

firebase.default.initializeApp(config);

 

firebase.default.database().ref().set({
    name: 'sdc',
    age: '3432',
    location: 'mars',
    ocupation: 'sdevec',
    isTrueALie: false
});


 
