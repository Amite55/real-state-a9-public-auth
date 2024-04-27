import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from "../firebaseConfig";


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    console.log(user)


    const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const logOut = () => {
        setUser(null)
        return signOut(auth)
    }

    useEffect( ()=> {
        onAuthStateChanged(auth, (user)=> {
            if(user){
                setUser(user)
            }
        })
    },[])

    const authInfo = {
        user,
        createUser,
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