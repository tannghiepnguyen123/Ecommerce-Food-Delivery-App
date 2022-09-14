import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { createContext, useState, useEffect } from "react";
import { useContext } from "react";
import { auth } from "../firebase";

const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return () => unsubscribe
    }, [])
    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function signin(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }
    function signout() {
        return signOut(auth)
    }
    const value = {
        currentUser,
        signup,
        signin,
        signout
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}