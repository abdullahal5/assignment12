import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const style = { color: "#00B0FF", fontSize: "2em" };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Nice!",
          text: "You successfylly logged out",
          icon: "success",
        });
        axios
          .post(
            "https://b8a11-server-side-abdullahal5.vercel.app/logout",
            user.email,
            {
              withCredentials: true,
            }
          )
          .then((res) => console.lot(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const links = (
    <>
      <div className="flex lg:flex-row md:flex-col flex-col gap-7">
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
        {user ? (
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
        ) : (
          ""
        )}
        {user ? (
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
        ) : (
          ""
        )}
        {user ? (
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
        ) : (
          ""
        )}
        <li>
          {user ? (
            <NavLink>
              <button onClick={handleLogOut}>Log Out</button>
            </NavLink>
          ) : (
            <NavLink
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
            </NavLink>
          )}
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
            <img
              className="w-24"
              src="https://i.ibb.co/ZS4CdBG/370267382-3049849525148107-486017350057683538-n-removebg-preview.png"
              alt=""
            />
            <h1>CareerCanvas</h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal px-1">{links}</ul>
        </div>
        <div className=" navbar-end mx-auto flex-col">
          {user ? (
            <div className="relative group">
              <img
                className="w-12 h-12 rounded-[50%] mr-10  "
                src={user.photoURL}
                alt=""
              />
              <div className="hidden group-hover:block absolute z-10 p-2 bg-slate-100 text-black text-xs rounded shadow">
                <h1>{user.displayName}</h1>
              </div>
            </div>
          ) : (
            <div>
              <FaUserCircle style={style} className="mr-10 "></FaUserCircle>
            </div>
          )}
        </div>
        <Link to="/blog">
          <button className="btn bg-[#00B0FF] text-white ">Blog</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
