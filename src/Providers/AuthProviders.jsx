import React, { createContext, useState } from 'react';
export const authContext =createContext(null);
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/firebase.config';



const auth = getAuth(app);





const AuthProviders = ({children}) => {
    const [user , setUser ] =useState(null);

const createUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth ,email ,password)
}
const signIn =(email,password)=>{
    return signInWithEmailAndPassword(auth , email ,password)
}
    const authInfo = {
        user,
        createUser,
        signIn,
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}

        </authContext.Provider>
    );
};

export default AuthProviders;

