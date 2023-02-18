import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { isEmpty } from '../Utils/Utils';
import axios from 'axios';
import FollowHandler from './FollowHandler';
import Message from '../Message/Message';

const ProfileMouse = ({ post }) => {
    const usersData = useSelector((state) => state.usersReducer);



    return (
        <div className='w-[63%] absolute flex flex-col top-24 left-6 border rounded-xl z-50 border-gray-600 bg-black h-80'>
            <div className="flex w-full h-24 border-b-2 border-gray-600 rounded-tl-xl rounded-tr-xl  " >
                <div className='flex w-[20%] rounded-tl-xl  items-center justify-center '>
                    <img
                        src={
                            !isEmpty(usersData[0]) &&
                            usersData
                                .map((user) => {
                                    if (user._id === post.posterId) return user.picture;
                                    else return null;
                                })
                                .join('')
                        }
                        className="w-14 hover:opacity-75 cursor-pointer hidden md:block object-cover border shadow-md  border-red-500 rounded-14 ml-18 overflow-hidden h-14 rounded-full "
                        alt="user-pic"
                    />
                </div>
                <div className='flex flex-col p-2 w-[80%] rounded-tr-xl   '>
                    <h4 className="text-white  font-semibold">
                        {
                            !isEmpty(usersData[0]) &&
                            usersData
                                .map((user) => {
                                    if (user._id === post.posterId) return user.pseudo;
                                    else return null;
                                })
                        }
                    </h4>
                    <h4 className="text-white  font-semibold">
                        {usersData[0] &&
                            usersData.map((user) => {
                                if (user._id === post.posterId) {
                                    return user.followers.map((follower) => follower.pseudo).join(",");
                                }
                                return null;
                            })}
                    </h4>

                </div>
            </div>
            <div className="flex flex-row items-center justify-evenly w-full border-gray-600  border-b h-[18%] bg-black">
                <div className='flex flex-col items-center justify-center'>
                    <h4 className="text-white  font-semibold">
                        {
                            !isEmpty(usersData[0]) &&
                            usersData
                                .filter((user) => user._id === post.posterId)
                                .map((user) => {
                                    if (user.followers) return user.followers.length;
                                    else return null;
                                })
                        }
                    </h4>
                    <h4 className="text-gray-800  font-semibold">
                        Followers
                    </h4>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h4 className="text-white  font-semibold">
                        {
                            !isEmpty(usersData[0]) &&
                            usersData
                                .filter((user) => user._id === post.posterId)
                                .map((user) => {
                                    if (user.following) return user.following.length;
                                    else return null;
                                })
                        }
                    </h4>
                    <h4 className="text-gray-800  font-semibold">
                        Following
                    </h4>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h4 className="text-white  font-semibold">
                        {
                            !isEmpty(usersData[0]) &&
                            usersData
                                .filter((user) => user._id === post.posterId)
                                .map((user) => {
                                    if (user.following) return user.following.length;
                                    else return null;
                                })
                        }
                    </h4>
                    <h4 className="text-gray-800 font-semibold">
                        Posts
                    </h4>
                </div>
            </div>
            <div className=" all-post flex flex-row items-center justify-evenly w-full border-gray-800 border-b h-[35%] ">
                {
                    post.picture && (
                        <>
                            <div className='grid h-full w-full  grid-cols-3'>
                                <img
                                    src={post.picture}
                                    alt="post-pic"
                                    className=" w-full h-full  transition duration-150 cursor-pointer hover:scale-120 hover:translate-0 transform hover:shadow-none"
                                />
                            </div>
                        </>
                    )
                }
            </div>
            <div className="flex items-center justify-center h-14 rounded-b-xl w-full border-gray-800 ">
                <div className='flex flex-row items-center justify-center space-x-1  w-full rounded-b-xl  h-full border-gray-800 '>
                    <div className="">
                        <FollowHandler idToFollow={post.posterId} type={'profile'} />
                    </div>
                    <div className="">
                        <Message idToMessage={post.posterId} type={'profile'} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileMouse;
