import React, { useContext, useEffect, useState } from "react";
import { dislikeStory, likeStory } from "../../../actions/story.action";
import { useDispatch } from "react-redux";
import { UidContext } from "../../../Context/AppContext";
import { FaHeart } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

const LikeStoriesButton = ({ store }) => {
  const [liked, setLiked] = useState(false);
  const uid = useContext(UidContext);
  const dispatch = useDispatch();

  const like = () => {
    dispatch(likeStory(store._id, uid));
    setLiked(true);
  };

  const unlike = () => {
    dispatch(dislikeStory(store._id, uid));
    setLiked(false);
  };

  useEffect(() => {
    if (store.likers.includes(uid)) setLiked(true);
    else setLiked(false);
  }, [uid, store.likers, liked]);
  return (
    <div>
      {uid && liked === false && (
        <div
          onClick={like}
          className="flex w-12 h-12 mt-2    cursor-pointer justify-center items-center rounded-full"
        >
          <AiOutlineHeart
            className="text-white transition duration-200 transform hover:scale-110"
            size={30}
          />
        </div>
      )}
      {uid && liked && (
        <div
          onClick={unlike}
          className="flex w-12 h-12 mt-2    cursor-pointer justify-center items-center rounded-full"
        >
          <FaHeart
            className="text-red-500 transition duration-200 transform hover:scale-110 delay-100"
            size={30}
          />
        </div>
      )}
    </div>
  );
};

export default LikeStoriesButton;
