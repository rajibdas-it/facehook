import React from "react";

const PostBody = ({ post }) => {
  return (
    <div className="border-b border-[#3F3F3F] py-4 lg:py-5 lg:text-xl">
      <p>{post.content ?? "No Content Available"}</p>
      <div className="flex items-center justify-center overflow-hidden">
        {post.image && (
          <img
            className="w-1/2"
            src={`${import.meta.env.VITE_SERVER_BASE_URL}/${post?.image}`}
            alt="poster"
          />
        )}
      </div>
    </div>
  );
};

export default PostBody;
