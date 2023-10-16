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
            <img
              src="https://cap.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcap.2F2018.2F11.2F08.2Fa6f621fc-0d8b-45ca-aa77-b89536ace837.2Ejpeg/1200x630/background-color/ffffff/quality/70/cr/wqkgwqkyMDEzIFRNIFRFTEVWSVNJT04gUFJPRFVDVElPTlMgTElNSVRFRC9UNSBWSUtJTkdTIFBST0RVQ1RJT05TIElOQy4gQUxMIFJJR0hUUyBSRVNFUlZFRCAvIE1HTS4gLyBDQVBJVEFM/au-boulot-inspirez-vous-du-heros-de-la-serie-vikings-1315042.jpg"
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
