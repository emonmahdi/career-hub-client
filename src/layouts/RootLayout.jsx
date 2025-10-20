// import React from 'react'
// import { Outlet } from 'react-router'
// import NavBar from '../components/shared/NavBar'
// import Footer from '../components/shared/Footer'

// const RootLayout = () => {
//   return (
//     <div>
//         <NavBar />
//         <Outlet />
//         <Footer />
//     </div>
//   )
// }

// export default RootLayout

import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/shared/NavBar";
import Footer from "../components/shared/Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow">
        <NavBar />
      </header>

      {/* Page Content */}
      <main className="flex-1 container mx-auto px-4 py-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="mt-10">
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
