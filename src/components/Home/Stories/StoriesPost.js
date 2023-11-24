import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { isEmpty } from "../../Utils/Utils";
import { getStories } from "../../../actions/story.action";

function StoriesPost() {
  const [loadPosts, setLoadPosts] = useState(true);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const storiesData = useSelector((state) => state.storyReducer);
  const usersData = useSelector((state) => state.usersReducer);

  useEffect(() => {
    if (loadPosts) {
      dispatch(getStories());
      setLoadPosts(false);
    }
  }, [loadPosts, dispatch]);

  useEffect(() => {
    !isEmpty(usersData) && setLoading(false);
  }, [usersData]);

  return (
    <div className="items-center flex  relative justify-center  space-x-1 sm:space-x-2 rounded-lg">
      {!isEmpty(storiesData) &&
        storiesData.map((item) => {
          return (
            <NavLink key={item.container._id} to={`/stories/${item.container.stories[0]._id}`}>
              <div className=" items-center flex flex-col space-x-1 rounded-lg  ">
                {item.container.stories && item.container.stories.length > 0 && item.container.stories[item.container.stories.length - 1].media && (
                  <div className="sm:w-32 sm:h-48 h-32 w-24 bg-black  bg-opacity-90  flex items-center justify-center rounded-xl">

                    {item.container.stories[item.container.stories.length - 1].media_type === "image" && (
                      <img
                        src={item.container.stories[item.container.stories.length - 1].media}
                        className="sm:w-32 sm:h-48 h-32 w-24 opacity-90 rounded-xl"
                        alt=""
                      />
                    )
                    }

                    {item.container.stories[item.container.stories.length - 1].media_type === "video" && (
                      <video
                        className="sm:w-32 sm:h-48 h-32 w-24 opacity-90 rounded-xl"
                        width="100%"

                      >
                        <source src={item.container.stories[item.container.stories.length - 1].media} type="video/webm" />
                        <source src={item.container.stories[item.container.stories.length - 1].media} type="video/mp4" />
                      </video>
                    )
                    }

                  </div>
                )}
                {item.container.stories && item.container.stories.length > 0 && !item.container.stories[item.container.stories.length - 1].media && (
                  <div className="sm:w-32 sm:h-48 h-32 w-24 border-4 bg-black   border-gray-500  p-1   flex items-center justify-center rounded-lg">
                    <div className="w-32 h-[99%] bg-green-900  bg-opacity-60  flex items-center justify-center rounded">
                      <p className="text-white text-[10px]  text-center ">
                        {item.container.stories[item.container.stories.length - 1].text}
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex absolute  sm:mt-32 mt-20 flex-col sm:w-12 sm:h-12 w-10 h-10 items-center justify-center rounded-full  z-20">
                  <img
                    src={
                      (!isEmpty(usersData) &&
                        usersData
                          .map((user) => {
                            if (user._id === item.container.posterId)
                              return user.picture || "https://pbs.twimg.com/media/EFIv5HzUcAAdjhl.png";
                            else return null;
                          })
                          .join("")) ||
                      "https://www.bdch.com/sites/bdch.com/assets/images/Staff/profileNone.jpg"
                    }
                    className="sm:w-10 sm:h-10 h-8 w-8  border-red-100 border rounded-full"
                    alt="user-pic"
                  />
                  <p className="text-white sm:text-[12px] text-[10px]  text-center  font-bold">
                    {!isEmpty(usersData[0]) &&
                      usersData.map((user) => {
                        if (user._id === item.container.posterId) return user.pseudo;
                        else return null;
                      })}
                  </p>
                </div>
              </div>
            </NavLink>
          );
        })}
    </div>
  );
}

export default StoriesPost;
