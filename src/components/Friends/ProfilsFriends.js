import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


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
        <div className="friend-profile mt-48 justify-center flex w-56 h-56 bg-rose-800">
            <p>@{friend.pseudo}</p>
            <img src={friend.picture} alt="profile" />
            <p>{friend.bio}</p>
        </div>
    );
}

export default FriendProfiles;
