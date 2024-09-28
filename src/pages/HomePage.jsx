import React from "react";
import Header from "../Components/common/Header";
import { useAuth } from "../hook/useAuth";

const HomePage = () => {
  const { auth } = useAuth();
  // console.log(auth);
  return (
    <div>
      <h1>Homepage</h1>
    </div>
  );
};

export default HomePage;
