// import React, { useContext } from "react";
// import { NavLink } from "react-router";
// import { AuthContext } from "../../Contexts/AuthContext";

// const NavBar = () => {
//   const { user, signOutUser } = useContext(AuthContext);

//   const links = (
//     <>
//       <NavLink to="/" className={"me-2"}>
//         Home
//       </NavLink>
//       {user && (
//         <>
//           <NavLink to="/myApplication" className={"me-2"}>
//             My Application
//           </NavLink>
//         </>
//       )}
//       {user && (
//         <>
//           <NavLink to="/addJob" className={"me-2"}>
//             Add Job
//           </NavLink>
//           <NavLink to="/postMyJobs" className={"me-2"}>
//             Post Job
//           </NavLink>
//         </>
//       )}
//     </>
//   );

//   const handleSignOut = () => {
//     signOutUser()
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <div className="navbar bg-base-100 shadow-sm">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               {" "}
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />{" "}
//             </svg>
//           </div>
//         </div>
//         <a className="btn btn-ghost text-xl">daisyUI</a>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">{links}</ul>
//       </div>
//       <div className="navbar-end">
//         {user?.email ? (
//           <button onClick={handleSignOut} className="btn">
//             SignOut
//           </button>
//         ) : (
//           <>
//             <NavLink to="/register" className="btn me-2">
//               Register
//             </NavLink>
//             <NavLink to="/login" className="btn">
//               Login
//             </NavLink>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NavBar;

import React, { useContext, useState } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";

const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const links = (
    <>
      <NavLink to="/" className="hover:text-teal-600 px-3 py-2">
        Home
      </NavLink>
      <NavLink to="/jobs" className="hover:text-teal-600 px-3 py-2">
        Find Jobs
      </NavLink>
      <NavLink to="/pages" className="hover:text-teal-600 px-3 py-2">
        Pages
      </NavLink>
      <NavLink to="/employers" className="hover:text-teal-600 px-3 py-2">
        Employers
      </NavLink>
      <NavLink to="/blog" className="hover:text-teal-600 px-3 py-2">
        Blog
      </NavLink>

      {user && (
        <>
          <NavLink
            to="/myApplication"
            className="hover:text-teal-600 px-3 py-2"
          >
            My Application
          </NavLink>
          <NavLink to="/addJob" className="hover:text-teal-600 px-3 py-2">
            Add Job
          </NavLink>
          <NavLink to="/postMyJobs" className="hover:text-teal-600 px-3 py-2">
            Post Job
          </NavLink>
        </>
      )}
      <NavLink to="/contact" className="hover:text-teal-600 px-3 py-2">
        Contact
      </NavLink>
    </>
  );

  const handleSignOut = () => {
    signOutUser().catch(console.error);
  };

  return (
    <nav className="shadow-sm bg-white">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-teal-600">
          JOB<span className="text-black">ES</span>
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-2">{links}</div>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-3">
          {user?.email ? (
            <button
              onClick={handleSignOut}
              className="px-4 py-2 border rounded hover:bg-gray-100"
            >
              Sign Out
            </button>
          ) : (
            <NavLink
              to="/login"
              className="px-4 py-2 border rounded hover:bg-gray-100"
            >
              Sign In
            </NavLink>
          )}
          <NavLink
            to="/postMyJobs"
            className="bg-teal-600 px-4 py-2 text-white rounded hover:bg-teal-700"
          >
            Post Job
          </NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor">
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 flex flex-col">
          {links}
          {user?.email ? (
            <button
              onClick={handleSignOut}
              className="w-full border py-2 rounded"
            >
              Sign Out
            </button>
          ) : (
            <NavLink to="/login" className="w-full border py-2 rounded">
              Sign In
            </NavLink>
          )}
          <NavLink
            to="/post-job"
            className="bg-teal-600 text-white py-2 rounded text-center"
          >
            Post Job
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
