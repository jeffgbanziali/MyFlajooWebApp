import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import Follow from '../ProfileUtils/Follow';



const LeftNavBar = () => {
    const [nav, setNav] = useState(false);
    const userData = useSelector((state) => state.userReducer);
    //   const dispatch = useDispatch();


    return (
        <>
            <div className="  flex w-96 h-auto md:h-auto md:w-72 lg:h-[400px] lg:w-full   border-2 border-red-700 border-opacity-50 rounded-xl">
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
            <div onClick={() => setNav(!nav)} className=' cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {nav && (
                <div className='flex flex-col justify-center items-center absolute top-0 left-0 h-screen w-full bg-gradient-to-b from-black to-gray-800 text-gray-500 '>

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

                </div>
            )}

        </>


    );
};





export default LeftNavBar;
