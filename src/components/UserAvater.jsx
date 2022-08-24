import React from "react";
import { Link } from "react-router-dom";

function UserAvater({ displayName, userId, status, size }) {
  // const link = displayName === 'Emmanuel' ? NavLink : Link;

  return (
    <Link to={`/user/${userId}`} className="user-avatar rounded-xl">
      <div className="flex gap-2 items-center text-color text-md px-2 py-2 cursor-pointer rounded-2xl hover:bg-comment_box">
        <div className={`w-${size} h-${size} rounded-full overflow-hidden`}>
          <img
            src="/assets/logo.png"
            alt="avatar "
            className="w-full h-full rounded-full"
          />
        </div>
        <span className="flex flex-col">
          <p className="text-lg py-0">{displayName}</p>
          {status && <p className="text-sm text-green-400">{status}</p>}
        </span>
      </div>
    </Link>
  );
}

export default UserAvater;
