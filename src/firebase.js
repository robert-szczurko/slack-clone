import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCb10RfWSId47hEaKQrY6lEzT-izLu-f9g",
  authDomain: "slack-clone-1d566.firebaseapp.com",
  projectId: "slack-clone-1d566",
  storageBucket: "slack-clone-1d566.appspot.com",
  messagingSenderId: "920252877894",
  appId: "1:920252877894:web:044a3adbca541c17a3ce47",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
