import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaBars, FaDesktop, FaDotCircle, FaHome, FaSearch } from "react-icons/fa";
import UserAvater from "./UserAvater";

function Nav() {
  const user = {
    displayName: "Emmanuel",
    userId: "Emmanuel-Ishola",
    size: 10,
  };

  return (
    <nav className="navbar sticky top-0 w-full grid grid-cols-12 gap-4 shadow-md bg-box px-4 md:px-6 z-[1500]">
      {/* LOGIN && SEARCH ICON */}
      <div className="w-full col-span-2 md:col-span-3 flex items-center text-xl font-semibold py-2">
        <Link to="/">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-4">
            <img
              src="/assets/logo.png"
              alt="logo"
              className="w-full h-full rounded-full"
            />
          </div>
        </Link>
        {/* <div className="rounded-full md:hidden p-2 bg-comment-box cursor-pointer">
          <FaSearch />
        </div> */}
        <div className="w-full hidden lg:flex items-center text-gray-400 rounded-2xl bg-comment-box p-2">
          <FaSearch />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent text-small outline-none px-2"
          />
        </div>
      </div>
      {/* MENU ITEMS */}
      <div className="w-full col-span-8 md:col-span-6 ">
        <ul className="h-full flex">
          <li className="w-full h-full py-2">
            <NavLink
              to="/"
              className="w-full h-full flex items-center justify-center rounded-lg hover:bg-comment-box"
            >
              <FaHome className="text-3xl font-semibold " />
            </NavLink>
          </li>
          <li className="w-full h-full py-2">
            <NavLink
              to="/watch"
              className="w-full h-full flex items-center justify-center rounded-lg hover:bg-comment-box"
            >
              <FaHome className="text-3xl font-semibold" />
            </NavLink>
          </li>
          <li className="w-full h-full py-2">
            <NavLink
              to="/marketplaces"
              className="w-full h-full flex items-center justify-center rounded-lg hover:bg-comment-box"
            >
              <FaHome className="text-3xl font-semibold" />
            </NavLink>
          </li>
          <li className="w-full h-full py-2">
            <NavLink
              to="/groups"
              className="w-full h-full flex items-center justify-center rounded-lg hover:bg-comment-box"
            >
              <FaHome className="text-3xl font-semibold" />
            </NavLink>
          </li>
          <li className="w-full h-full py-2">
            <NavLink
              to="/games"
              className="w-full h-full flex items-center justify-center rounded-lg hover:bg-comment-box"
            >
              <FaHome className="text-3xl font-semibold" />
            </NavLink>
          </li>
        </ul>
      </div>
      {/* PROFILE */}
      <div className="w-full col-span-2 md:col-span-3 flex items-center justify-between py-2">
        <div className="hidden lg:flex">
          <UserAvater {...user} />
        </div>
        <div className="w-full lg:hidden flex justify-end">
          <FaBars />
        </div>
        <ul className="hidden xl:flex gap-2 items-center">
          {/* <li className="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden p-2 bg-comment-box cursor-pointer">
            <FaDotCircle className="w-full h-full" />
          </li> */}
          <li className="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden p-2 bg-comment-box cursor-pointer">
            <FaDotCircle className="w-full h-full" />
          </li>
          <li className="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden p-2 bg-comment-box cursor-pointer">
            <FaDotCircle className="w-full h-full" />
          </li>
          <li className="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden p-2 bg-comment-box cursor-pointer">
            <FaDotCircle className="w-full h-full" />
          </li>
        </ul>
      </div>
      <Outlet />
    </nav>
  );
}

export default Nav;
