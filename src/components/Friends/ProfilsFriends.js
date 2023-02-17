import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserInfos from './UserInfos';


const FriendProfiles = () => {
    const [friend, setFriend] = useState(null);
    const { friendId } = useParams();   // I want to get the id of the friend and display his profile
    console.log(friendId);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/user/${friendId}`).then((response) => {
            setFriend(response.data);
        });
    }, [friendId]);

    if (!friend) {
        return <div>Loading...</div>;
    }



    return (
        <div className="friend-profile mt-48 justify-center flex bg-rose-800">
            <UserInfos friend={friend} />
        </div>
    );
}

export default FriendProfiles;
