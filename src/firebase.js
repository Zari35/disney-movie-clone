
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
  apiKey: "AIzaSyCNLdkJBsBCVw_ZFJ0ACpq-ic5DT8VelMI",
  authDomain: "disney-clone-9824b.firebaseapp.com",
  projectId: "disney-clone-9824b",
  storageBucket: "disney-clone-9824b.appspot.com",
  messagingSenderId: "311894975780",
  appId: "1:311894975780:web:e837f168f146772ed03fb1",
  measurementId: "G-JG8JQ7XZB4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage};


export default db;



