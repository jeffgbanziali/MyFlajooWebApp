import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineHeart } from "react-icons/ai";
import { IoSend } from "react-icons/io5";
import { IoSendOutline } from "react-icons/io5";

function StoriesSteams() {
  //const { id } = useParams();
  // const storiesData = useSelector((state) => state.storyReducer);
  // const usersData = useSelector((state) => state.usersReducer);

  const [text, setText] = useState("");

  // Trouver la story correspondante dans les données Redux
  // const selectedStory = storiesData.find((story) => story._id === id);

  // if (!selectedStory) {
  // Gérer le cas où la story n'est pas trouvée
  //return <div>Story non trouvée</div>;
  // }

  // Trouver l'utilisateur correspondant dans les données Redux
  //const user = usersData.find((user) => user._id === selectedStory.posterId);

  return (
    <div className="fixed flex-col  w-full h-full flex bg-black ">
      <div className="w-full  absolute flex justify-between mt-2">
        <div className="flex ml-2">
          <p className="text-white text-[20px] italic  font-bold">Flajooo</p>
        </div>
        <NavLink to={`/`}>
          <div className="flex ml-2 cursor-pointer">
            <RxCross2 size={30} className="mr-2 text-white" />
          </div>
        </NavLink>
      </div>
      <div className="flex w-full  justify-center  h-full  ">
        <div className="flex flex-col w-[30%] h-[100%]  mt-4 rounded-2xl ">
          <div className="flex  w-[100%]  h-[90%]  rounded-2xl ">
            <div className="flex flex-row space-x-2 ml-4 w-[28%] mt-4 items-center justify-center rounded-full absolute z-20">
              <div className="flex flex-row justify-between w-[100%]">
                <div className="flex flex-row space-x-2 items-center">
                  <img
                    src="https://www.bdch.com/sites/bdch.com/assets/images/Staff/profileNone.jpg"
                    className="w-10 h-10   rounded-full"
                    alt="user-pic"
                  />
                  <p className="text-white text-center text-[16px] font-medium ">
                    Bonjour
                  </p>
                  <p className="text-gray-400 text-center text-[16px] font-medium ">
                    21h
                  </p>
                </div>
                <div className="flex flex-row space-x-2 items-center">
                  <p className="text-white text-center text-[16px] font-medium ">
                    Bonjour
                  </p>
                  <p className="text-gray-400 text-center text-[16px] font-medium ">
                    21h
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute  w-[30%] items-center justify-center flex h-20 bg-gradient-to-t from-transparent to-gray-900"></div>
            <img
              src="https://www.viking-clan.com/cdn/shop/articles/Ragnar_Lothbrok_mythe_ou_realite_1200x1200.jpg?v=1651614627"
              alt="user-img"
              className="  border-2 w-[100%]  rounded-xl h-[100%] object-cover"
            />
          </div>

          <div className="flex justify-center items-center  ">
            <input
              className="text-white bg-transparent border border-white w-[90%] h-10 text-sm rounded-2xl pl-4 cursor-pointer"
              type="text"
              value={text}
              placeholder="Answer to Madame"
              style={{ outline: "none", color: "white" }}
              onChange={(e) => setText(e.target.value)}
            />

            <div className="flex flex-row">
              <div className="flex w-12 h-12 mt-2    cursor-pointer justify-center items-center rounded-full">
                <IoSendOutline className="text-white" size={30} />
              </div>
              <div className="flex w-12 h-12 mt-2    cursor-pointer justify-center items-center rounded-full">
                <AiOutlineHeart className="text-gray-100 " size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoriesSteams;
