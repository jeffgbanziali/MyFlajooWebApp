import React, { useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import StoriesPost from "./StoriesPost";
import CreateStories from "./createStories";

const Stories = () => {
  const userData = useSelector((state) => state.userReducer);
  const [store, setStore] = useState(false);

  return (
    <>
      <div className="w-screen flex flex-row p-2 overflow-x-auto rounded-2xl  sm:w-full bg-black  ">
        <div
          onClick={() => setStore(true)}
          className=" items-center p-2 flex space-x-1  rounded-[1rem]  "
        >
          <div className="w-32  h-48 bg-white flex items-center justify-center  rounded ">
            <img
              src={userData.picture}
              className=" w-32  h-48 rounded "
              alt=""
            />
            <div className=" flex w-10 h-10 bg-gray-400 mt-28 items-center justify-center rounded-full absolute z-20  ">
              <BsPlusCircleFill size="30" color="red" />
            </div>
          </div>
        </div>
        {store && (
          <>
            <div className=" absolute z-40 top-0 bg-black left-0 w-full h-full bg-opacity-75 flex ">
              <span
                className="text-gray-200 flex ml-4 mt-2  justify-end text-xl cursor-pointer"
                onClick={() => setStore(false)}
              >
                &#10005;
              </span>
              <CreateStories />
            </div>
          </>
        )}
        <StoriesPost />
      </div>
    </>
  );
};

export default Stories;
