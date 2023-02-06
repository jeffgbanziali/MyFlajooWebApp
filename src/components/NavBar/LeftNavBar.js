import React from 'react';
import { FaFacebookMessenger } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Follow from '../ProfileUtils/Follow';



const LeftNavBar = () => {
    const userData = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();


    return (
        <>
            <div className=" flex w-96 h-[500px]  mt-20 ml-6  border-2 border-red-700 border-opacity-50 rounded-xl">
                <div className="flex flex-col w-full h-full rounded-xl">

                    <div className="flex flex-col mt-24 items-center rounded-b-xl bg-gray-600 w-full h-full ">
                        <div className="flex items-center -mt-10"  >
                            <img src="https://play-lh.googleusercontent.com/H-BL_nBtFpQY92qaBHGZ4cHAcceuBfLiXWAHGOUDPS-9Gp4TPnhEjQSCZWvpfEFOv_A" alt="" className="w-20 h-20 rounded-full" />

                        </div>
                        <div className="flex flex-col mt-2">
                            <h2 className="text-center text-gray-800 font-semibold text-xl">{userData.pseudo}</h2>
                            <h1 className="text-center text-gray-400 font-normal text-lg">@Surname</h1>
                        </div>
                        <div>
                            <Follow />
                        </div>
                        <div className="flex ">
                            <button className="bg-gray-800 hover:bg-blue-500 w-32 h-10 rounded-xl">
                                <h2 className="text-center text-gray-600 font-semibold text-lg">go to profile</h2>
                            </button>
                        </div>


                    </div>
                </div>




            </div>

        </>


    );
};





export default LeftNavBar;
