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
    <div className="items-center p-2 flex space-x-1 sm:space-x-2 rounded-[1rem]">
      {!isEmpty(storiesData) &&
        storiesData.map((story) => {
          return (
            <NavLink key={story._id} to={`/stories/${story._id}`}>
              <div className="w-32 h-48 bg-white flex items-center justify-center rounded">
                {story.media && (
                  <img src={story.media} className="w-32 h-48 opacity-90 rounded" alt="" />
                )}

                <div className="flex flex-col w-12 h-12  mt-28 items-center justify-center rounded-full absolute z-20">
                  <img
                    src={
                      (!isEmpty(usersData) &&
                        usersData
                          .map((user) => {
                            if (user._id === story.posterId)
                              return user.picture;
                            else return null;
                          })
                          .join("")) ||
                      "https://www.bdch.com/sites/bdch.com/assets/images/Staff/profileNone.jpg"
                    }
                    className="w-12 h-12  border-red-100 border rounded-full"
                    alt="user-pic"
                  />
                  <h4 className="text-white text-center  font-bold">
                    {!isEmpty(usersData[0]) &&
                      usersData.map((user) => {
                        if (user._id === story.posterId) return user.pseudo;
                        else return null;
                      })}
                  </h4>
                </div>
              </div>
            </NavLink>
          );
        })}
    </div>
  );
}

export default StoriesPost;
