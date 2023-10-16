import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineHeart } from "react-icons/ai";
import { IoSendOutline } from "react-icons/io5";
import { formatPostDate, isEmpty } from "../../Utils/Utils";
import LikeStoriesButton from "./LikeStoriesButton";

function StoriesSteams() {
  const { id } = useParams();
  const storiesData = useSelector((state) => state.storyReducer);
  const usersData = useSelector((state) => state.usersReducer);

  const [text, setText] = useState("");
  const [elapsedTime, setElapsedTime] = useState(0);
  const [storyProgress, setStoryProgress] = useState(0);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const navigate = useNavigate();

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

    // Si la progression atteint 100%, passer à la story suivante
    if (progress >= 100) {
      goToNextStory();
    }
  }, [elapsedTime]);

  const selectedStory = storiesData[currentStoryIndex];

  const goToNextStory = () => {
    // Passer à la story suivante
    const nextIndex = currentStoryIndex + 1;

    if (nextIndex < storiesData.length) {
      // Si la story suivante existe, passer à celle-ci
      setCurrentStoryIndex(nextIndex);
    } else {
      // Si la story suivante n'existe pas, passer à la story d'un autre utilisateur
      const nextUserStories = storiesData.filter(
        (story) => story.posterId !== selectedStory.posterId
      );

      if (nextUserStories.length > 0) {
        setCurrentStoryIndex(0); // Passer à la première story de l'autre utilisateur
      } else {
        // Si aucun utilisateur suivant n'a de story, rediriger vers la page d'accueil
        navigate("/");
      }
    }
  };

  const goToNextUserStory = () => {
    // Passer à la story d'un autre utilisateur
    const nextUserStories = storiesData.filter(
      (story) => story.posterId !== selectedStory.posterId
    );

    if (nextUserStories.length > 0) {
      setCurrentStoryIndex(0); // Passer à la première story de l'autre utilisateur
    } else {
      // Si aucun utilisateur suivant n'a de story, rediriger vers la page d'accueil
      navigate("/");
    }
  };

  if (!selectedStory) {
    // Gérer le cas où la story n'est pas trouvée
    return <div>Story non trouvée</div>;
  }

  // Trouver l'utilisateur correspondant dans les données Redux
  const user = usersData.find((user) => user._id === selectedStory.posterId);

  return (
    <div className="fixed flex-col  w-full h-full flex bg-black ">
      <div className="w-full  absolute flex justify-between mt-2">
        <div className="flex ml-2">
        <button
              className="   h-10 rounded-lg  bg-gray-200"
              onClick={goToNextUserStory}
            >
              Next User Story
            </button>
          <p className="text-white text-[20px] italic  font-bold">Flajooo</p>
        </div>
        <NavLink to={`/`}>
          <div className="flex ml-2 cursor-pointer">
            <button
              className="  h-10 rounded-lg  bg-gray-200"
              onClick={goToNextStory}
            >
              Next Story
            </button>
           
            <RxCross2 size={30} className="mr-2 text-white" />
          </div>
        </NavLink>
      </div>
      <div className="flex w-full  justify-center  h-full  ">
        <div className="flex flex-col w-[30%] h-[100%]  mt-4 rounded-2xl ">
          <div className="flex  w-[100%] h-[90%]  rounded-2xl ">
            <div className="flex flex-col space-y-2 ml-4 w-[28%]  mt-4  rounded-full absolute z-20">
              <div className=" w-[100%] native rounded-lg bg-gray-500">
                <div
                  className="  h-2 rounded-lg  bg-gray-200"
                  style={{ width: `${storyProgress}%` }}
                ></div>
              </div>
              <div className="flex flex-row justify-between w-[100%]">
                <div className="flex flex-row space-x-2 items-center">
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
                    className="w-10 h-10   rounded-full"
                    alt="user-pic"
                  />
                  <p className="text-white text-center text-[16px] font-medium ">
                    {!isEmpty(usersData[0]) &&
                      usersData.map((user) => {
                        if (user._id === selectedStory.posterId)
                          return user.pseudo;
                        else return null;
                      })}
                  </p>
                  <p className="text-gray-400 text-center text-[16px] font-medium ">
                    {formatPostDate(selectedStory.createdAt)}
                  </p>
                </div>
                <div className="flex flex-row space-x-2 items-center">
                  <p className="text-white text-center text-[16px] font-medium ">
                    {selectedStory.likers.length} likes
                  </p>
                  <p className="text-gray-400 text-center text-[16px] font-medium ">
                    21h
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute  w-[30%] items-center justify-center flex h-20 bg-gradient-to-t from-transparent to-gray-900"></div>
            <img
              src={selectedStory.media}
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
              <LikeStoriesButton store={selectedStory} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoriesSteams;
