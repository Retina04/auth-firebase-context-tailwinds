import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../Providers/AuthProviders';

const Register = () => {
    const {user ,  createUser} =useContext(authContext);
    console.log(user ,  createUser);






    const handleRegister=event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        createUser(email , password)
        .then(result=>{
          const loggedUser= result.user;
          console.log(loggedUser);
          form.reset();
        })
        .catch(error=>{
          console.log(error);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-7">Please Register!</h1>
         
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form 
          onSubmit={handleRegister}
          className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="input input-bordered"
              />
            </div>
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
                <Link to='/login' className="label-text-alt link link-hover">
                  Already have an account?Please Login
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Register;