import React from 'react';
import { useSelector } from 'react-redux';
import { isEmpty } from '../Utils/Utils';
import FollowHandler from './FollowHandler';
import Message from '../Message/Message';

const ProfileMouse = ({ post }) => {
    const usersData = useSelector((state) => state.usersReducer);

    return (
        <div className='w-[65%] absolute flex flex-col top-24 left-6 border rounded-xl z-50 border-gray-600 bg-black h-[50%]'>
            <div className="flex w-full h-24 border-b-2 border-gray-600 rounded-tl-xl rounded-tr-xl  " >
                <div className='flex w-[20%] rounded-tl-xl p-2  items-center justify-center '>
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
                        className="w-14 hover:opacity-75 cursor-pointer hidden md:block object-cover border-2 shadow-md  border-red-500 rounded-14 ml-18 overflow-hidden h-14 rounded-full "
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
            <div className="flex flex-row items-center justify-between p-6 w-full border-gray-600  border-b h-[22%] bg-black">
                <div className='flex flex-col -space-y-1 items-center justify-center'>
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
                    <h4 className="text-gray-400  font-normal">
                        Followers
                    </h4>
                </div>
                <div className='flex flex-col -space-y-1 items-center justify-center'>
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
                    <h4 className="text-gray-400  font-normal">
                        Following
                    </h4>
                </div>
                <div className='flex flex-col -space-y-1 items-center justify-center'>
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
                    <h4 className="text-gray-400 font-normal">
                        Posts
                    </h4>
                </div>
            </div>
            <div className=" all-post flex bg-blue-600 flex-row items-center justify-evenly w-full border-gray-800 border-b h-[40%] ">
                <div className='grid w-full border h-full  grid-cols-3'>
                    {
                        post.picture && (
                            <>

                                <img
                                    src={post.picture}
                                    alt="post-pic"
                                    className=" w-full h-full border  transition duration-150 cursor-pointer hover:scale-120 hover:translate-0 transform hover:shadow-none"
                                />

                            </>
                        )
                    }
                </div>
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
