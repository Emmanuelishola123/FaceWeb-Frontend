import React from "react";
import { Link } from "react-router-dom";

function Comment() {
  return (
    <div className="flex items-start gap-2 py-2">
      <Link to="/user/userId">
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <img
            src="/assets/logo.png"
            alt="avatar"
            className="w-full h-full rounded-full"
          />
        </div>
      </Link>
      <div className="grow-1 text-sm font-normal bg-comment-box rounded-lg px-4 py-2 shadow">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sunt
        deserunt dolores, reprehenderit consectetur vel expedita, minima
        voluptatum, obcaecati inventore laudantium dolorem maxime placeat
        consequatur facilis vitae corporis odio in!
      </div>
    </div>
  );
}

export default Comment;
