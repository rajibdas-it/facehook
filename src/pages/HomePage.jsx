/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useReducer } from "react";

import { initialState, postReducer } from "../reducers/PostReducer";
import useAxios from "../hook/useAxios";
import PostList from "../Components/posts/PostList";
import { actions } from "../actions";

const HomePage = () => {
  const [state, dispatch] = useReducer(postReducer, initialState);
  const { api } = useAxios();

  useEffect(() => {
    dispatch({ type: actions.post.DATA_FETCHING });

    const fetchPosts = async () => {
      try {
        const res = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/posts`
        );

        if (res.status === 200) {
          dispatch({ type: actions.post.DATA_FETCHED, data: res.data });
        }
      } catch (error) {
        console.error(error);
        dispatch({ type: actions.post.DATA_FETCH_ERROR, error: error.message });
      }
    };

    fetchPosts();
  }, []);
  console.log(state?.posts);

  if (state?.loading) {
    return <p>Loading</p>;
  }
  if (state?.error) {
    return <p>Error in fetching</p>;
  }

  return (
    <div>
      <PostList posts={state?.posts} />
    </div>
  );
};

export default HomePage;
