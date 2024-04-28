import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from "../firebaseConfig";


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    console.log(user)

    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password);
    }

    // update profile
    const updateUserProfile = (name, image ) => {
       return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: image
       })
    }

    const signInUser = (email, password) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    const logOut = () => {
        setLoading(true)
        setUser(null)
        return signOut(auth)
    }

    useEffect( ()=> {

        const unsubscribe = onAuthStateChanged(auth, (user)=> {
            setLoading(false)
            if(user){
                setUser(user)
            }
        })
        return () => unsubscribe();
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        updateUserProfile,
        signInUser,
        googleLogin,
        githubLogin,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes ={
    children: PropTypes.object,
}