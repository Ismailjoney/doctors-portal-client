import React, {  createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthorContext = createContext()
const auth = getAuth(app);

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singUp = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth ,email, password)
    }

    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }

    const logout = () => {
        localStorage.removeItem('userToken')
        setLoading(true)
        return signOut(auth)
    }

    useEffect ( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            //user jkn set hye jabe tkn r loading hbe na
            setLoading(false)
        })
        return () => unsubscribe()
    },[])


    const authInfo = {
        createUser,
        singUp,
        user,
        updateUser,
        logout,
        loading
    }
    return (
        <AuthorContext.Provider value={authInfo}>
            {children}
        </AuthorContext.Provider>
    );
};

export default ContextProvider;