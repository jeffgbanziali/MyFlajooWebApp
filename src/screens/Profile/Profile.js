import React, { useEffect, useState } from 'react';
import UsersUtils from '../../components/ProfileUtils/UsersUtils';
import PostImage from '../../components/ProfileUtils/PostImage';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../../components/NavBar/NavBar';





const Profile = () => {

    const { pseudo } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        async function fetchUser() {
            const response = await axios.get(`http://localhost:4000/api/user/${pseudo}`);
            setUser(response.data);
        }
        fetchUser();
    }, [pseudo]);


    return (
        <>
            <NavBar />
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
