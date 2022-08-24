import React, { useContext } from "react";
import { FaBars, FaHome, FaSearch, FaTimes } from "react-icons/fa";
import Context from "../context/context.";
import UserAvater from "./UserAvater";

function Nav() {
  const { state, dispatch } = useContext(Context);
  const { sidebarOpen } = state;

  const handleSidebarState = () => {
    return dispatch({ type: "TOGGLE_SIDEBAR" });
  };
  const user = {
    displayName: "Emmanuel",
    userId: "Emmanuel-Ishola",
    size: 10,
  };
  return (
    <nav
      id="navbar"
      className="navbar flex px-12 md:px-16 xl:px-20 py-2 shadow-md bg-bg sticky top-0 z-[1500]"
    >
      <div className="nav-container xl:grid xl:grid-cols-12 xl:gap-4 ">
        <div className="brand-logo xl:col-span-3 flex flex-grow xl:flex-grow-0">
          <img
            src="/assets/logo.png"
            alt="logo"
            className="w-10 h-10 xl:w-12 xl:h-12 mr-4 rounded-full"
          />
          <div className="search-bar w-10 xl:w-auto h-10 xl:h-12 flex justify-center xl:justify-start xl:px-3 xl:py-2 items-center rounded-full xl:rounded-3lx">
            <FaSearch className="xl:mr-3" />
            <input
              type="text"
              placeholder="Search Facebook"
              className="w-0 xl:w-[200px] h-10 hidden xl:inline-block"
            />
          </div>
        </div>
        <div onClick={handleSidebarState} className="w-10 h-10 flex xl:hidden justify-center items-center bg-comment_box rounded-full cursor-pointer">
          {sidebarOpen  ? <FaTimes /> : <FaBars /> }
        </div>
        <ul className="xl:col-span-6 px-3 py-2 hidden xl:flex justify-center items-center ">
          <li>
            <a href="/" className=" flex items-center px-4 py-2">
              {" "}
              <FaHome className="mr-2 " /> Home
            </a>
          </li>
          <li>
            <a href="/" className=" flex items-center px-4 py-2">
              {" "}
              <FaHome className="mr-2 " /> Home
            </a>
          </li>
          <li>
            <a href="/" className=" flex items-center px-4 py-2">
              {" "}
              <FaHome className="mr-2 " /> Home
            </a>
          </li>
          <li>
            <a href="/" className=" flex items-center px-4 py-2">
              {" "}
              <FaHome className="mr-2 " /> Home
            </a>
          </li>
        </ul>
        <div className="xl:col-span-3 hidden xl:flex justify-center items-center">
          <div className="xl:flex xl:flex-grow">
            <UserAvater {...user} />
          </div>
          <div className="w-12 h-12 mr-3 flex justify-center items-center bg-comment_box rounded-full cursor-pointer">
            <FaBars />
          </div>{" "}
          <div className="w-12 h-12 mr-3 flex justify-center items-center bg-comment_box rounded-full cursor-pointer">
            <FaBars />
          </div>{" "}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
