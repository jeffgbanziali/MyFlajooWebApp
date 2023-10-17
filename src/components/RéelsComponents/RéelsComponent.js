import React, { useEffect, useState } from "react";
import { BiMessageRounded } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { IoSendOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { GiMusicalNotes } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { getVideoReels } from "../../actions/reels.action";
import { isEmpty } from "../Utils/Utils";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineEye } from "react-icons/hi";

const RéelsComponent = () => {
  const [loadPosts, setLoadPosts] = useState(true);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const reelsData = useSelector((state) => state.videoReelsReducer);
  const usersData = useSelector((state) => state.usersReducer);

  useEffect(() => {
    if (loadPosts) {
      dispatch(getVideoReels());
      setLoadPosts(false);
    }
  }, [loadPosts, dispatch]);

  useEffect(() => {
    !isEmpty(usersData) && setLoading(false);
  }, [usersData]);

  const rotateImage = (element, speed) => {
    let rotation = 0;
    const delay = speed || 1000; // Délai par défaut de 500 ms si la vitesse n'est pas spécifiée

    const rotate = () => {
      rotation += 1;
      element.style.transform = `rotate(${rotation}deg)`;

      if (rotation < 360) {
        requestAnimationFrame(rotate);
      } else {
        rotation = 0;
        requestAnimationFrame(rotate);
      }
    };

    rotate();
  };

  return (
    <>
      <div className="fixed flex-col over w-full overflow-y-scroll h-full flex bg-black ">
        <NavLink to={`/`}>
          <div className="flex fixed ml-2 cursor-pointer">
            <RxCross2 size={30} className="mr-2 text-white" />
          </div>
        </NavLink>
        {!isEmpty(reelsData) &&
          reelsData.map((reels) => {
            return (
              <div
                key={reels._id}
                className="flex flex-col w-full items-center  h-screen  "
              >
                <div className="flex w-[30%] flex-row  justify-between  h-screen   ">
                  <div className="flex  justify-between absolute w-[24%] items-center ml-4 mt-[40%] ">
                    <div className="flex flex-row">
                      <div className="flex flex-col justify-start items-start  ">
                        <p className="text-white font-[700] text-[16px]">
                          {!isEmpty(usersData[0]) &&
                            usersData.map((user) => {
                              if (user._id === reels.posterId)
                                return user.pseudo;
                              else return null;
                            })}
                        </p>
                        <p className="text-gray-200 text-[12px]">
                          {reels.description}
                        </p>
                        <div className="flex mt-2 space-x-4 flex-row justify-start items-center  ">
                          <img
                            className="w-10 h-10 rounded-full"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Disque_Vinyl.svg/1200px-Disque_Vinyl.svg.png"
                            alt="user-pic"
                            onLoad={(e) => rotateImage(e.target, 60)}
                          />
                          <div className="flex flex-row p-2 h-6 justify-center rounded-xl space-x-2 items-center">
                            <div className="flex  cursor-pointer justify-center items-center ">
                              <GiMusicalNotes
                                className="text-white"
                                size={12}
                              />
                            </div>
                            <p className="text-white text-center text-[12px] font-medium ">
                              zoumba cafou
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[85%]  items-center justify-center  h-screen   ">
                    <div className="flex flex-col w-[100%] h-[90%] border-2 bg-cyan-500 shadow-2xl shadow-cyan-500/50 rounded-2xl">
                      {reels.videoPath && (
                        <div className="flex flex-col w-[100%]  h-[100%] rounded-2xl">
                          <div className="absolute z-20  flex flex-row space-y-2 ml-2 p-2 justify-between w-[24%] mt-6">
                            <div className="flex items-center flex-row space-x-2 ">
                              <img
                                className="w-10 h-10   rounded-full"
                                src="https://images8.alphacoders.com/665/665330.png"
                                alt="user-pic"
                              />
                              <p className="text-white text-center text-[16px] font-medium ">
                                {!isEmpty(usersData[0]) &&
                                  usersData.map((user) => {
                                    if (user._id === reels.posterId)
                                      return user.pseudo;
                                    else return null;
                                  })}
                              </p>
                            </div>
                            <div className="flex flex-row p-2  bg-red-500 justify-center rounded-xl space-x-2 items-center">
                              <div className="flex  cursor-pointer justify-center items-center ">
                                <HiOutlineEye
                                  className="text-white"
                                  size={16}
                                />
                              </div>
                              <p className="text-white text-center text-[16px] font-medium ">
                                {reels.viewers.length}
                              </p>
                            </div>
                          </div>
                          <video
                            className="rounded-xl h-[100%] object-cover"
                            autoPlay
                            width="100%"
                          >
                            <source src={reels.videoPath} type="video/webm" />
                            <source src={reels.videoPath} type="video/mp4" />
                          </video>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between items-center  mt-40 ">
                    <div className="flex flex-col">
                      <div className="flex flex-col justify-center items-center mt-6 ">
                        <div className="flex flex-col w-12 h-12   cursor-pointer justify-center items-center rounded-full">
                          <AiOutlineHeart className="text-white" size={30} />
                        </div>
                        <p className="text-white text-[12px]">
                          {reels.likers.length}
                        </p>
                      </div>
                      <div className="flex flex-col justify-center items-center mt-6 ">
                        <div className="flex flex-col w-12 h-12  cursor-pointer justify-center items-center rounded-full">
                          <BiMessageRounded className="text-white" size={30} />
                        </div>
                        <p className="text-white text-[12px]">
                          {reels.comments.length}
                        </p>
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
            );
          })}
      </div>
    </>
  );
};

export default RéelsComponent;
