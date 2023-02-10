import React, { useState } from 'react';
import NatBar from '../../components/NavBar/NatBar';
import UsersUtils from '../../components/ProfileUtils/UsersUtils';
import UserInfo from '../../components/ProfileUtils/UserInfo';
import PostImage from '../../components/ProfileUtils/PostImage';
import AddingPostsProfile from '../../components/ProfileUtils/AddingPostsProfile';
import LeftBarPro from '../../components/NavBar/LeftBarPro';







const Profile = () => {
    return (
        <>
            <div>
                <div className="z-20">
                    <NatBar />
                </div>
                <div className="flex justify-center">
                    <div>
                        <LeftBarPro />
                    </div>
                    <div>
                        <div className="z-10">
                            <UsersUtils />
                        </div>
                        <div>
                            <div className="flex justify-center">
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
