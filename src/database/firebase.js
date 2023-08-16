import firebase from 'firebase/app';
import "firebase/firestore";
 
const firebaseConfig = {
    apiKey: "AIzaSyBYQSRooGtltqsc1hYRXSaNMc-3EARW8ZU",
  authDomain: "siam-remote-iot-e288c.firebaseapp.com",
  projectId: "siam-remote-iot-e288c",

  storageBucket: "siam-remote-iot-e288c.appspot.com",
  messagingSenderId: "1075099355679",
  appId: "1:1075099355679:web:23ecb5dbe06ceb0057632a"
};

 const firebaseApp = firebase.initializeApp(firebaseConfig);
 export default firebaseApp.firestore();