import React, { } from 'react';
import Thread from '../../components/Thread/Thread';
import FollowBar from '../../components/NavBar/FollowBar';
import LeftBarPro from '../../components/NavBar/LeftBarPro';



const HomeScreen = () => {

    return (
        <>
            <LeftBarPro />
            <div className="ml-[25%] absolute ">
                <div className="flex ml-10 mt-20   ">
                    <div className="flex w-[100%]  ">
                        <Thread />
                    </div>
                    <div className="flex  ml-4 flex-col w-[100%] ">
                        <FollowBar />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeScreen;
