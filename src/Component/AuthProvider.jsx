import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from "../firebaseConfig";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    console.log(user)

    
    const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
    }

    useEffect( ()=> {
        onAuthStateChanged(auth, (user)=> {
            if(user){
                setUser(user)
            }
        })
    },[])

    const authInfo = {
        createUser,
        signInUser,
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