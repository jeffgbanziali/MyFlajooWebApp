import React from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { MdMoreHoriz } from 'react-icons/md';
import { useSelector } from 'react-redux';
import Message from '../Message/Message';
import FollowHandler from './FollowHandler';

const PostsUser = () => {

    const userData = useSelector((state) => state.userReducer);

    return (
        <>
            <div className="flex w-[80%] p-10 h-auto bg-gray-800 flex-col  ">
                <div className="flex flex-row justify-center space-x-4">
                    <div className="flex flex-col justify-center items-center  ">
                        <div className="relative  justify-center items-center " >
                            <div className="flex flex-row justify-center  mr-10  items-center space-y-2">
                                <div className="flex items-center border-4 border-red-700 w-50 h-50 rounded-full  justify-center space-y-4">
                                    {
                                        userData.picture ? (
                                            <img src={userData.picture} alt="" className="w-48 h-48 rounded-full" />
                                        ) : (
                                            <img src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" alt="" className="w-48 h-48 rounded-full" />
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex' >
                        <div className="flex flex-col space-x-4">
                            <div className="flex flex-row justify-center space-x-4  items-center ">
                                <h2 className="text-[24px]  font-semibold text-gray-400">{userData.pseudo}</h2>
                                <FollowHandler />
                                <Message />
                                <div className='w-8 h-8 hover:bg-gray-500  bg-blue-300 rounded-full cursor-pointer flex items-center justify-center'>
                                    <FaUserPlus className="text-[16px] text-black" />
                                </div>
                                <div className='w-8 h-8 hover:bg-gray-500  bg-gray-300 rounded-full cursor-pointer flex items-center justify-center'>
                                    <MdMoreHoriz className="text-[24px] text-black" />
                                </div>
                            </div>
                            {
                                userData.following && userData.followers && (
                                    <div className="flex flex-row mt-4 space-x-4">
                                        <div className="flex flex-row justify-center items-center ">
                                            <h2 className="text-[16px] font-semibold text-gray-400">10</h2>
                                            <h2 className="text-[16px] font-semibold text-gray-400">Posts</h2>
                                        </div>
                                        <div className="flex flex-row justify-center items-center ">
                                            <h2 className="text-[16px] font-semibold text-gray-400">{userData.following.length}</h2>
                                            <h2 className="text-[16px] font-semibold text-gray-400">Following</h2>
                                        </div>
                                        <div className="flex flex-row justify-center items-center ">
                                            <h2 className="text-[16px] font-semibold text-gray-400">{userData.followers.length}</h2>
                                            <h2 className="text-[16px] font-semibold text-gray-400">Followers</h2>
                                        </div>
                                    </div>
                                )
                            }
                            <div className="flex flex-col mt-2  ">
                                <h2 className="text-[16px] font-semibold text-gray-400">Bio</h2>
                            </div>
                            <div className="flex flex-row space-x-1 items-center ">
                                <h2 className="text-[12px] font-semibold text-gray-400">Suivi par</h2>
                                <h2 className="text-[16px] font-semibold text-gray-400" >
                                    Koukouda et 2 autres personnes
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    );
}

export default PostsUser;
