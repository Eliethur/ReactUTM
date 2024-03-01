// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqPxRItRSrwyPNHLH02nE3GXHaOmY2LPc",
    authDomain: "practicamovil-f2b28.firebaseapp.com",
    projectId: "practicamovil-f2b28",
    storageBucket: "practicamovil-f2b28.appspot.com",
    messagingSenderId: "72492031314",
    appId: "1:72492031314:web:698047780557a9cb806e8b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export { firebaseApp };
