import React, { createContext, useEffect, useState } from 'react';
import FirebaseInstance, { FirebaseContext } from './config/firebase/Firebase'

export const AuthContext = createContext(null);

export const AuthProvider = (props) => {
    const [userState, setUserState] = useState(null);
    const [authPending, setAuthPending] = useState(true);

    useEffect(() => {
        return auth.onAuthStateChanged((userAuth) => {
            console.log(userAuth);
            setUserState(userAuth);
            setAuthPending(false);
        })
    }, [])

    if (authPending) {
        return (
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh"
            }}
            >
                <div>Authentication in progress</div>
            </div>
        )
    }

    return (
        <AuthContext.Provider value={{
            signIn: signIn,
            signUp: signUp,
            signOut: signOut,
            userState: userState
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}