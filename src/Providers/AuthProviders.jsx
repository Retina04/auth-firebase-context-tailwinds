import React, { createContext, useEffect, useState } from 'react';
export const authContext =createContext(null);
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';



const auth = getAuth(app);





const AuthProviders = ({children}) => {
    const [user , setUser ] =useState(null);
    const [loading , setLoading] =useState(true)

const createUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth ,email ,password)
}
const signIn =(email,password)=>{
    return signInWithEmailAndPassword(auth , email ,password)
}
const loggedOut =()=>{
   return signOut(auth)
}
//observe auth state change
useEffect(()=>{
  const unSubscribe=  onAuthStateChanged(auth , currentUser=>{
        console.log('auth state change ',currentUser);
        setUser(currentUser);
        setLoading(false)
    })
    return()=>{
        unSubscribe();
    }
},[])
    const authInfo = {
        user,
        createUser,
        signIn,
        loggedOut,
        loading,
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}

        </authContext.Provider>
    );
};

export default AuthProviders;

