

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
   apiKey: "AIzaSyBIbhgHwopa6dQZix8Q2S0w1uR5nwv2g7I",
  authDomain: "netflix-clone-a1953.firebaseapp.com",
  projectId: "netflix-clone-a1953",
  storageBucket: "netflix-clone-a1953.appspot.com",
  messagingSenderId: "645941996519",
  appId: "1:645941996519:web:f82bcb892cd30b28a92b42"
};

const firebaseApp =firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db