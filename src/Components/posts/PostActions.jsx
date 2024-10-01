import React from "react";

import likeIcon from "../../assets/icons/like.svg";
import commentIcon from "../../assets/icons/comment.svg";
import shareIcon from "../../assets/icons/share.svg";

const PostActions = ({ post }) => {
  console.log(post.length);
  return (
    <div className="flex items-center justify-between py-6 lg:px-10 lg:py-8">
      {/* <!-- Like Button --> */}
      <button className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm">
        <img src={likeIcon} alt="Like" />
        <span>Like</span>
      </button>

      {/* <!-- Comment Button --> */}
      <button className="icon-btn space-x-2 px-6 py-3 text-xs lg:px-12 lg:text-sm">
        <img src={commentIcon} alt="Comment" />
        <span>Comment(2)</span>
      </button>
      {/* <!-- Share Button -->

            <!-- Like Button --> */}
      <button className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm">
        <img src={shareIcon} alt="Share" />
        <span>Share</span>
      </button>
    </div>
  );
};

export default PostActions;
