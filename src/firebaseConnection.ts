import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

let firebaseConfig = {
  apiKey: "AIzaSyBNWmJ7j_yKZIJ3Fl0tXLvCNfZUG9JJyEI",
  authDomain: "architecture-9c40c.firebaseapp.com",
  projectId: "architecture-9c40c",
  storageBucket: "architecture-9c40c.appspot.com",
  messagingSenderId: "258901220204",
  appId: "1:258901220204:web:7213bfb18e7cb04b26b149",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase;
