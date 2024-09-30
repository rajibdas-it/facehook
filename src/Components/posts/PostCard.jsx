import React from "react";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostActions from "./PostActions";
import PostComments from "./PostComments";

const PostCard = ({ post }) => {
  return (
    <article className="card mt-6 lg:mt-8">
      <PostHeader post={post} />
      <PostBody post={post} />
      <PostActions post={post} />
      <PostComments post={post} />
    </article>
  );
};

export default PostCard;
