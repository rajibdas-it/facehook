import React, { useEffect, useState } from "react";
import { useAuth } from "../hook/useAuth";
import useAxios from "../hook/useAxios";

const ProfilePage = () => {
  const { auth } = useAuth();
  const { api } = useAxios();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchProfile = async () => {
      try {
        const res = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        );
        // console.log(res);
        setUser(res?.data?.user);
        setPosts(res?.data?.posts);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [api, auth?.user?.id]);

  if (loading) {
    return <div>Fetching your profile data</div>;
  }
  return (
    <div>
      Welcome, {user?.firstName} {user?.lastName}
      <p>You have {posts.length} posts.</p>
    </div>
  );
};

export default ProfilePage;
