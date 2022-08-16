import React from "react";
import Post from "../components/Post";

function PostPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 px-[10vw] pt-4">
      <div className="col-span-1 md:col-span-6">
        <Post comment={true} />
      </div>
      <div className="md:col-span-1"></div>

      <div className="hidden md:flex flex-col justify-center gap-8 md:col-span-5">
        <div>
          <div className="w-32 h-32 mb-2 mx-auto  rounded-full overflow-hidden cursor-pointer">
            <img
              src="/assets/logo.png"
              alt="avatar"
              className="w-full h-full rounded-full"
            />
          </div>
          <p className="text-2xl text-center font-semibold capitalize cursor-pointer">
            Fred Raymond
          </p>
          <p className="text-sm text-center font-normal cursor-pointer">
            Active now
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-2xl font-semibold">Posts by User</p>
          {[1, 2, 3, 4, 5].map((item) => (
            <Post key={item} comment={false} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostPage;
