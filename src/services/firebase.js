import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCEYilKgZzP0PFpM5v_Jc53YnRC3bQqHLA",

    authDomain: "react-shop-377d5.firebaseapp.com",

    projectId: "react-shop-377d5",

    storageBucket: "react-shop-377d5.appspot.com",

    messagingSenderId: "644549057595",

    appId: "1:644549057595:web:3a5705d848d4682b6ed01e",

    measurementId: "G-BGN89JDBV7"

};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Get a reference to the storage service
const storage = firebase.storage();

export { storage, firebase };