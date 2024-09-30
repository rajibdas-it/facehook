import React from "react";
import Bio from "./Bio";
import { useProfile } from "../../hook/useProfile";

const ProfileInfo = () => {
  const { state, dispatch } = useProfile();
  return (
    <div>
      <Bio />
    </div>
  );
};

export default ProfileInfo;
