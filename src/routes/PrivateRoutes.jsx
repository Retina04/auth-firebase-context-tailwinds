import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../Providers/AuthProviders';

const PrivateRoutes = ({children}) => {
    const {user ,loading} =useContext(authContext)
    if(loading){
        return <progress className="progress progress-accent w-56" value="0" max="100"></progress>
    }
    if(user){
        return children;
    }
    return (
        <Navigate to='/login' replace={true}></Navigate>
    )
};

export default PrivateRoutes;