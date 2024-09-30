import React, { useRef } from "react";
import { useProfile } from "../../hook/useProfile";
import EditIcon from "../../assets/icons/edit.svg";
import useAxios from "../../hook/useAxios";
import { actions } from "../../actions";

const ProfileImg = () => {
  const { state, dispatch } = useProfile();
  const { api } = useAxios();
  const fileUploadRef = useRef();

  const handleImageUpload = (event) => {
    event.preventDefault();

    const updateImageDisplay = async () => {
      const formData = new FormData();
      for (const file of fileUploadRef.current.files) {
        formData.append("avatar", file);
      }

      const res = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${
          state?.user?.id
        }/avatar`,
        formData
      );

      if (res.status === 200) {
        dispatch({
          type: actions.profile.IMAGE_UPDATED,
          data: res.data,
        });
      }
    };

    fileUploadRef.current.addEventListener("change", updateImageDisplay);
    fileUploadRef.current.click();
  };
  return (
    <div className="relative mb-8 max-h-[180px] max-w-[180px]   rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
      <img
        className="max-w-full "
        src={`${import.meta.env.VITE_SERVER_BASE_URL}/${state?.user?.avatar}`}
        alt="sumit saha"
      />

      <form>
        <button
          className="flex-center absolute bottom-3 right-4 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80"
          type="submit"
          onClick={handleImageUpload}
        >
          <img src={EditIcon} alt="Edit" />
        </button>
        <input type="file" id="file" ref={fileUploadRef} hidden />
      </form>
    </div>
  );
};

export default ProfileImg;
