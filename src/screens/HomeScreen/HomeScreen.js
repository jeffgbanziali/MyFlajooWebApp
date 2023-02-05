import React, { } from 'react';
import LeftNavBar from '../../components/NavBar/LeftNavBar';
import Thread from '../../components/Thread/Thread';



const HomeScreen = () => {

    return (
        <>
            <div className='flex space-x-4 '>
                <LeftNavBar />
                <div className='flex  max-w-1200 1fr overflow-hidden  md:grid-cols-60px 1fr md:mx-20 sm:grid-cols-1 sm:mx-8 sm:my-58 '>
                    <div>
                        <Thread title="Home" />
                    </div>
                </div>
            </div>


        </>




    );
}

export default HomeScreen;
