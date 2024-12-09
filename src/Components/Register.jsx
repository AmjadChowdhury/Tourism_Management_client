import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const [errorMsg,setErrorMsg] = useState('')

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const photo = form.photo.value

        setErrorMsg('')

        if(password.length <= 6){
            setErrorMsg('password must be greater than six character')
            return;
        }
        if(!/[A-Z]/.test(password)){
            setErrorMsg('Password must have one uppercase letter..')
            return
        }

        createUser(email,password)
        .then(result => {
            console.log(result.createUser)
            Swal.fire({
                title: 'Register!',
                text: `${name} successfully regsiter`,
                icon: 'success',
                confirmButtonText: 'Ok'
              })
        })
        .catch(error => {
            console.log(error.message)
            setErrorMsg(error.message)
        })
    }
  return (
    <div className="card bg-base-100 w-full md:w-2/5 m-auto shrink-0 shadow-2xl mt-5">
          <div className="text-center mt-2">
            <span className="text-2xl font-bold text-blue-700 border-b-4 border-b-blue-900 rounded-r-lg rounded-l-lg">Register Your Account</span>
          </div>
          <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-xl">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
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
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-xl">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div>
                <p className="text-xl text-center">Already hava an account.!! please <Link to="/login" className="text-blue-700 underline">Login</Link ></p>
            </div>
            <div>
                {
                    errorMsg && <p className="text-red-700 text-xl font-bold text-center">{errorMsg}</p>
                }
            </div>
            <div className="form-control mt-2">
              <input type="submit" value="Register" className="btn bg-blue-700 text-white text-xl" />
            </div>
          </form>
        </div>
  );
};

export default Register;
