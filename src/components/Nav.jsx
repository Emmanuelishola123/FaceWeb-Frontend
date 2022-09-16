import React, { useContext } from "react";
import { FaBars, FaHome,  FaSearch, FaTimes } from "react-icons/fa";
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
            className="w-9 h-9 xl:w-10 xl:h-10 mr-4 rounded-full"
          />
          <div className="search-bar w-9 xl:w-auto h-9 xl:h-10 flex justify-center xl:justify-start xl:px-3 items-center rounded-full xl:rounded-3lx">
            <FaSearch className="xl:mr-3" />
            <input
              type="text"
              placeholder="Search Facebook"
              className="w-0 xl:w-full h-10 hidden bg-comment_box xl:inline-block"
            />
          </div>
        </div>
        <div
          onClick={handleSidebarState}
          className="w-9 h-9 flex xl:hidden justify-center items-center bg-comment_box rounded-full cursor-pointer"
        >
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className="hidden w-full xl:flex xl:col-span-6">
          <ul className="w-full px-3 xl:mx-8 xl:flex justify-between items-center">
            <li title="Home" className="px-4 py-1 rounded-lg hover:bg-comment_box">
              <a href="/" className="flex text-lg font-bold items-center px-4 py-2">
                <FaHome className="text-3xl font-bold" />
              </a>
            </li>
            <li title="Home" className="px-4 py-1 rounded-lg hover:bg-comment_box">
              <a href="/" className="flex text-lg font-bold items-center px-4 py-2">
                <FaHome className="text-3xl font-bold" />
              </a>
            </li>
            <li title="Home" className="px-4 py-1 rounded-lg hover:bg-comment_box">
              <a href="/" className="flex text-lg font-bold items-center px-4 py-2">
                <FaHome className="text-3xl font-bold" />
              </a>
            </li>
            <li title="Home" className="px-4 py-1 rounded-lg hover:bg-comment_box">
              <a href="/" className="flex text-lg font-bold items-center px-4 py-2">
                <FaHome className="text-3xl font-bold" />
              </a>
            </li>
          </ul>
        </div>
        <div className="xl:col-span-3 hidden xl:flex justify-center items-center">
          <div className="xl:flex xl:flex-grow">
            <UserAvater {...user} />
          </div>
          <div className="w-9 xl:w-10 h-9 xl:h-10 mr-3 flex justify-center items-center bg-comment_box rounded-full cursor-pointer">
            <FaBars />
          </div>{" "}
          <div className="w-9 xl:w-10 h-9 xl:h-10 mr-3 flex justify-center items-center bg-comment_box rounded-full cursor-pointer">
            <FaBars />
          </div>{" "}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
