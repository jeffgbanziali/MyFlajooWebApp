import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { UidContext } from '../../Context/AppContext';
import { NavLink } from 'react-router-dom';

const UsersFriends = () => {

    const [friends, setFriends] = useState([]); // I want to get the friends of the user and display them in the component

    const uid = useContext(UidContext);

    useEffect(() => {
        const getFriends = async () => {
            try {
                const FriendList = await axios({
                    method: "get",
                    url: `http://localhost:5000/api/user/friends/` + uid,
                    withCredentials: true,
                });
                console.log(FriendList.data);
                setFriends(FriendList.data);
            }
            catch (err) {
                console.log(err);
            }
        }
        getFriends();
    }, [uid]);
    return (
        <div className='shadow-xl shadow-gray-800 flex flex-col w-80 h-auto md:h-auto md:w-72 lg:h-auto lg:w-[360px] bg-black  border-1 border-red-700 border-opacity-0 rounded-xl'>
            <div className='flex p-3 ml-6 mt-4 rounded-b-xl '>
                <h1 className='text-center text-slate-400 font-semibold text-2xl'>
                    My Friends
                </h1>
            </div>
            <div className='grid grid-col-3'>
                <div>
                    {
                        friends.map((friend) => (
                            <NavLink to={`/friends/${friend._id}`} key={friend._id}>
                                <div className='flex flex-col -space-y-2 '>
                                    <div className='flex mt-2 p-4 hover:bg-gray-800 cursor-pointer rounded-b-xl  items-center justify-between   '>
                                        <div className=''>
                                            <div className='flex flex-row items-center '>
                                                <div className='flex items-center'>
                                                    <img src={friend.picture} alt='' className='w-12 h-12   rounded-full' />
                                                    <div className='flex flex-col ml-4 text-justify '>
                                                        <h2 className='text-center text-gray-900 font-semibold text-sm'>{friend.username}</h2>
                                                        <h2 className='text-center text-gray-400 font-normal text-[16px]'>@{friend.pseudo}</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>

                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default UsersFriends;
