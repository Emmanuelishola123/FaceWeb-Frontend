import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const socialLogin = [
  { name: "google", url: "google", icon: <FaGoogle className="text-xl text-danger"  /> },
  {
    name: "facebook",
    url: "facebook",
    icon: <FaFacebook className="text-xl text-primary"  />,
  },
  { name: "github", url: "github", icon: <FaGithub className="text-xl text-black"  /> },
  { name: "twitter", url: "twitter", icon: <FaTwitter className="text-xl text-secondary"  /> },
];

function Form() {
  const [login, setLogin] = useState(true);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-12 bg-primary rounded-lg m-4 ">
      <div className="hidden md:flex items-end justify-center text-white px-6 py-4 pb-[60px] col-span-1 md:col-span-5 form-bg rounded-l-lg">
        {login ? (
          <div >
            <p className="text-xl text-center font-semibold">Welcome Back!</p>
            <span className="text-sm text-white text-center mt-4 ">
              Provide your credentials (Email and Password) to login to your
              account with Facebook Clone
            </span>
          </div>
        ) : (
          <div>
            <p className="text-xl text-center font-semibold">
              Welcome to Facebook Clone. Kindly Register!
            </p>
            <span className="text-sm text-white text-center mt-4 ">
              Proceed to register as a new user with your credentials (Name,
              Email and Password) to be able to post, upload, react and comment
              on a post
            </span>
          </div>
        )}
      </div>
      <div className="bg-box text-color px-6 pb-4 col-span-1 md:col-span-7 rounded-lg md:rounded-l-none">
        <div className="w-full">
          <p className="flex justify-end">
            <button
              onClick={() => setLogin(true)}
              className={`${
                login && "bg-primary text-white"
              } grid place-items-center font-medium px-4 py-2 rounded-b-sm`}
            >
              Login
            </button>
            <button
              onClick={() => setLogin(false)}
              className={`${
                !login && "bg-primary text-white"
              } grid place-items-center font-medium px-4 py-2  rounded-b-sm`}
            >
              Register
            </button>
          </p>
          <p className="text-2xl font-semibold py-4">
            {login ? "Login" : "Register"}
          </p>
        </div>
        {/* SOCIAL LOGIN  || OAUTH*/}
        {login && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-4">
              {socialLogin.map(({ name, icon, url }) => (
                <Link
                  to={url}
                  className="col-span-1 md:col-span-6 py-1 shadow hover:shadow-md rounded-lg transition"
                >
                  <div className="rounded-md transition duration-300">
                    <p className="flex items-center gap-3 text-md px-4 py-2 capitalize ">
                      {icon}
                      {name}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="w-full flex items-center py-4">
              <hr className="w-full h-[2px] bg-comment-box" />
              <span className="mx-3"> OR </span>
              <hr className="w-full h-[2px] bg-comment-box" />
            </div>
          </div>
        )}

        <form>
          {!login && (
            <div className="mb-4">
              <label htmlFor="name">
                Name
                <input
                  type="name"
                  placeholder="sample@gmail.com"
                  name="name"
                  id="name"
                  className="w-full border-0 border-b-2 bg-transparent outline-none py-1 "
                />
              </label>
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="email">
              Email
              <input
                type="email"
                placeholder="sample@gmail.com"
                name="email"
                id="email"
                className="w-full border-0 border-b-2 bg-transparent outline-none py-1 "
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="password">
              Password
              <input
                type="password"
                placeholder="********"
                name="password"
                id="password"
                className="w-full border-0 border-b-2 bg-transparent outline-none py-1 "
              />
            </label>
          </div>
          {!login && (
            <div className="mb-4">
              <label htmlFor="confirm-password">
                Confirm Password
                <input
                  type="password"
                  placeholder="********"
                  name="confirm-password"
                  id="confirm-password"
                  className="w-full border-0 border-b-2 bg-transparent outline-none py-1 "
                />
              </label>
            </div>
          )}

          <div className="flex justify-end">
            {login ? (
              <button
                type="submit"
                className="grid place-items-center text-white font-medium bg-primary hover:bg-secondary px-6 py-2 rounded-md hover:ring-2 ring-offset-2 ring-primary transition duration-300"
              >
                Login
              </button>
            ) : (
              <button
                type="submit"
                className="grid place-items-center text-white font-medium bg-primary hover:bg-secondary px-6 py-2 rounded-md hover:ring-2 ring-offset-2 ring-primary transition duration-300"
              >
                Register
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
