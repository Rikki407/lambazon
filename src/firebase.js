import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAy9COzFUSmJ_8x9gE8SAKTK2rBfUrtic8',
    authDomain: 'lambazon-407.firebaseapp.com',
    databaseURL: 'https://lambazon-407.firebaseio.com',
    projectId: 'lambazon-407',
    storageBucket: 'lambazon-407.appspot.com',
    messagingSenderId: '749228285061',
    appId: '1:749228285061:web:3f50c9dcb5af6ec6e7ddec',
    measurementId: 'G-KWE7RNT5H5',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
