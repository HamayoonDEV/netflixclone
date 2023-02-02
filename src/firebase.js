

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDvoueWQJEqQXvvEhEiHuUx53W_NTEbGoY",
    authDomain: "netflix-clone-aa0a3.firebaseapp.com",
    projectId: "netflix-clone-aa0a3",
    storageBucket: "netflix-clone-aa0a3.appspot.com",
    messagingSenderId: "888491036615",
    appId: "1:888491036615:web:e90c3f3dd1ddf7f26593e2"
};

const firebaseApp =firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db