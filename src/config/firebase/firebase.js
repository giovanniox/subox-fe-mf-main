import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import React, { createContext } from 'react';

const FbConfig = {
    apiKey: "AIzaSyDwn6jQohhh-mv0F8zmxAgvtySkKUMzMjw",
    authDomain: "subox-7a2f8.firebaseapp.com",
    projectId: "subox-7a2f8",
    storageBucket: "subox-7a2f8.appspot.com",
    messagingSenderId: "202925574870",
    appId: "1:202925574870:web:0746df019a8c771a659777",
    measurementId: "G-SYKB2DWYKL"
}


class Firebase {
    constructor() {
        console.log(!firebase.apps.length);
        if (!firebase.apps.length) firebase.initializeApp(FbConfig)
        this.auth = firebase.auth();
    }

    signIn = (values) => {
        const { email, password } = values
        return this.auth.signInWithEmailAndPassword(email, password);
    }

     signUp = async (values) => {
        const { email, password, userName } = values
        const newUser = await this.auth().createUserWithEmailAndPassword(email, password)
        return newUser.user.updateProfile({
            displayName: "Jane Q. User",
            photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(function() {
            // Update successful.
          }).catch(function(error) {
            // An error happened.
          });

    }

    signOut = () => this.auth.signOut();


}

const firebaseInstance = new Firebase()
const FirebaseContext = createContext(null)

export { FirebaseContext }
export default firebaseInstance
