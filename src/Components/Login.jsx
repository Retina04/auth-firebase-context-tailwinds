import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../Providers/AuthProviders";

const Login = () => {



  const { signIn} =useContext(authContext)
    const handleLogin =event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email , password)
        .then(result=>{
          const loggedUser = result.loggedUser;
          form.reset();
          console.log(loggedUser);
        })
        .catch(error=>{
          console.log(error);
        })

    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-7">Please Login !</h1>
         
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <label className="label m-auto mb-8  ">
                <Link to='/register' className="label-text-alt link link-hover">
                New to AuthMaster?Please Register
                </Link>
              </label>
            
        </div>
      </div>
    </div>
  );
};

export default Login;
