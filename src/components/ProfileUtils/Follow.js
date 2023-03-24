import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import FollowHandler from './FollowHandler';

const Follow = () => {

    const userData = useSelector((state) => state.userReducer);
    const usersData = useSelector((state) => state.usersReducer);

    const [followingPopup, setFollowingPopup] = useState(false);
    const [followersPopup, setFollowersPopup] = useState(false);


    return (
        <div className="flex items-center justify-center md:w-96 lg:w-full w-80 p-2 pl-2 pr-2 bg-slate-900  border-gray-800 border-2 rounded-2xl px-16  mt-24 z-10 relative" style={{ top: -65 }}>
            <div className="flex w-full justify-center">
                <div className="flex  mr-2 items-center">
                    <button className="">
                        <p className="text-white  text-sm font-semibold text-center">200 K</p>
                        <p className="text-gray-500">Posting </p>
                    </button>
                </div>
                <div className="flex border-l-2" />
                <div className="flex mr-2 ml-2 items-center">
                    <button onClick={() => setFollowersPopup(true)} className="focus:outline-none">
                        <p className="text-white text-sm font-semibold text-center">
                            {userData.followers ? userData.followers.length : 0}
                        </p>
                        <p className="text-gray-500">Following</p>
                    </button>
                </div>
                <div className="flex border-l-2" />
                <div className="flex ml-2 items-center">
                    <button onClick={() => setFollowingPopup(true)} className="focus:outline-none">
                        <p className="text-white text-sm font-semibold text-center">
                            {userData.following ? userData.following.length : 0}
                        </p>
                        <p className="text-gray-500 text-[16px]">Followers</p>
                    </button>
                </div>
            </div>
            {followingPopup && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex items-center justify-center">
                    <div className="w-[28%] h-[62%] bg-gray-800  rounded-lg shadow-lg transform transition-all ease-in-out duration-300 scale-100">
                        <div className="flex p-2 border-b-2 justify-between">
                            <h3 className="text-gray-200 text-lg font-medium">My Followings</h3>
                            <span className="text-gray-200  text-2xl cursor-pointer" onClick={() => setFollowingPopup(false)}>
                                &#10005;
                            </span>
                        </div>

                        <ul className="overflow-auto  space-y-3 w-[100%]  h-[89%]">
                            {usersData.map((user) => {
                                for (let i = 0; i < userData.following.length; i++) {
                                    if (user._id === userData.following[i]) {
                                        return (
                                            <li key={user._id} className="flex items-center mt-2">
                                                <img className="w-12 h-12 border border-red-500 ml-3 rounded-full" src={user.picture} alt="" />
                                                <h4 className="text-gray-200  ml-2 font-medium">{user.pseudo}</h4>
                                                <div className="ml-auto mr-3">
                                                    <FollowHandler idToFollow={user._id} type={'suggestion'} />
                                                </div>
                                            </li>
                                        );
                                    }
                                }
                                return null;
                            })}
                        </ul>
                    </div>
                </div>
            )}
            {followersPopup && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex items-center justify-center">
                    <div className="w-[28%] h-[62%] bg-gray-800 rounded-lg shadow-lg transform transition-all ease-in-out duration-300 scale-100">
                        <div className="flex p-2 border-b-2 justify-between" >
                            <h3 className="text-gray-200 text-lg font-medium">my Followers</h3>
                            <span className="text-gray-200 text-2xl cursor-pointer" onClick={() => setFollowersPopup(false)}>
                                &#10005;
                            </span>
                        </div>
                        <ul className="overflow-auto  space-y-3 w-[100%]  h-[89%]">
                            {usersData.map((user) => {
                                for (let i = 0; i < userData.followers.length; i++) {
                                    if (user._id === userData.followers[i]) {
                                        return (
                                            <li key={user._id} className="flex mt-2 items-center">
                                                <img className="w-12 h-12 border border-red-500 ml-3 rounded-full" src={user.picture} alt="" />
                                                <h4 className="text-gray-200  ml-2 font-medium">{user.pseudo}</h4>
                                                <div className="ml-auto mr-3">
                                                    <FollowHandler idToFollow={user._id} type={'suggestion'} />
                                                </div>
                                            </li>
                                        );
                                    }
                                }
                                return null;
                            })}
                        </ul>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Follow;
