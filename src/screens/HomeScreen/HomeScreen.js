import React, { } from 'react';
import LeftNavBar from '../../components/NavBar/LeftNavBar';
import Thread from '../../components/Thread/Thread';



const HomeScreen = () => {

    return (
        <>
            <div className='flex max-w-1200 grid-cols-60px 1fr 374px overflow-hidden mx-auto my-58 relative md:grid-cols-60px 1fr md:mx-20 sm:grid-cols-1 sm:mx-8 sm:my-58 '>
                <LeftNavBar />
                <div>
                    <div className='mx-auto ml-20 my-12 text-center'>
                        <Thread title="Home" />
                    </div>
                </div>

            </div>

        </>




    );
}

export default HomeScreen;
