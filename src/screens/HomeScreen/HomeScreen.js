import React, { } from 'react';
import Thread from '../../components/Thread/Thread';
import FollowBar from '../../components/NavBar/FollowBar';
import LeftBarPro from '../../components/NavBar/LeftBarPro';
import UsersFriends from '../../components/NavBar/UsersFriends';
import NavBar from '../../components/NavBar/NavBar';



const HomeScreen = () => {

    return (
        <>
            <NavBar />
            <LeftBarPro />
            <div className="sm:ml-[25%] absolute ">
                <div className="flex sm:ml-10 mt-20   ">
                    <div className="flex w-[100%]  ">
                        <Thread />
                    </div>
                    <div className=" hidden xl:inline space-y-2 ml-4 flex-col w-[100%] ">
                        <FollowBar />
                        <UsersFriends />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeScreen;
