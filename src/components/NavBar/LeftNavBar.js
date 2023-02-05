import React from 'react';
import { FaFacebookMessenger } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';



const LeftNavBar = () => {
    const userData = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();


    return (


        <div className=" p-2 mt-10 border-r-2 border-red-700 
        border-opacity-50 bg-gray-900 h-screen w-72
         ">
            <div className="">
                <div className="flex items-center  mt-5 ml-5">
                    <img src={userData.picture} alt="user" className="rounded-full h-12 w-12" />
                    <h1 className="text-white font-semibold text-xl">{userData.pseudo}</h1>
                </div  >
                <div className="flex items-center mt-5" >
                    <FaFacebookMessenger className="text-4xl text-blue-500" />
                    <h1 className="text-white font-semibold text-xl">Messenger</h1>
                </div>
                <div className="flex items-center mt-5" >
                    <FaFacebookMessenger className="text-4xl text-blue-500" />
                    <h1 className="text-white font-semibold text-xl">Messenger</h1>
                </div>
                <div className="flex items-center mt-5" >
                    <FaFacebookMessenger className="text-4xl text-blue-500" />
                    <h1 className="text-white font-semibold text-xl">Messenger</h1>
                </div>
                <div className="flex items-center mt-5" >
                    <FaFacebookMessenger className="text-4xl text-blue-500" />
                    <h1 className="text-white font-semibold text-xl">Messenger</h1>
                </div> <div className="flex items-center mt-5" >
                    <FaFacebookMessenger className="text-4xl text-blue-500" />
                    <h1 className="text-white font-semibold text-xl">Messenger</h1>
                </div>
            </div>



        </div>

    );
};





export default LeftNavBar;
