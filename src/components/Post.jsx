import React from "react";
import {
  FaCamera,
  FaComment,
  FaDotCircle,
  FaFile,
  FaGlobe,
  FaHeart,
  FaShare,
  FaThumbsUp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Comment from "./Comment";

function Post({ comment }) {
  return (
    <Link to="/posts/postId">
      <div className="w-100 py-2 rounded-lg shadow bg-box">
        <div className="flex items-center justify-between px-6 py-2">
          <Link to="/user/userId">
            <div className="flex gap-2 items-center">
              <span className="bg-primary w-10 h-10 p-1 rounded-full overflow-hidden">
                <img
                  src="/assets/logo.png"
                  alt="avatar"
                  className="w-full h-full rounded-full"
                />
              </span>
              <span>
                <p className="text-lg font-semibold">Kenneth Titus</p>
                <p className="flex items-center text-md font-medium">
                  An hour ago <FaGlobe className="ml-2" />
                </p>
              </span>
            </div>
          </Link>
          <FaDotCircle />
        </div>
        <div className="px-6 py-2">
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            mollitia sapiente culpa labore odio fugiat minima harum itaque quasi
            sunt impedit voluptate, minus quo eaque illo similique nesciunt
            molestias a.
          </p>
        </div>
        <div className="w-full h-[475px]">
          <img src="/assets/logo.png" alt="post" className="w-full h-full" />
        </div>
        <div className="flex flex-col divide-y px-6">
          <div className="flex items-center justify-between py-2">
            <span className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-comment-box">
              <span className="comment-icons flex justify-center items-center w-5 h-5 rounded-full overflow-hidden bg-primary p-[0.5px]">
                <FaThumbsUp className="text-box text-xs" />
              </span>
              <span className="comment-icons flex justify-center items-center w-5 h-5 rounded-full overflow-hidden bg-danger p-[0.5px] -ml-1 border-2 border-box">
                <FaHeart className="text-box text-xs" />
              </span>
              <p className="text-md ml-2">You and 200 others</p>
            </span>
            <span className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-comment-box">
              <p className="text-md">143 Comments</p>
              <p className="text-md ml-2">24 Shares</p>
            </span>
          </div>
          {/* REACTIONS BUTTONS */}
          <div className="flex justify-between items-center py-2">
            <span className="flex items-center gap-4 px-4 py-2 rounded-lg cursor-pointer hover:bg-comment-box">
              <FaThumbsUp className="text-primary text-lg" />
              Like
            </span>
            <span className="flex items-center gap-4 px-4 py-2 rounded-lg cursor-pointer hover:bg-comment-box">
              <FaComment className="text-lg" />
              Comment
            </span>
            <span className="flex items-center gap-4 px-4 py-2 rounded-lg cursor-pointer hover:bg-comment-box">
              <FaShare className="text-lg" />
              Share
            </span>
          </div>
          {/* COMMENT FIELD */}
          <div className="flex items-center gap-4 py-2">
            <Link to="/user/Emmanuel-ishola">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src="/assets/logo.png"
                  alt="avatar"
                  className="w-full h-full rounded-full"
                />
              </div>
            </Link>
            <div className="flex items-center w-full rounded-2xl bg-comment-box px-4 py-2">
              <input
                type="text"
                name="post"
                placeholder="Write your comment..."
                className="w-full rounded-2xl bg-comment-box outline-none"
              />
              <span className="flex gap-2 items-center ">
                <span className="flex justify-center items-center w-6 h-6 rounded-full cursor-pointer p-1 hover:shadow hover:bg-comment-box">
                  <FaCamera className="text-md rounded-full " />
                </span>
                <span className="flex justify-center items-center w-6 h-6 rounded-full cursor-pointer p-1 hover:shadow hover:bg-comment-box">
                  <FaFile className="text-md rounded-full " />
                </span>
              </span>
            </div>
          </div>
          {/* COMMENT */}

          <div>
            {comment && [1, 2, 3, 4, 5].map((item) => <Comment key={item} />)}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Post;
