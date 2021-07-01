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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return ;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        console.log("snapShot doesn't exist");
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({ //.set is the create method
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("Error creating user", error.message);
        }
    } else {
        console.log("snapShot does exist");
    }
    
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;