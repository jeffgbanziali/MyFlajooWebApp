import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from '../Utils/Utils';
import { followUser, unfollowUser } from '../../actions/user.action';
import { BsFillCheckCircleFill,  BsPlusCircleFill } from 'react-icons/bs';
import {FaUserCheck, FaUserPlus } from 'react-icons/fa';


const FollowHandler = ({ idToFollow, type }) => {
    const userData = useSelector((state) => state.userReducer);
    const [isFollowed, setIsFollowed] = useState(false);
    const dispatch = useDispatch();

    const handleFollow = () => {
        dispatch(followUser(userData._id, idToFollow));
        setIsFollowed(true);
    }

    const handleUnfollow = () => {
        dispatch(unfollowUser(userData._id, idToFollow));
        setIsFollowed(false);
    }

    useEffect(() => {
        if (!isEmpty(userData.following)) {
            if (userData.following.includes(idToFollow)) {
                setIsFollowed(true);
            } else {
                setIsFollowed(false);
            }
        }
    }, [userData, idToFollow])

    return (
        <>
            {
                isFollowed && !isEmpty(userData) && (
                    <span onClick={handleUnfollow}
                    >
                        {type === "suggestion" && <button className=" bg-gray-700 hover:bg-white w-32 h-10 rounded-2xl" >
                            <p className="text-white hover:text-red-700 text-[18px] font-semibold text-center" >
                                Following
                            </p>
                        </button>}
                        {type === "card" && <button className="flex space-x-2 items-center justify-center hover:text-blue-700 bg-blue-100 hover:bg-white  w-28 h-9  rounded-xl" >
                            <FaUserCheck className='text-blue-400  text-[22px] font-semibold text-center' />
                            <p className="text-blue-400  text-[16px] font-semibold text-center" >
                                Friends
                            </p>
                        </button>
                        }
                        {
                            type === "friends" &&
                            <div className='rounded-full cursor-pointer flex items-center justify-center'>
                                <BsFillCheckCircleFill size={14} className='text-white  hover:text-gray-800' />
                            </div>
                        }

                    </span>
                )
            }
            {
                isFollowed === false && !isEmpty(userData) && (
                    <span onClick={handleFollow}>
                        {type === "suggestion" && <button className=" bg-red-600 hover:bg-red-500 w-32 h-10  rounded-2xl" >
                            <p className="text-white hover:text-black text-[18px] font-semibold text-center">
                                Follow
                            </p>
                        </button>}
                        {
                            type === "card" && <button className="flex space-x-2 items-center justify-center bg-red-600 hover:bg-red-500 w-28 h-9  rounded-xl" >
                                <FaUserPlus className='text-white text-[22px] font-semibold text-center' />
                                <p className="text-white text-[16px] font-semibold text-center">
                                    Follow
                                </p>
                            </button>
                        }
                        {type === "friends" &&
                            <div className='rounded-full cursor-pointer flex items-center justify-center'>
                                <BsPlusCircleFill size={16} className='text-gray-100 hover:text-gray-800   ' />
                            </div>
                        }
                    </span>
                )
            }
        </>
    );
}

export default FollowHandler;