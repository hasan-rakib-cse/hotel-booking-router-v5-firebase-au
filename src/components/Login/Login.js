import React, { useContext } from 'react';
import * as firebase from 'firebase/app'
import { initializeApp } from "firebase/app";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from './firebase.config';

const Login = () => {

    const app = initializeApp(firebaseConfig);

    const handleGoogleSignIn = () => {
        
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        
        signInWithPopup(auth, provider)
        .then((result) => {
            const {displayName, email} = result.user;
            const signInUser = {name: displayName, email: email}
            console.log(signInUser)

        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
    }

    return (
        <div>
            <h1>This is Login</h1>
            <button onClick={handleGoogleSignIn}>Google Sign in</button>
        </div>
    );
};

export default Login;