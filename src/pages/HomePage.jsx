import React from "react";
import Header from "../Components/common/Header";
import { useAuth } from "../hook/useAuth";

const HomePage = () => {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <div>
      <Header />
    </div>
  );
};

export default HomePage;
