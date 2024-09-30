import React from "react";
import { useProfile } from "../../hook/useProfile";
import PostList from "../posts/PostList";

const MyPosts = () => {
  const { state, dispatch } = useProfile();
  const posts = state?.posts;
  return (
    <>
      <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl">Your Posts</h4>
      <PostList posts={posts} />
    </>
  );
};

export default MyPosts;
