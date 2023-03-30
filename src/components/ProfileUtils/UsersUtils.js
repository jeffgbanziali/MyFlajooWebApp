import React, { useState } from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { MdMoreHoriz } from 'react-icons/md';
import { useSelector } from 'react-redux';
import FollowHandler from './FollowHandler';
import Message from '../Message/Message';




const UsersUtils = ({ user: { pseudo, picture, _id, bio, following, followers } }
) => {
    const userData = useSelector((state) => state.userReducer);
    const usersData = useSelector((state) => state.usersReducer);
    const [isFollowingPopup, setIsFollowingPopup] = useState(false);
    const [isFollowersPopup, setIsFollowersPopup] = useState(false);


    return (
        <>
            <div className=' sm:mt-10'>
                <div className=' flex relative h-auto sm:h-96 rounded-b justify-center '>
                    <div className="object-cover  w-full h-full bg-[#0e0e0e]" >
                        <div className='flex flex-col sm:flex-row sm:h-96  bg-[#221f1f] mt-20 rounded-3xl  sm:justify-center sm:space-x-20' >
                            <div className='flex mt-10 justify-center sm:items-center '>
                                <img src={picture ? picture : "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                                    alt=""
                                    className="w-36 h-36 sm:w-48 sm:h-48 border-4 border-red-900 p-1  rounded-full" />
                            </div>
                            <div className='flex mb-2 sm:mb-0 justify-center flex-col mt-2 sm:mt-6'>
                                <div className='flex flex-col sm:flex-row '>
                                    <div className=" text-center sm:items-center sm:text-center text-3xl text-black">
                                        <h2 className="text-[26px] sm:items-center  font-normal text-gray-200">
                                            {pseudo}
                                        </h2>
                                    </div>
                                    <div className='flex justify-center mt-2 sm:mt-0 items-center sm:items-center sm:ml-10 space-x-2'>
                                        {
                                            _id !== userData._id && (
                                                <>
                                                    <div>
                                                        <FollowHandler idToFollow={_id} type={'card'} />
                                                    </div>
                                                    <div>
                                                        <Message idToFollow={_id} type={'friends'} />
                                                    </div>
                                                </>
                                            )

                                        }
                                        <div className='w-8 h-8 hover:bg-gray-500 bg-blue-300 rounded-full cursor-pointer flex items-center justify-center'>
                                            <FaUserPlus className="text-[16px] text-black" />
                                        </div>
                                        <div className='w-8 h-8 hover:bg-gray-500  bg-gray-300 rounded-full cursor-pointer flex items-center justify-center'>
                                            <MdMoreHoriz className="text-[24px] text-black" />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center justify-center flex-col '>
                                    {
                                        following && followers && (
                                            <div className="flex flex-row mt-2 sm:mt-8 justify-center space-x-4 sm:space-x-10">
                                                <div className="flex flex-row space-x-1 cursor-pointer justify-center items-center ">
                                                    <h2 className="text-[20px] font-normal text-gray-200">10</h2>
                                                    <h2 className="text-[20px] font-normal text-gray-200">Posts</h2>
                                                </div>
                                                <div onClick={() => setIsFollowingPopup(true)}
                                                    className="flex flex-row space-x-1 cursor-pointer justify-center items-center focus:outline-none ">
                                                    <h2 className="text-[20px] font-normal text-gray-200">
                                                        {following.length}
                                                    </h2>
                                                    <h2 className="text-[20px] font-normal text-gray-200">Following</h2>
                                                </div>
                                                <div onClick={() => setIsFollowersPopup(true)}
                                                    className="flex flex-row space-x-1 cursor-pointer justify-center items-center focus:outline-none ">
                                                    <h2 className="text-[20px] font-normal text-gray-200">{followers.length}</h2>
                                                    <h2 className="text-[20px] font-normal text-gray-200">Followers</h2>
                                                </div>
                                            </div>
                                        )
                                    }
                                    {isFollowingPopup && (
                                        <div className="fixed z-50 top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex items-center justify-center">
                                            <div className="sm:w-[28%] w-screen h-auto sm:h-[62%] bg-gray-800 overflow-auto rounded-lg shadow-lg transform transition-all ease-in-out duration-300 scale-100">
                                                <div className=" p-2 border-b-2 flex justify-between">
                                                    <h3 className="text-gray-200 text-lg font-medium">My Followings</h3>
                                                    <span className="text-gray-200 text-2xl cursor-pointer" onClick={() => setIsFollowingPopup(false)}>
                                                        &#10005;
                                                    </span>
                                                </div>

                                                <ul className="overflow-auto p-4 space-y-3 w-[100%]  h-[89%]">
                                                    {usersData.map((user) => {
                                                        for (let i = 0; i < following.length; i++) {
                                                            if (user._id === following[i]) {
                                                                return (
                                                                    <li key={user._id} className="flex mt-2 items-center ">
                                                                        <img className="w-12 h-12 border border-gray-800 rounded-full" src={user.picture} alt="" />
                                                                        <h4 className="text-gray-200  ml-2 font-medium">{user.pseudo}</h4>
                                                                        <div className="ml-auto ">
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

                                    {isFollowersPopup && (
                                        <div className="fixed z-10 sm:top-0 sm:left-0 h-screen w-screen sm:w-full sm:h-full bg-gray-900 bg-opacity-75 flex items-center justify-center">
                                            <div className="sm:w-[28%] w-screen h-auto sm:h-[62%] bg-gray-800  rounded-lg shadow-lg transform transition-all ease-in-out duration-300 scale-100">
                                                <div className=" p-2 border-b-2  flex justify-between" >
                                                    <h3 className="text-gray-200 text-lg font-medium">my Followers</h3>
                                                    <span className="text-gray-200 text-2xl cursor-pointer" onClick={() => setIsFollowersPopup(false)}>
                                                        &#10005;
                                                    </span>
                                                </div>
                                                <ul className="overflow-auto p-4 space-y-3 w-[100%]  h-[89%] ">
                                                    {usersData.map((user) => {
                                                        for (let i = 0; i < followers.length; i++) {
                                                            if (user._id === followers[i]) {
                                                                return (
                                                                    <li key={user._id} className="flex  items-center ">
                                                                        <img className="w-12 h-12 border border-red-500  rounded-full" src={user.picture} alt="user-pic" />
                                                                        <h4 className="text-gray-200 ml-2 font-medium">{user.pseudo}</h4>
                                                                        <div className="ml-auto ">
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
                                    <div className='flex flex-col text-[16px] -space-y-2 text-justify font-normal text-gray-200 mt-4 '>
                                        <h2>
                                            {bio}
                                        </h2>
                                    </div>
                                    <div className="flex flex-row mt-2  sm:space-x-1 items-center ">
                                        <h2 className="text-[14px] font-normal text-gray-600">
                                            followed by
                                        </h2>
                                        <h2 className="text-[16px] font-semibold text-gray-200" >
                                            {userData.followers[0] && usersData.map((user) => {
                                                if (user._id === userData.followers[0]) {
                                                    return user.pseudo;
                                                }
                                                return null;
                                            })}
                                        </h2>
                                        <h2 className="text-[16px] font-normal text-gray-600" >
                                            and {
                                                userData.followers.length > 1 && (
                                                    <span className="text-[16px] font-semibold text-gray-600" >
                                                        {userData.followers.length - 1}{userData.followers.length > 1 ? ' other people' : ' a other person'}
                                                    </span>
                                                )
                                            }
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border border-gray-700 border-opacity-10' />
                <div className='flex justify-center space-x-4 px-2 sm:px-8'>
                    <div className='flex items-center space-x-2 '>
                        <div className='sm:px-4 cursor-pointer hover:text-blue-500 sm:py-5 sm:text-xl font-semibold text-blue-800 border-b-4 border-b-blue-700' >
                            Posts
                        </div>
                        <div className='sm:px-4 cursor-pointer hover:text-blue-500  sm:py-5 sm:text-xl font-semibold text-gray-500 ' >
                            About
                        </div>
                        <div className=' sm:px-4 cursor-pointer hover:text-blue-500 sm:py-5 sm:text-xl  font-semibold text-gray-500 ' >
                            Friends
                            <span className='sm:text-lg ml-1'>
                                1,234
                            </span>
                        </div>
                        <div className='sm:px-4 py-5 cursor-pointer hover:text-blue-500 sm:text-xl font-semibold text-gray-500 ' >
                            Photos
                        </div>
                        <div className='sm:px-4 py-5 cursor-pointer hover:text-blue-500 sm:text-xl font-semibold text-gray-500 ' >
                            Videos
                        </div>
                        <div className='sm:px-4 py-5 cursor-pointer hover:text-blue-500 sm:text-xl font-semibold text-gray-500 ' >
                            Check-ins
                        </div>
                    </div>
                </div>
            </div >
        </>

    );
}

export default UsersUtils;
