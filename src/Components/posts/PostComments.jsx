import React, { useState } from "react";
import { useAvatar } from "../../hook/useAvatar";
import PostCommentsList from "./PostCommentsList";
import useAxios from "../../hook/useAxios";
import { useAuth } from "../../hook/useAuth";

const PostComments = ({ post }) => {
  const { auth } = useAuth();
  const { avatarURL } = useAvatar(post);
  const [showComments, setShowComments] = useState(false);

  const [comments, setComments] = useState(post?.comments);
  const [comment, setComment] = useState("");

  const { api } = useAxios();

  const addComment = async (e) => {
    const keyCode = e.keyCode;
    if (keyCode === 13) {
      // ei 13 holo enter button er key code
      try {
        const res = await api.patch(
          `${import.meta.env.VITE_SERVER_BASE_URL}/posts/${post.id}/comment`,
          { comment }
        );
        if (res.status === 200) {
          setComments([...res.data.comments]);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      {/* <!-- comment input box --> */}
      <div className="flex-center mb-3 gap-2 lg:gap-4">
        <img
          className="max-w-7 max-h-7 rounded-full lg:max-h-[34px] lg:max-w-[34px]"
          src={`${import.meta.env.VITE_SERVER_BASE_URL}/${auth?.user?.avatar}`}
          alt="avatar"
        />

        <div className="flex-1">
          <input
            type="text"
            className="h-8 w-full rounded-full bg-lighterDark px-4 text-xs focus:outline-none sm:h-[38px]"
            name="post"
            id="post"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onKeyDown={(e) => addComment(e)} //button chara enter dilei kaj korbe. er jonno onKeyDown
            placeholder="What's on your mind?"
          />
        </div>
      </div>
      {/* <!-- comment filter button --> */}
      <div className="mt-4">
        <button
          onClick={() => setShowComments(!showComments)}
          className="text-gray-300 max-md:text-sm"
        >
          {!showComments ? "All Comment ▾" : "Hide Comment ▾"}
        </button>
      </div>
      {showComments && <PostCommentsList comments={comments} />}
    </div>
  );
};

export default PostComments;
