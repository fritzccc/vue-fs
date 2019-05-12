import firebase from 'firebase/app';
import 'firebase/firestore';

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDPZlYjJMWYzHgwvRpW6QquG2XIVn-qFfo",
  authDomain: "vuefs-dev-123.firebaseapp.com",
  databaseURL: "https://vuefs-dev-123.firebaseio.com",
  projectId: "vuefs-dev-123",
  storageBucket: "vuefs-dev-123.appspot.com",
  messagingSenderId: "528294835659",
  appId: "1:528294835659:web:bcc0dc23d049344a"
});

// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();
export default db;