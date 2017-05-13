import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCVEDc894H9URkb7eMT0OOFLi7ZTFe_O64",
  authDomain: "react-redux-env.firebaseapp.com",
  databaseURL: "https://react-redux-env.firebaseio.com",
  projectId: "react-redux-env",
  storageBucket: "react-redux-env.appspot.com",
  messagingSenderId: "92738569373"
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;