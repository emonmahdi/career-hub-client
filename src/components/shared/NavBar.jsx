import React, { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";

const links = (
  <>
    <NavLink to="/">Home</NavLink>
  </>
);

const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <button onClick={handleSignOut} className="btn">
            SignOut
          </button>
        ) : (
          <>
            <NavLink to="/register" className="btn me-2">
              Register
            </NavLink>
            <NavLink to="/login" className="btn">
              Login
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
