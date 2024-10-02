import React, { useEffect, useReducer } from "react";
import { useAuth } from "../hook/useAuth";
import { initialState, postReducer } from "../reducers/PostReducer";
import useAxios from "../hook/useAxios";
import PostList from "../Components/posts/PostList";
import { actions } from "../actions";

const HomePage = () => {
  const [state, dispatch] = useReducer(postReducer, initialState);
  const { api } = useAxios();

  useEffect(() => {
    dispatch({ type: actions.post.DATA_FETCHING });
  }, []);

  return (
    <div>
      <PostList />
    </div>
  );
};

export default HomePage;
