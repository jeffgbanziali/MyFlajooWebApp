import React, { } from 'react';
import Thread from '../../components/Thread/Thread';
import FollowBar from '../../components/NavBar/FollowBar';
import TrendingNow from '../../components/Home/Trending/TrendingNow';
import NavBar from '../../components/NavBar/NavBar';
import LeftBarPro from '../../components/NavBar/LeftBarPro';



const HomeScreen = () => {

    return (
        <>
            <NavBar />
            <div className='flex '>
                <div className='flex mt-4 space-x-2 '>
                    <div>
                        <FollowBar />
                    </div>
                    <div className='flex   '>
                        <Thread title="Home" />
                    </div>
                    <div className='flex-none '>
                        <FollowBar />
                    </div>
                </div>



            </div>
        </>
    );
}

export default HomeScreen;
