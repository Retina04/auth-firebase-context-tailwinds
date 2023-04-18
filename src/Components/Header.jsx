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
        <a className="btn btn-ghost normal-case text-xl me-5">Auth Master</a>
        <Link className="me-5" to="/">Home</Link>
        <Link className="me-5" to="/login">Login</Link>
        <Link className="me-5" to="/register">Register</Link>
        <Link className="me-5" to="/orders">Orders</Link>
        {/* login korle profile dekhabe */}
      {user &&   <Link className="me-5" to="/profile">Profile</Link>}
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
