import React, { useEffect, useState } from 'react';
import UsersUtils from '../../components/ProfileUtils/UsersUtils';
import PostImage from '../../components/ProfileUtils/PostImage';
import { useParams } from 'react-router-dom';
import axios from 'axios';





const Profile = () => {

    const { pseudo } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        async function fetchUser() {
            const response = await axios.get(`http://localhost:5000/api/user/${pseudo}`);
            setUser(response.data);
        }
        fetchUser();
    }, [pseudo]);


    return (
        <>
            <div className="flex w-screen sm:justify-center sm:items-center ">
                <div className=" w-screen sm:w-[80%]">
                    <div>
                        <div className="">
                            <UsersUtils user={user} />
                        </div>
                        <div className=" flex justify-center  mt-4  ">

                            <div className="  p-2 flex items-center justify-center">
                                <PostImage user={user} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Profile;
