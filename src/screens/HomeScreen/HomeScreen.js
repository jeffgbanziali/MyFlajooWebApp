import React, { } from 'react';
import Thread from '../../components/Thread/Thread';
import LeftBarPro from '../../components/NavBar/LeftBarPro';
import NavBar from '../../components/NavBar/NavBar';



const HomeScreen = () => {

    return (
        <>
            <NavBar />
            <div className="flex flex-row -mt-20  sm:mt-0  ">
                <div className=" h-auto xl:inline mt-10  flex-col w-[20%] ">
                    <LeftBarPro />
                </div>
                <div className="flex flex-col  xl:h-14 h-14 w-screen  sm:w-[70%] ">
                    <div className="flex mt-20  flex-row justify-center space-x-8 w-[100%] h-screen">
                        <div className="flex flex-col xl:w-[60%] h-auto">
                            <Thread />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeScreen;
