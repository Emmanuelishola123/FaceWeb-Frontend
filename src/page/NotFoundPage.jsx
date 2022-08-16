import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="w-full max-w-[600px]">
        <p className="text-md text-center">
          Oops! looks like the page you are loking for does not exist. Kindly
          click on the link below to navigate your way back to the home page
        </p>
        <Link to="/">
          <p className="flex justify-center mt-2 items-center gap-2 text-primary text-lg font-semibold">
            <FaArrowLeft />
            Back to Home page
          </p>
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
