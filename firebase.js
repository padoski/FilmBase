import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyBUo7bQHleidDlZsAUr6DdjCi9u_O_qooM",
  authDomain: "filmbase-2b93e.firebaseapp.com",
  databaseURL:
    "https://filmbase-2b93e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "filmbase-2b93e",
  storageBucket: "filmbase-2b93e.appspot.com",
  messagingSenderId: "657886593533",
  appId: "1:657886593533:web:eabe10c724f8cf27b7d994",
  measurementId: "G-RYPW57E16S",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

// const moviesDoc = await db
//   .collection("movies")
//   .doc("7DhDwNrxKXtmqjk5wZS4")
//   .get();

export { db, auth };
