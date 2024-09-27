import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "../../assets/icons/logout.svg";
import { AuthContext } from "../../context";

const Logout = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const handleLogout = () => {
    setAuth({});
    navigate("/login");
  };
  return (
    <button className="icon-btn" onClick={handleLogout}>
      <img src={LogoutIcon} alt="Logout" />
    </button>
  );
};

export default Logout;
