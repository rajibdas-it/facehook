import React from "react";
import { useAuth } from "../hook/useAuth";
import { Outlet, Navigate } from "react-router-dom";
import Header from "../Components/common/Header";

const PrivateRoutes = () => {
  const { auth } = useAuth();
  return (
    <>
      {auth.user ? (
        <>
          {" "}
          <Header />
          <main className="mx-auto max-w-[1020px] py-8">
            <div className="container">
              <Outlet />
            </div>
          </main>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default PrivateRoutes;
