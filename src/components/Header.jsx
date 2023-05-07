// import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-20 bg-stone-900 shadow-2xl flex items-center justify-center">
      <nav className="flex gap-8 justify-center items-center">
        <Link
          className="text-lg font-bold border-2 border-stone-400 py-1 px-3 hover:border-none hover:text-red-500"
          to="/"
        >
          Home
        </Link>
        <Link
          className="text-lg font-bold border-2 border-stone-400 py-1 px-3 hover:border-none hover:text-red-500"
          to="/Admin"
        >
          Admin
        </Link>
        <Link
          className="text-lg font-bold border-2 border-stone-400 py-1 px-3 hover:border-none hover:text-red-500"
          to="/users"
        >
          Users List
        </Link>
      </nav>
    </div>
  );
};

export default Header;
