import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
    const {signInUser} = useContext(AuthContext)
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        signInUser(email,password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error.message)
        })
        
    }
    return (
        <div className="card bg-base-100 w-full md:w-2/5 m-auto shrink-0 shadow-2xl mt-5">
        <div className="text-center mt-2">
          <span className="text-2xl font-bold text-blue-700 border-b-4 border-b-blue-900 rounded-r-lg rounded-l-lg">Login & Explore</span>
        </div>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-xl">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-xl">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
          </div>
          <div>
              <p className="text-xl text-center">You have no account.?? please <Link to="/register" className="text-blue-700 underline">Register</Link ></p>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-blue-700 text-white text-xl">Login</button>
          </div>
        </form>
      </div>
    );
};

export default Login;