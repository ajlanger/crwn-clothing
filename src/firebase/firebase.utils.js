import firebase from 'firebase/app';
import 'firebase/firestore'; //db
import 'firebase/auth'; //authentication

const config = {
    apiKey: "AIzaSyCTq9Iox0TVrjwOv1MtVX_L5ykHk14C5S4",
    authDomain: "crwn-db-52395.firebaseapp.com",
    projectId: "crwn-db-52395",
    storageBucket: "crwn-db-52395.appspot.com",
    messagingSenderId: "802762965275",
    appId: "1:802762965275:web:de584a707ff927ed2653be",
    measurementId: "G-6CR8VM0VQX"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;