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
            <div className='flex absolute  flex-row '>
                <div >
                    <div>
                        <LeftBarPro />
                    </div>
                </div>
                <div className='flex  mt-20  p-4 space-x-4  '>
                    <div>
                        <Thread title="Home" />
                    </div>
                    <div className=''>
                        <div className='' >
                            <TrendingNow />
                        </div>
                        <div className='mt-6' >
                            <FollowBar />
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default HomeScreen;
