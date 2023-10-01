import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserInfos from './UserInfos';


const FriendProfiles = () => {
    const [friend, setFriend] = useState(null);
    const { friendId } = useParams();   // I want to get the id of the friend and display his profile
    console.log(friendId);

    useEffect(() => {
        axios.get(`http://localhost:4000/api/user/${friendId}`).then((response) => {
            setFriend(response.data);
        });
    }, [friendId]);

    if (!friend) {
        return <div>Loading...</div>;
    }



    return (
        <div className="friend-profile  justify-center flex ">
            <UserInfos friend={friend} />
        </div>
    );
}

export default FriendProfiles;
