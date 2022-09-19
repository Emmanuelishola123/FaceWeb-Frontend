import React, { useContext } from "react";
import { FaPhotoVideo, FaSmile, FaUserFriends, FaVideo } from "react-icons/fa";
import UserAvater from "../components/UserAvater";
// import avatar from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import Post from "../components/Post";
import ChatHandle from "../components/ChatHandle";
import StoryContainer from "../components/StoryContainer";
import Context from "../context/context.";

function HomePage() {
  const { state } = useContext(Context);
  const { sidebarOpen } = state;

  const user = {
    displayName: "Emmanuel Ishola",
    userId: "Emmanuel-Ishola",
    size: 10,
  };

  return (
    <main className="relative grid grid-cols-1 lg:grid-cols-12 py-4">
      {/* LEFT BAR */}
      <div
        className={`sidebar sticky top-0 xl:block xl:col-span-3 px-4 md:px-6 ${
          sidebarOpen && "open"
        }`}
      >
        <div className="divide-y gap-2">
          <UserAvater {...user} />
          <ul className="flex flex-col gap-2 mt-4 pt-4">
            <li className="flex items-center gap-4 px-4 py-2 rounded-lg cursor-pointer hover:bg-comment_box text-lg">
              <FaUserFriends className="text-3xl" />
              Friends
            </li>
            <li className="flex items-center gap-4 px-4 py-2 rounded-lg cursor-pointer hover:bg-comment_box text-lg">
              <FaUserFriends className="text-3xl" /> Group
            </li>
            <li className="flex items-center gap-4 px-4 py-2 rounded-lg cursor-pointer hover:bg-comment_box text-lg">
              <FaUserFriends className="text-3xl" /> Marketplace
            </li>
            <li className="flex items-center gap-4 px-4 py-2 rounded-lg cursor-pointer hover:bg-comment_box text-lg">
              <FaUserFriends className="text-3xl" />
              Watch
            </li>
            <li className="flex items-center gap-4 px-4 py-2 rounded-lg cursor-pointer hover:bg-comment_box text-lg">
              <FaUserFriends className="text-3xl" />
              Games
            </li>
            <li className="flex items-center gap-4 px-4 py-2 rounded-lg cursor-pointer hover:bg-comment_box text-lg">
              <FaUserFriends className="text-3xl" /> Memories
            </li>
            <li className="flex items-center gap-4 px-4 py-2 rounded-lg cursor-pointer hover:bg-comment_box text-lg">
              <FaUserFriends className="text-3xl" /> More
            </li>
          </ul>
        </div>
      </div>
      {/* MAIN POST FEED */}
      <div className="col-span-1 md:col-span-8 xl:col-span-6 px-4 md:px-6">
        {/* STORIES */}
        <div className="relative w-full p-3 mb-4 bg-box rounded-lg">
          <StoryContainer />
        </div>
        {/* ADD A POST */}
        <div className="w-full rounded-lg shadow bg-box divide-y p-4 mb-4">
          <div className="flex items-center gap-4 pb-2">
            <NavLink to="/user/Emmanuel-ishola">
              <div className="w-9 xl:w-10 h-9 xl:h-10 rounded-full overflow-hidden">
                <img
                  src="/assets/logo.png"
                  alt="avatar"
                  className="w-full h-full rounded-full"
                />
              </div>
            </NavLink>
            <input
              type="text"
              name="post"
              placeholder="Tell your mind..."
              className="w-full bg-comment_box rounded-2xl px-4 py-2 outline-none"
            />
          </div>
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2 text-md rounded-lg px-4 py-2 cursor-pointer hover:bg-comment_box">
              <FaVideo className="text-red-400 text-lg" /> Live Video
            </div>
            <div className="flex items-center gap-2 text-md rounded-lg px-4 py-2 cursor-pointer hover:bg-comment_box">
              <FaPhotoVideo className="text-green-400 text-lg" /> Photo/Video
            </div>
            <div className="flex items-center gap-2 text-md rounded-lg px-4 py-2 cursor-pointer hover:bg-comment_box">
              <FaSmile className="text-orange-400 text-lg" /> Feeling/Activity
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
            <li className="flex items-center gap-4 px-4 py-2 rounded-lg cursor-pointer hover:bg-comment_box text-lg">
              <ChatHandle />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default HomePage;
