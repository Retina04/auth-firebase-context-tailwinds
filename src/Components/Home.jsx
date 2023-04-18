import React, { useContext } from 'react';
import { authContext } from '../Providers/AuthProviders';

const Home = () => {
    const user =useContext(authContext)
    return (
        <div>
            <h1>This is home  {user && <small>{user.displayName}</small>}</h1>
        </div>
    );
};

export default Home;