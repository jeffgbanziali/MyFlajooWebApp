import React, { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import UsersUtils from '../../components/ProfileUtils/UsersUtils';
import UserInfo from '../../components/ProfileUtils/UserInfo';
import PostImage from '../../components/ProfileUtils/PostImage';
import AddingPostsProfile from '../../components/ProfileUtils/AddingPostsProfile';
import LeftBarPro from '../../components/NavBar/LeftBarPro';







const Profile = () => {
    return (
        <>
            <div className="grid  grid-rows-3 grid-flow-col gap-4">
                <div className="col-span-1 items-center justify-center">
                    <div>
                        <div className="">
                            <UsersUtils />
                        </div>
                        <div>
                            <div className="flex mt-10 justify-center">
                                <PostImage />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
export default Profile;
