import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState("");

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const update = (name, url) => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: url

        });
        location.reload()
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const HandleGoogleRegi = () => {
        setErr('');
        return signInWithPopup(auth, googleProvider)
    }

    const HandleGoogle = () => {
        setErr('');
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo = {
        user,
        createUser,
        update,
        login,
        logOut,
        HandleGoogleRegi,
        HandleGoogle,
        err,
        setErr
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;