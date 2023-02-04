import React, { } from 'react';
import LeftNavBar from '../../components/NavBar/LeftNavBar';
//import Thread from '../../components/Thread/Thread';
import Stories from '../../components/Home/Stories';
import AddPosts from '../../components/Home/AddPosts';
import Posts from '../../components/Home/Posts';



const HomeScreen = () => {

    return (
        <>
            <div className='relative  w-full h-screen bg-gray-500'>
                <div className='flex justify-center items-center '>
                    <Stories title="Home" />
                </div>
                <div className='flex justify-center items-center '>
                    <AddPosts title="Home" />
                </div>
                <div className='flex justify-center items-center '>
                    <Posts title="Home" />
                </div>

            </div>

        </>




    );
}

export default HomeScreen;
