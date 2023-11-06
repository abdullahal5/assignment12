import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () =>{
    logOut()
    .then(() =>{
        Swal.fire({
          title: "Nice!",
          text: "You successfylly logged out",
          icon: "success",
        });
    })
    .catch(err =>{
      console.log(err)
    })
  }
    const links = (
      <>
        <div className="flex gap-7">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-[#00B0FF] px-4 py-2 rounded-lg font-bold text-white"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/alljobs"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-[#00B0FF] px-4 py-2 rounded-lg font-bold text-white"
                  : ""
              }
            >
              All Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addajobs"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-[#00B0FF] px-4 py-2 rounded-lg font-bold text-white"
                  : ""
              }
            >
              Add A Job
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/appliedjobs"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-[#00B0FF] px-4 py-2 rounded-lg font-bold text-white"
                  : ""
              }
            >
              Applied Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myjobs"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-[#00B0FF] px-4 py-2 rounded-lg font-bold text-white"
                  : ""
              }
            >
              My Jobs
            </NavLink>
          </li>
          <li>
            {user? <NavLink>
              <button onClick={handleLogOut}>Log Out</button>
            </NavLink> : <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-[#00B0FF] px-4 py-2 rounded-lg font-bold text-white"
                  : ""
              }
            >
              Login
            </NavLink>}
          </li>
        </div>
      </>
    );
    return (
      <div>
        <div className="navbar bg-base-100 ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {links}
              </ul>
            </div>
            <div className="btn btn-ghost normal-case items-center text-xl">
              <img className="w-24"
                src="https://i.ibb.co/ZS4CdBG/370267382-3049849525148107-486017350057683538-n-removebg-preview.png"
                alt=""
                />
                <h1>CareerCanvas</h1>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className=" menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
        </div>
      </div>
    );
};

export default Navbar;