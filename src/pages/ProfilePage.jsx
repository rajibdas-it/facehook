import React, { useEffect, useState } from "react";
import { useAuth } from "../hook/useAuth";
import useAxios from "../hook/useAxios";
import { useProfile } from "../hook/useProfile";
import { actions } from "../actions";
import ProfileInfo from "../Components/profile/ProfileInfo";
import MyPosts from "../Components/profile/MyPosts";

const ProfilePage = () => {
  const { auth } = useAuth();
  const { api } = useAxios();
  const { state, dispatch } = useProfile();

  useEffect(() => {
    dispatch({ type: actions.profile.DATA_FETCHING });
    const fetchProfile = async () => {
      try {
        const res = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        );
        // console.log(res);
        // setUser(res?.data?.user);
        // setPosts(res?.data?.posts);
        if (res.status === 200) {
          dispatch({ type: actions.profile.DATA_FETCHED, data: res.data });
        }
      } catch (error) {
        console.error(error);
        dispatch({
          type: actions.profile.DATA_FETCH_ERROR,
          error: error.mesaage,
        });
      }
    };
    fetchProfile();
  }, [api, auth?.user?.id, dispatch]);

  if (state?.loading) {
    return <div>Fetching your profile data</div>;
  }
  return (
    <div>
      <ProfileInfo />
      <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl">Your Posts</h4>
      <MyPosts />
    </div>
  );
};

export default ProfilePage;
