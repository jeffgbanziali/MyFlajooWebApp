import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const FollowBar = () => {
    const userData = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();


    return (
        <div className=" shadow-xl shadow-gray-800 flex flex-col w-80 h-auto md:h-auto md:w-72 lg:h-auto lg:w-[360px] bg-gray-600  border-1 border-red-700 border-opacity-0 rounded-xl">
            <div className="flex p-3 ml-6 mt-4 rounded-b-xl bg-gray-600 ">
                <h1 className="text-center text-slate-400 font-semibold text-2xl">
                    Who is follow you
                </h1>
            </div>
            <div className="flex flex-col -space-y-2 ">
                <div className="flex mt-2 p-4 hover:bg-gray-800 cursor-pointer rounded-b-xl  items-center justify-between   " >
                    <div className="" >
                        <div className="flex flex-row items-center ">
                            <div className="flex items-center" >
                                <img src="https://play-lh.googleusercontent.com/H-BL_nBtFpQY92qaBHGZ4cHAcceuBfLiXWAHGOUDPS-9Gp4TPnhEjQSCZWvpfEFOv_A" alt="" className="w-16 h-16   rounded-full" />
                                <div className="flex flex-col ml-4 text-justify ">
                                    <h2 className="text-center text-gray-900 font-semibold text-xl">Jeff Flaj</h2>
                                    <h2 className="text-center text-gray-400 font-normal text-lg">@Pseudo</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="bg-red-600  hover:bg-red-500 w-24 h-10 rounded-2xl">
                        <h2 className="text-center text-slate-200 font-semibold text-[16px]">Follow</h2>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FollowBar;
