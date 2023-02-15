import React, { useContext, useEffect, useState } from 'react';
import { UidContext } from '../../Context/AppContext';
import axios from 'axios';

const ProfilFriends = () => {
    const [friends, setFriends] = useState([]); // I want to get the friends of the user and display them in the component

    const uid = useContext(UidContext);

    useEffect(() => {
        const getFriends = async () => {
            try {
                if (uid) {
                    const FriendList = await axios.get(`http://localhost:5000/api/user/friends/${uid}`);
                    setFriends(FriendList.data);
                }
            } catch (err) {
                console.log(err);
            }
        }
        getFriends();
    }, [uid]);

    return (

        <div className="shadow bg-gray-900   shadow-slate-600 rounded-xl w-full">
            <div className="flex p-3 ml-6 mt-4 rounded-b-xl">
                <h1 className="text-3xl font-italic text-gray-400">Friends</h1>
            </div>
            <div className=" grid grid-cols-3 p-4 gap-1">
                {
                    friends.map((friend) => (
                        <div className="flex flex-col  items-center">
                            <div className="flex w-36 h-36 ">
                                <img src={friend.picture} alt="" className=" w-full h-full rounded-xl " />
                            </div>
                            <div className="flex flex-col justify-start mt-2 text-justify">
                                <h2 className=" text-gray-900 font-semibold text-2xl">{friend.username}</h2>
                                <h2 className=" text-gray-400 font-normal mb-2 text-xl">@{friend.pseudo}</h2>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ProfilFriends;
