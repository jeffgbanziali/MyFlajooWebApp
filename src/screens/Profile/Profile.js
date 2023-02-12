import React from 'react';
import UsersUtils from '../../components/ProfileUtils/UsersUtils';
import PostImage from '../../components/ProfileUtils/PostImage';
import UserInfo from '../../components/ProfileUtils/UserInfo';
import ProfilFriends from '../../components/ProfileUtils/ProfilFriends';
import PhotoUser from '../../components/ProfileUtils/PhotoUser';





const Profile = () => {



    return (
        <>
            <div className="">
                <div className="">
                    <div>
                        <div className="">
                            <UsersUtils />
                        </div>
                        <div className="grid grid-rows-3 justify-center  mt-4 p-10 grid-flow-col gap-4">
                            <div className="row-span-3  space-y-4 w-[520px]  p-2">
                                <UserInfo />
                                <PhotoUser />
                                <ProfilFriends />
                            </div>
                            <div className=" p-2 flex items-center justify-center">
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
