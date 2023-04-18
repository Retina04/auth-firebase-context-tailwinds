import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../Providers/AuthProviders";

const Header = () => {
 
  const {user , loggedOut}=useContext(authContext)
  const handleLogOut=()=>{
    loggedOut()
    .then(()=>{})
    .catch(error =>{
      console.error(error)
    })
  }
  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content">
        <a className="btn btn-ghost normal-case text-xl me-8">Auth Master</a>
        <Link className="me-10" to="/">Home</Link>
        <Link className="me-8" to="/login">Login</Link>
        <Link className="me-8" to="/register">Register</Link>
        {
          user ?
          <> <span>{user.email}</span>
          <button
          onClick={handleLogOut}
           className="btn btn-xs">SignOut</button>
           </>
          : <Link to='/login'>Login</Link>

        }
      </div>
    </div>
  );
};

export default Header;
