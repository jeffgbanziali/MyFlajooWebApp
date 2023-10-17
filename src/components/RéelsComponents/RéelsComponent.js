import React, { useEffect, useState } from "react";
import { BiMessageRounded } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { IoSendOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import LeftBarPro from "../NavBar/LeftBarPro";
import { useDispatch, useSelector } from "react-redux";
import { getVideoReels } from "../../actions/reels.action";
import { isEmpty } from "../Utils/Utils";

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
  return (
    <>
      <div className="fixed flex-col over w-full overflow-y-scroll h-full flex bg-black ">
        <LeftBarPro />
        {!isEmpty(reelsData) &&
          reelsData.map((reels) => {
            return (
              <div key={reels._id} className="flex flex-col w-full items-center  h-screen  ">
                <div className="flex w-[30%] flex-row  justify-between   h-screen   ">
                  <div className="flex w-[85%]  items-center justify-center  h-screen   ">
                    <div className="flex flex-col w-[100%] h-[90%] border-2  bg-cyan-500 shadow-2xl shadow-cyan-500/50 rounded-2xl">
                      {reels.videoPath && (
                        <div className="flex w-[100%] h-[100%] rounded-2xl">
                          <video
                            className="rounded-xl h-[100%] object-cover"
                            controls
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
                        <p className="text-white text-[12px]">Like</p>
                      </div>
                      <div className="flex flex-col justify-center items-center mt-6 ">
                        <div className="flex flex-col w-12 h-12  cursor-pointer justify-center items-center rounded-full">
                          <BiMessageRounded className="text-white" size={30} />
                        </div>
                        <p className="text-white text-[12px]">Commentaire</p>
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
