const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');

const firebaseConfig = {
    apiKey: "AIzaSyBxjWAggFb0uThJwJGOHC9uewW6T6Zxf6A",
    authDomain: "wesopt29-c077b.firebaseapp.com",
    projectId: "wesopt29-c077b",
    storageBucket: "wesopt29-c077b.appspot.com",
    messagingSenderId: "629430676032",
    appId: "1:629430676032:web:d05b632ea2eee354bacda5",
    measurementId: "G-CXWK6NH53R"
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

module.exports = { firebaseApp, firebaseAuth, firebaseConfig };
