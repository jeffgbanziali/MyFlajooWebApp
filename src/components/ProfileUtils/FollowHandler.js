import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from '../Utils/Utils';
import { followUser, unfollowUser } from '../../actions/user.action';

const FollowHandler = ({ idToFollow }) => {
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
                        <button className=" bg-gray-700 hover:bg-white w-32 h-10 rounded-2xl" >
                            <p className="text-white hover:text-red-700 text-[18px] font-semibold text-center" >
                                Following
                            </p>
                        </button>
                    </span>
                )
            }
            {
                isFollowed === false && !isEmpty(userData) && (
                    <span onClick={handleFollow}>
                        <button className=" bg-red-600 hover:bg-red-500 w-32 h-10  rounded-2xl" >
                            <p className="text-white hover:text-black text-[18px] font-semibold text-center">
                                Follow
                            </p>
                        </button>
                    </span>
                )
            }

        </>

    );
}

export default FollowHandler;