import React from "react";
import { FaPhotoVideo, FaSmile, FaUserFriends, FaVideo } from "react-icons/fa";
import UserAvater from "../components/UserAvater";
// import avatar from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import Post from "../components/Post";
import ChatHandle from "../components/ChatHandle";
import StoryContainer from "../components/StoryContainer";

function HomePage() {
  const user = {
    displayName: "Emmanuel Ishola",
    userId: "Emmanuel-Ishola",
    size: 10,
  };

  return (
    <main className="relative grid grid-cols-1 lg:grid-cols-12 py-4">
      {/* LEFT BAR */}
      <div className="sticky top-0 hidden xl:block xl:col-span-3 px-4 md:px-6">
        <div className="divide-y gap-2">
          <UserAvater {...user} />
          <ul className="flex flex-col gap-2 mt-4 pt-4">
            <li className="flex items-center gap-4 px-4 py-2 rounded-lg cursor-pointer hover:bg-comment-box text-lg">
              <FaUserFriends className="text-3xl" />
              <span className="flex flex-col">
                <span>Friends</span>
                <span className="flex items-center text-primary text-sm">
                  <div className="w-2 h-2 mr-1 rounded-full bg-primary"></div> 3
                  new
                </span>
              </span>
            </li>
            <li className="flex items-center gap-4 px-4 py-2 rounded-lg cursor-pointer hover:bg-comment-box text-lg">
              <FaUserFriends className="text-3xl" /> Group
            </li>
            <li className="flex items-center gap-4 px-4 py-2 rounded-lg cursor-pointer hover:bg-comment-box text-lg">
              <FaUserFriends className="text-3xl" /> Marketplace
            </li>
            <li className="flex items-center gap-4 px-4 py-2 rounded-lg cursor-pointer hover:bg-comment-box text-lg">
              <FaUserFriends className="text-3xl" />
              <span className="flex flex-col">
                <span>Watch</span>
                <span className="flex items-center text-primary text-sm">
                  <div className="w-2 h-2 mr-1 rounded-full bg-primary"></div> 5
                  new
                </span>
              </span>
            </li>
            <li className="flex items-center gap-4 px-4 py-2 rounded-lg cursor-pointer hover:bg-comment-box text-lg">
              <FaUserFriends className="text-3xl" />
              <span className="flex flex-col">
                <span>Games</span>
                <span className="flex items-center text-primary text-sm">
                  <div className="w-2 h-2 mr-1 rounded-full bg-primary"></div> 3
                  new
                </span>
              </span>
            </li>
            <li className="flex items-center gap-4 px-4 py-2 rounded-lg cursor-pointer hover:bg-comment-box text-lg">
              <FaUserFriends className="text-3xl" /> Memories
            </li>
            <li className="flex items-center gap-4 px-4 py-2 rounded-lg cursor-pointer hover:bg-comment-box text-lg">
              <FaUserFriends className="text-3xl" /> More
            </li>
          </ul>
        </div>
      </div>
      {/* MAIN POST FEED */}
      <div className="col-span-1 md:col-span-8 xl:col-span-6 px-4 md:px-6">
        {/* STORIES */}
        <div className="relative mb-4">
          <StoryContainer />
        </div>
        {/* ADD A POST */}
        <div className="w-full rounded-lg shadow bg-box divide-y p-4 mb-4">
          <div className="flex items-center gap-4 pb-2">
            <NavLink to="/user/Emmanuel-ishola">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src='/assets/logo.png'
                  alt="avatar"
                  className="w-full h-full rounded-full"
                />
              </div>
            </NavLink>
            <input
              type="text"
              name="post"
              placeholder="Tell your mind..."
              className="w-full rounded-2xl bg-comment-box px-4 py-2 outline-none"
            />
          </div>
          <div className="flex items-center justify-between pt-2 px-4">
            <div className="flex items-center gap-2 text-xl rounded-lg px-4 py-2 cursor-pointer hover:bg-comment-box">
              <FaVideo className="text-red-400 text-2xl" /> Live Video
            </div>
            <div className="flex items-center gap-2 text-xl rounded-lg px-4 py-2 cursor-pointer hover:bg-comment-box">
              <FaPhotoVideo className="text-green-400 text-2xl" /> Photo/Video
            </div>
            <div className="flex items-center gap-2 text-xl rounded-lg px-4 py-2 cursor-pointer hover:bg-comment-box">
              <FaSmile className="text-orange-400 text-2xl" /> Feeling/Activity
            </div>
          </div>
        </div>
        {/* POST FEED */}
        <div className="flex flex-col gap-4 px-8">
          {[1, 2, 3, 4, 5, 6, 7].map(() => (
            <Post />
          ))}
        </div>
      </div>
      {/* RIGHT BAR */}
      <div className="sticky top-0 hidden md:block md:col-span-4 xl:col-span-3 px-4 md:px-6">
        <ul className="flex flex-col gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
            <li className="flex items-center gap-4 px-4 py-2 rounded-lg cursor-pointer hover:bg-comment-box text-lg">
              <ChatHandle />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default HomePage;
