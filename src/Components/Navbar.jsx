import { NavLink } from "react-router-dom";

const Navbar = () => {
    const links = <>
        <NavLink to="/"><button className="btn bg-blue-500 text-white">Home</button></NavLink>
        <NavLink to="/alltouristsspot"><button className="btn bg-blue-500 text-white">All Tourists Spot</button></NavLink>
        <NavLink to="/addtouristsspot"><button className="btn bg-blue-500 text-white">Add Tourists spot</button></NavLink>
    </>
        
    
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
        <a className="btn btn-ghost text-xl">Tourism Management</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
