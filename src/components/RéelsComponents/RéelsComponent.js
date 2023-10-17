import React from "react";
import { BiMessageRounded } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { IoSendOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import LeftBarPro from "../NavBar/LeftBarPro";

const RéelsComponent = () => {
  return (
    <>
      <div className="fixed flex-col over w-full overflow-y-scroll h-full flex bg-black ">
        <LeftBarPro />
        <div className="flex flex-col w-full items-center  h-screen  ">
          <div className="flex w-[30%] flex-row  justify-between   h-screen   ">
            <div className="flex w-[85%]  items-center justify-center  h-screen   ">
              <div className="flex flex-col w-[100%] h-[90%] border-2  bg-cyan-500 shadow-2xl shadow-cyan-500/50 rounded-2xl">
                <div className="flex w-[100%] h-[100%] rounded-2xl">
                  <img
                    src="https://fr.web.img4.acsta.net/pictures/19/08/05/16/55/2130716.jpg"
                    alt="user-img"
                    className="w-[100%] rounded-xl h-[100%] object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center  mt-40 ">
              <div className="flex flex-col">
                <div className="flex flex-col justify-center items-center mt-6 ">
                  <div className="flex flex-col w-12 h-12   cursor-pointer justify-center items-center rounded-full">
                    <AiOutlineHeart className="text-white" size={30} />
                  </div>
                  <p className="text-white text-[12px]">Like</p>
                </div>
                <div className="flex flex-col justify-center items-center mt-6 ">
                  <div className="flex flex-col w-12 h-12  cursor-pointer justify-center items-center rounded-full">
                    <BiMessageRounded className="text-white" size={30} />
                  </div>
                  <p className="text-white text-[12px]">Like</p>
                </div>
                <div className="flex flex-col justify-center items-center mt-6 ">
                  <div className="flex flex-col w-12 h-12   cursor-pointer justify-center items-center rounded-full">
                    <IoSendOutline className="text-white" size={30} />
                  </div>
                  <p className="text-white text-[12px]">Like</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RéelsComponent;
