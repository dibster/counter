'use strict';

const firebase = require("firebase");
firebase.initializeApp({
  serviceAccount: "../../keys/Counter-2c3977a8ae65.json",
  databaseURL: "https://counter-3baf2.firebaseio.com/"
});


const email = "dave_ashenhurst@hotail.com";
const password = "qwpeoi123098";
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          console.error(error);
        }
        // [END_EXCLUDE]
      });
