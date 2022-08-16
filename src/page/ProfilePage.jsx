import React from "react";
import {
  FaConnectdevelop,
  FaHome,
  FaSearchLocation,
  FaSmile,
  FaUserFriends,
  FaVideo,
} from "react-icons/fa";
import { Link } from "react-router-dom";
// import cover from "../assets/logo.png";
import Post from "../components/Post";

function ProfilePage() {
  return (
    <>
      {/* PROFILE && COVER PHOTO */}
      <div className="w-full h-[75vh] bg-comment-box lg:px-[15vw] shadow">
        <div className="w-full h-2/3 relative lg:rounded-b-xl overflow-hidden shadow">
          <img src='/assets/logo.png' alt="cover pic" className="w-full h-full" />
        </div>
        <div className="flex items-end justify-between px-10">
          <div className="flex items-end gap-4">
            <div className="w-44 h-44 rounded-full bg-bg border-2 border-bg overflow-hidden -mt-10 z-20">
              <img
                src='/assets/logo.png'
                alt="cover pic"
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-3xl">Kenneth Justin</p>
              <p className="text-md">1.1K Friends</p>
              <p className="flex items-center">
                <Link
                  to="/user/userId"
                  className="w-8 h-8 rounded-full bg-bg border-2 border-bg z-50"
                >
                  <img
                    src='/assets/logo.png'
                    alt="friends"
                    className="w-full h-full rounded-full"
                  />
                </Link>
                <Link
                  to="/user/userId"
                  className="w-8 h-8 rounded-full bg-bg border-2 border-bg -ml-2 z-40"
                >
                  <img
                    src='/assets/logo.png'
                    alt="friends"
                    className="w-full h-full rounded-full"
                  />
                </Link>
                <Link
                  to="/user/userId"
                  className="w-8 h-8 rounded-full bg-bg border-2 border-bg -ml-2 z-30"
                >
                  <img
                    src='/assets/logo.png'
                    alt="friends"
                    className="w-full h-full rounded-full"
                  />
                </Link>
                <Link
                  to="/user/userId"
                  className="w-8 h-8 rounded-full bg-bg border-2 border-bg -ml-2 z-20"
                >
                  <img
                    src='/assets/logo.png'
                    alt="friends"
                    className="w-full h-full rounded-full"
                  />
                </Link>
                <Link
                  to="/user/userId"
                  className="w-8 h-8 rounded-full bg-bg border-2 border-bg -ml-2 z-10"
                >
                  <img
                    src='/assets/logo.png'
                    alt="friends"
                    className="w-full h-full rounded-full"
                  />
                </Link>
                <Link
                  to="/user/userId"
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-box border-2 border-bg -ml-2 z-0"
                >
                  <p className="text-xs">+98</p>
                </Link>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary cursor-pointer hover:opacity-90">
              <FaUserFriends /> Friends
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-box cursor-pointer hover:opacity-90">
              <FaConnectdevelop /> Friends
            </button>
          </div>
        </div>
      </div>

      {/* USER INFO */}
      <div className="bg-bg lg:px-[15vw] pb-8">
        <div className="grid grid-cols-12 gap-4 px-10">
          <div className="col-span-5">
            <div className="w-full rounded-lg shadow p-4 bg-box mb-4">
              <p className="text-lg font-bold mb-4">Intro</p>
              <p className="flex items-center gap-2 mb-4">
                <FaHome className="text-2xl" /> Lives in
                <span className="font-bold">New york city, USA</span>
              </p>
              <p className="flex items-center gap-2">
                <FaSearchLocation className="text-2xl" /> From
                <span className="font-bold">Machester, USA</span>
              </p>
            </div>
            <div className="w-full rounded-lg shadow p-4 bg-box">
              <p className="flex items-center justify-between text-lg mb-4">
                <span className="font-bold">
                  Friends <br />{" "}
                  <span className="text-sm font-medium">(1,135)</span>
                </span>
                <span className="font-semibold text-primary cursor-pointer">
                  See all friends
                </span>
              </p>
              <div className="grid grid-cols-12 gap-2">
                {[1, 2, 3, 4, 5, 6].map(() => (
                  <div className="col-span-4 h-40 pb-6 rounded-md overflow-hidden cursor-pointer shadow hover:shadow-lg">
                    <img src='/assets/logo.png' alt="friend" className="w-full h-full" />
                    <p className="px-1 text-sm">Miracle Keen</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-7">
            {/* ADD A POST */}
            <div className="w-full rounded-lg shadow bg-box divide-y p-4 mb-4">
              <div className="flex items-center gap-4 pb-2">
                <Link to="/user/Emmanuel-ishola">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img
                      src='/assets/logo.png'
                      alt="avatar"
                      className="w-full h-full rounded-full"
                    />
                  </div>
                </Link>
                <input
                  type="text"
                  name="post"
                  placeholder="Tell your mind..."
                  className="w-full rounded-2xl bg-comment-box px-4 py-2 outline-none"
                />
              </div>
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2 text-md rounded-lg px-4 lg:px-2 py-2 cursor-pointer hover:bg-comment-box">
                  <FaVideo className="text-red-400 text-xl" /> Live Video
                </div>
                <div className="flex items-center gap-2 text-md rounded-lg px-4 lg:px-2 py-2 cursor-pointer hover:bg-comment-box">
                  <FaUserFriends className="text-green-400 text-xl" /> Tag
                  friends
                </div>
                <div className="flex items-center gap-2 text-md rounded-lg px-4 lg:px-2 py-2 cursor-pointer hover:bg-comment-box">
                  <FaSmile className="text-orange-400 text-xl" />{" "}
                  Feeling/Activity
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {[1, 2, 3, 4, 5].map(() => (
                <Post />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
