import React, { useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import StoriesPost from "./StoriesPost";

const Stories = () => {
  const userData = useSelector((state) => state.userReducer);
  const [store, setStore] = useState(false);

  return (
    <>
      <div className="w-screen flex flex-row  overflow-x-auto  sm:w-full   ">
        <div className=" items-center relative  p-2 flex flex-col space-x-1 rounded-xl  ">
          <NavLink to={"/createStories"}>
            <div
              onClick={() => setStore(true)}
              className="sm:w-32 sm:h-48 h-32 w-24  bg-black  bg-opacity-90 flex items-center justify-center  rounded-xl "
            >
              <img
                src={userData.picture}
                className=" sm:w-32 sm:h-48 h-32 w-24 rounded-xl "
                alt=""
              />
            </div>
          </NavLink>
          <div className="flex flex-col absolute sm:mt-32 mt-20 space-y-1 items-center  justify-center rounded-full  z-20 ">
            <div className=" flex sm:w-8 sm:h-8 w-6 h-6 bg-white justify-center items-center rounded-full ">
              <BsPlusCircleFill size="30" color="blue" />
            </div>
            <p className="text-white text-center sm:text-[12px] text-[9px] font-bold">
              Create your story
            </p>
          </div>
        </div>

        <StoriesPost />
      </div>
    </>
  );
};

export default Stories;
