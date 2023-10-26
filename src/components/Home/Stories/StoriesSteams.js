import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import { IoSendOutline } from "react-icons/io5";
import { formatPostDate, isEmpty } from "../../Utils/Utils";
import LikeStoriesButton from "./LikeStoriesButton";
import { GoClock } from "react-icons/go";

function StoriesSteams() {
  const { id } = useParams();
  const storiesData = useSelector((state) => state.storyReducer);
  const usersData = useSelector((state) => state.usersReducer);

  const [text, setText] = useState("");
  const [elapsedTime, setElapsedTime] = useState(0);
  const [storyProgress, setStoryProgress] = useState(0);

  const navigate = useNavigate();

  {
    useEffect(() => {
      const intervalId = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 0.1);
      }, 100);

      // Nettoyer l'intervalle lorsqu'on quitte le composant
      return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
      // Calculer la progression de l'histoire en pourcentage
      const progress = (elapsedTime / 10) * 100;

      // Mettre à jour la progression de l'histoire
      setStoryProgress(progress);
      setStoryProgress(Math.min(progress, 100));

      // Si la progression atteint 100%, rediriger vers la page d'accueil
      if (progress >= 100) {
        console.log("Story terminée, rediriger ou effectuer une action");
        navigate("/");
      }
    }, [elapsedTime, navigate]);
  }

  const selectedStory = storiesData.find((story) => story._id === id);

  if (!selectedStory) {
    return <div>Story non trouvée</div>;
  }

  const goToNextStory = () => {
    console.log("Selected next");
  };

  const goToPreviewStory = () => {
    console.log("Selected preview");
  };


  return (
    <div className="fixed flex-col  w-full h-full flex bg-black ">
      <div className="sm:w-full w-[98%]  items-center z-20 absolute flex justify-between mt-2">
        <div className="sm:flex hidden sm:ml-2">
          <p className="text-white text-[20px] italic  font-bold">Flajooo</p>
        </div>
        <NavLink to={`/`}>
          <div className="flex ml-2 cursor-pointer">
            <RxCross2 size={30} className="mr-2 text-white" />
          </div>
        </NavLink>
        <div className=" w-[90%] h-2 sm:hidden rounded-lg bg-gray-500">
          <div
            className=" h-2 flex  rounded-lg  bg-gray-200"
            style={{ width: `${storyProgress}%` }}
          ></div>
        </div>
      </div>


      {!selectedStory.media && (
        <div className="flex w-full flex-col  sm:justify-center  h-full  ">
          <div className="flex flex-row sm:mt-0 mt-8 w-[96%] sm:w-[100%]">
            <div className="flex flex-row w-full  space-x-2 items-center">
              <p className="text-white text-center text-[14px] sm:text-[16px] font-medium ">
                {!isEmpty(usersData[0]) &&
                  usersData.map((user) => {
                    if (user._id === selectedStory.posterId)
                      return user.pseudo;
                    else return null;
                  })}
              </p>
            </div>
            <div className="w-64 flex items-center space-x-1 flex-row ">
              <div className="bg-gray-900 h-8 items-center justify-around rounded-lg flex flex-row w-32">
                <GoClock className="text-white" size={16} />
                <p className="text-gray-400 text-center sm:text-[11px] text-[11px] font-medium ">
                  {formatPostDate(selectedStory.createdAt)}
                </p>
              </div>

              <img
                src={
                  (!isEmpty(usersData) &&
                    usersData
                      .map((user) => {
                        if (user._id === selectedStory.posterId)
                          return user.picture;
                        else return null;
                      })
                      .join("")) ||
                  "https://www.bdch.com/sites/bdch.com/assets/images/Staff/profileNone.jpg"
                }
                className="sm:w-10  sm:h-10 h-10 w-10 rounded-full"
                alt="user-pic"
              />
            </div>

          </div>
          <div className="flex flex-col sm:w-[30%] items-center justify-center w-screen h-[100%] sm:h-[100%] mt-2 sm:mt-4 rounded-2xl ">
            <div className="flex  sm:w-[100%] sm:h-[100%] w-[85%]  h-[100%]  rounded-2xl ">
              <div className="flex flex-col w-[100%]  sm:space-y-2  sm:ml-4 ml-2 sm:w-[28%]  sm:mt-4 absolute z-10">
                <div className=" sm:w-[100%] sm:flex hidden sm:rounded-lg sm:bg-gray-500">
                  <div
                    className=" h-2 rounded-lg  bg-gray-200"
                    style={{ width: `${storyProgress}%` }}
                  ></div>
                </div>

              </div>


              <>

                <div className=" flex items-center p-4 bg-green-900 rounded-2xl  justify-center">
                  <p className="text-white text-sm sm:text-xl text-justify font-normal">
                    {selectedStory.text}
                  </p>
                </div>
              </>



            </div>
            <div className="absolute flex justify-between  w-[40%] left-[30%] top-[40%] ">
              <button
                className="w-6 h-6 rounded-full flex items-center hover:bg-slate-300 justify-center bg-gray-600"
                onClick={goToPreviewStory}
              >
                <MdArrowBackIosNew className="text-black" size={16} />
              </button>
              <button
                className=" w-6 flex h-6 rounded-full items-center hover:bg-slate-300 justify-center bg-gray-600"
                onClick={goToNextStory}
              >
                <MdArrowForwardIos className="text-black" size={16} />
              </button>
            </div>
          </div>
          <div className="flex sm:bottom-0 justify-center items-center  ">
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
              <LikeStoriesButton store={selectedStory} />
            </div>
          </div>
        </div>
      )}


      {!selectedStory.text && selectedStory.media && (
        <div className="flex w-full  sm:justify-center  h-full  ">
          <div className="flex flex-col sm:w-[30%] bg-red-500  w-screen h-[100%] sm:h-[100%]   sm:mt-4 rounded-2xl ">
            <div className="flex  sm:w-[100%] sm:h-[90%]  rounded-2xl ">
              <div className="flex flex-col w-[100%]  sm:space-y-2  sm:ml-4 ml-2 sm:w-[28%]  sm:mt-4 absolute z-10">
                <div className=" sm:w-[100%] sm:flex hidden sm:rounded-lg sm:bg-gray-500">
                  <div
                    className=" h-2 rounded-lg  bg-gray-200"
                    style={{ width: `${storyProgress}%` }}
                  ></div>
                </div>
                <div className="flex flex-row sm:mt-0 mt-10 w-[96%] sm:w-[100%]">
                  <div className="flex flex-row w-full  space-x-2 items-center">
                    <p className="text-white text-center text-[16px] font-medium ">
                      {!isEmpty(usersData[0]) &&
                        usersData.map((user) => {
                          if (user._id === selectedStory.posterId)
                            return user.pseudo;
                          else return null;
                        })}
                    </p>
                  </div>
                  <div className="w-64 flex items-center space-x-1 flex-row ">
                    <div className="bg-gray-900 h-8 items-center justify-around rounded-lg flex flex-row w-32">
                      <GoClock className="text-white" size={16} />
                      <p className="text-gray-400 text-center sm:text-[11px] text-[11px] font-medium ">
                        {formatPostDate(selectedStory.createdAt)}
                      </p>
                    </div>

                    <img
                      src={
                        (!isEmpty(usersData) &&
                          usersData
                            .map((user) => {
                              if (user._id === selectedStory.posterId)
                                return user.picture;
                              else return null;
                            })
                            .join("")) ||
                        "https://www.bdch.com/sites/bdch.com/assets/images/Staff/profileNone.jpg"
                      }
                      className="sm:w-10  sm:h-10 h-10 w-10 rounded-full"
                      alt="user-pic"
                    />
                  </div>

                </div>
              </div>


              <>
                <div className="absolute  sm:w-[30%] w-screen items-center justify-center flex h-20 bg-gradient-to-t opacity-25 from-transparent to-gray-900"></div>

                {
                  selectedStory.mediaType === 'image' && (
                    <img
                      src={selectedStory.media}
                      alt="user-img"
                      className="sm:border-2 w-[100%] rounded-xl h-[100%] object-cover"
                    />
                  )
                }

                {
                  selectedStory.mediaType === 'video' && (

                    <video
                      className="border-2 w-[100%] rounded-xl h-[100%] object-cover"
                      autoPlay
                      width="100%"
                    >
                      <source src={selectedStory.media} type="video/webm" />
                      <source src={selectedStory.media} type="video/mp4" />
                    </video>
                  )
                }

              </>



            </div>
            <div className="absolute flex justify-between  w-[40%] left-[30%] top-[40%] ">
              <button
                className="w-6 h-6 rounded-full flex items-center hover:bg-slate-300 justify-center bg-gray-600"
                onClick={goToPreviewStory}
              >
                <MdArrowBackIosNew className="text-black" size={16} />
              </button>
              <button
                className=" w-6 flex h-6 rounded-full items-center hover:bg-slate-300 justify-center bg-gray-600"
                onClick={goToNextStory}
              >
                <MdArrowForwardIos className="text-black" size={16} />
              </button>
            </div>

            <div className="flex sm:bottom-0  sm:relative absolute w-[100%] bottom-0 z-20 justify-center items-center  ">
              <input
                className="text-white bg-transparent border sm:ml-0 ml-2 border-white w-[90%] h-10 text-sm rounded-2xl pl-4 cursor-pointer"
                type="text"
                value={text}
                placeholder="Answer to Madame"
                color="white"
                onChange={(e) => setText(e.target.value)}
              />

              <div className="flex flex-row">
                <div className="flex w-12 h-12 mt-2    cursor-pointer justify-center items-center rounded-full">
                  <IoSendOutline className="text-white" size={30} />
                </div>
                <LikeStoriesButton store={selectedStory} />
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedStory.media && selectedStory.text && (
        <div className="flex w-full flex-col sm:justify-center  h-full  ">
          <div className="flex flex-col sm:w-[30%]  items-center justify-center w-screen h-[100%] sm:h-[100%]   sm:mt-4 sm:rounded-2xl ">
            <div className="flex  sm:w-[100%] sm:h-[90%] w-[100%] h-[100%]  justify-center   sm:mt-0 mt-10 sm:rounded-2xl ">
              <div className="flex flex-col w-[100%]  sm:space-y-2  sm:ml-4 ml-2 sm:w-[28%]  sm:mt-4 absolute z-10">
                <div className=" sm:w-[100%] sm:flex hidden sm:rounded-lg sm:bg-gray-500">
                  <div
                    className=" h-2 rounded-lg  bg-gray-200"
                    style={{ width: `${storyProgress}%` }}
                  ></div>
                </div>
                <div className="flex flex-row sm:mt-0 w-[96%] sm:w-[100%]">
                  <div className="flex flex-row w-full  space-x-2 items-center">
                    <p className="text-white text-center sm:text-[16px] text-[14px] font-medium ">
                      {!isEmpty(usersData[0]) &&
                        usersData.map((user) => {
                          if (user._id === selectedStory.posterId)
                            return user.pseudo;
                          else return null;
                        })}
                    </p>
                  </div>
                  <div className="w-64 flex items-center space-x-1 flex-row ">
                    <div className="bg-gray-900 h-8 items-center justify-around rounded-lg flex flex-row w-32">
                      <GoClock className="text-white" size={16} />
                      <p className="text-gray-400 text-center sm:text-[11px] text-[11px] font-medium ">
                        {formatPostDate(selectedStory.createdAt)}
                      </p>
                    </div>

                    <img
                      src={
                        (!isEmpty(usersData) &&
                          usersData
                            .map((user) => {
                              if (user._id === selectedStory.posterId)
                                return user.picture;
                              else return null;
                            })
                            .join("")) ||
                        "https://www.bdch.com/sites/bdch.com/assets/images/Staff/profileNone.jpg"
                      }
                      className="sm:w-10  sm:h-10 h-10 w-10 rounded-full"
                      alt="user-pic"
                    />
                  </div>

                </div>
              </div>


              <>
                <div className=" sm:w-[100%] sm:h-[100%] w-[78%] h-[92%] sm:mt-0 mt-10 rounded-2xl flex flex-col items-center justify-center">
                  <div className="sm:absolute hidden sm:w-[30%] w-screen items-center justify-center sm:flex h-20 bg-gradient-to-t opacity-25 from-transparent to-gray-900"></div>


                  {selectedStory.mediaType === 'image' && (
                    <img
                      src={selectedStory.media}
                      alt="user-img"
                      className="sm:border-2 w-[100%] rounded-xl  h-[100%] object-cover"
                    />
                  )
                  }
                  {
                    selectedStory.mediaType === 'video' && (
                      <video
                        className="sm:border-2 w-[100%] rounded-xl  h-[100%] object-cover"
                        autoPlay
                        width="100%"
                      >
                        <source src={selectedStory.media} type="video/webm" />
                        <source src={selectedStory.media} type="video/mp4" />
                      </video>
                    )
                  }


                  <p className="text-white absolute top-[85%] text-justify sm:text-xl text-lg font-normal sm:ml-4">
                    {selectedStory.text}
                  </p>
                  <div className="absolute bottom-14 sm:w-[30%] opacity-50 w-screen items-center justify-center flex h-20 bg-gradient-to-b from-transparent to-gray-900"></div>

                </div>


              </>

            </div>
            <div className="absolute flex justify-between  w-[40%] left-[30%] top-[40%] ">
              <button
                className="w-6 h-6 rounded-full flex items-center hover:bg-slate-300 justify-center bg-gray-600"
                onClick={goToPreviewStory}
              >
                <MdArrowBackIosNew className="text-black" size={16} />
              </button>
              <button
                className=" w-6 flex h-6 rounded-full items-center hover:bg-slate-300 justify-center bg-gray-600"
                onClick={goToNextStory}
              >
                <MdArrowForwardIos className="text-black" size={16} />
              </button>
            </div>


          </div>
          <div className="flex sm:bottom-0 justify-center items-center  ">
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
              <LikeStoriesButton store={selectedStory} />
            </div>
          </div>
        </div>
      )}




    </div>
  );
}

export default StoriesSteams;
