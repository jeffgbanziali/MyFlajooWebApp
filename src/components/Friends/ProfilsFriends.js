import React from 'react';




const ProfilsFriends = () => {


    return (
        <div className="flex flex-col items-center mt-20 justify-center w-full h-full bg-black">

            <div className="flex flex-col w-80 h-auto md:h-auto md:w-72 lg:h-auto lg:w-360px bg-black border-1 border-red-700 border-opacity-0 rounded-xl">
                <div className="flex p-3 ml-6 mt-4 rounded-b-xl">
                    <h1 className="text-center text-slate-400 font-semibold text-2xl">
                        My Friends
                    </h1>
                </div>
                <div className="flex flex-col -space-y-2">
                    <div className="flex mt-2 p-4 hover:bg-gray-800 cursor-pointer rounded-b-xl items-center justify-between">
                        <div className="">
                            <div className="flex flex-row items-center">
                                <div className="flex items-center">
                                    <img src={"/default-profile.png"} alt="" className="w-16 h-16 rounded-full" />
                                    <div className="flex flex-col ml-4 text-justify">
                                        <h2 className="text-center text-white font-normal text-lg">@Koukouda</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilsFriends;

