import React, { } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import LeftNavBar from '../../components/NavBar/LeftNavBar';



const HomeScreen = () => {

    return (


        <>
            <div className=" flex  items-center w-full h-screen bg-gray-500">
                <LeftNavBar />
                <div className="main">
                    <div className="home-header">
                    </div>
                </div>
                <div className="right-side">
                    <div className="right-side-container">
                        <div className="wrapper">
                        </div>
                    </div>
                </div>
            </div>
        </>




    );
}

export default HomeScreen;
