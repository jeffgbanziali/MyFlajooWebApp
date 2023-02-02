import React from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavBar = () => {
    return (
        <div className="relative w-72 h-screen border-r-2 flex flex-col bg-white ">
            <div className=" flex flex-col justify-center items-center content-center self-center">
                <div className=" flex flex-col justify-center items-center content-center self-center">
                    <div className=" rounded-full mt-20">
                        <img className="w-28 h-28 rounded-full"
                            src="https://play-lh.googleusercontent.com/H-BL_nBtFpQY92qaBHGZ4cHAcceuBfLiXWAHGOUDPS-9Gp4TPnhEjQSCZWvpfEFOv_A" alt="" />
                    </div>
                    <div>
                        <p className="text-2xl font-bold mt-5">
                            Eren Jager
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};





export default LeftNavBar;
