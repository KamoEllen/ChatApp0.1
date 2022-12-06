import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCjPpMi_QvtINM9h_Jk5Q1e7i_4g9uWSk0",
    authDomain: "whatsapp1-945f0.firebaseapp.com",
    projectId: "whatsapp1-945f0",
    storageBucket: "whatsapp1-945f0.appspot.com",
    messagingSenderId: "174321710755",
    appId: "1:174321710755:web:0e3a0f67a4ff3337377116"
  };

  const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db ,auth, provider };
  