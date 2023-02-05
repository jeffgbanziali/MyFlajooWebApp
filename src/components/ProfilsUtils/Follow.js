import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Follow = () => {
    const userData = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    const [followersPopop, setFollowersPopop] = useState([]);
    const [followingPopop, setFollowingPopop] = useState([])

    const handleFollowing = () => {

    }

    const handleFollowers = () => {

    }
    return (
        <div className="flex items-center justify-center w-96 p-2 pl-2 pr-2 bg-slate-900  border-gray-800 border-2 rounded-3xl px-16  mt-24 z-10 relative" style={{ top: -65 }}>
            <div className="flex space-x-8 justify-center">
                <div className="flex items-center">
                    <button className="">
                        <p className="text-white text-lg font-semibold text-center">200 K</p>
                        <p className="text-gray-500">Post</p>
                    </button>
                    <div className="border-r border-gray-500 h-full w-5"></div>
                </div>
                <div className="flex items-center">
                    <div>
                        <button onClick={handleFollowers} className="focus:outline-none">
                            <p className="text-white text-lg font-semibold text-center">
                                {userData.followers ? userData.followers.length : 0}
                            </p>
                            <p className="text-gray-500">Followers</p>
                        </button>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="border-l border-gray-500 h-full w-5"></div>
                    <div className="">
                        <button onClick={handleFollowing} className="focus:outline-none">
                            <p className="text-white text-lg font-semibold text-center">
                                {userData.following ? userData.following.length : 0}
                            </p>
                            <p className="text-gray-500">Following</p>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Follow;
