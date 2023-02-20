import React, { } from 'react';
import Thread from '../../components/Thread/Thread';
import FollowBar from '../../components/NavBar/FollowBar';
import LeftBarPro from '../../components/NavBar/LeftBarPro';
import UsersFriends from '../../components/NavBar/UsersFriends';



const HomeScreen = () => {

    return (
        <>
            <div className="absolute flex flex-row  ">
                <div className="hidden  h-auto xl:inline  flex-col w-[80%] ">
                    <LeftBarPro />
                </div>
                <div className="flex  mt-24  flex-col  w-[100%]   ">
                    <Thread />
                </div>
                <div className=" flex  ml-20 mt-24 h-auto xl:inline space-y-2  w-[70%] ">
                    <FollowBar />
                    <UsersFriends />
                </div>
            </div>
        </>
    );
}

export default HomeScreen;
