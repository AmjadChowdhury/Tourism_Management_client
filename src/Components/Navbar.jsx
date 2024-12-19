import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import './Navbar.css'

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("Sign Out Successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const links = (
    <>
      <NavLink to="/">
        <button className="btn bg-blue-500 text-white w-full">Home</button>
      </NavLink>
      <NavLink to="/alltouristsspot">
        <button className="btn bg-blue-500 text-white w-full">
          All Tourists Spot
        </button>
      </NavLink>
      {user && (
        <>
          <NavLink to="/addtouristsspot">
            <button className="btn bg-blue-500 text-white w-full">
              Add Tourists spot
            </button>
          </NavLink>
          <NavLink to="/mylist">
            <button className="btn bg-blue-500 text-white w-full">My List</button>
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Tourism</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt={user.displayName} src={user.photoURL} />
                </div>
              </div>
            </div>
            <Link
              onClick={handleSignOut}
              className="btn bg-orange-700 text-white"
            >
              Sign Out
            </Link>
          </div>
        ) : (
          <Link to="/login" className="btn bg-blue-700 text-white">
            LogIn
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
