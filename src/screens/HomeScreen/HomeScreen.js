import React, { } from 'react';
import LeftNavBar from '../../components/NavBar/LeftNavBar';
import Thread from '../../components/Thread/Thread';



const HomeScreen = () => {

    return (
        <>
            <div className='flex  '
            >
                <div className='hidden md:block'>
                    <LeftNavBar />
                </div>
                <div className='flex justify-center max-w-1200 grid-cols-60px 1fr overflow-hidden mx-auto relative md:grid-cols-60px 1fr md:mx-20 sm:grid-cols-1 sm:mx-8 sm:my-58 '>

                    <div>
                        <div className='text-center'>
                            <Thread title="Home" />
                        </div>
                    </div>

                </div>
                <div className='hidden md:block'>
                    <LeftNavBar />
                </div>
            </div>


        </>




    );
}

export default HomeScreen;
