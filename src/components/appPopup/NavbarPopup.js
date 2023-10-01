import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaHandsHelping } from "react-icons/fa";
import { RiSettings3Fill } from "react-icons/ri";
import { BsFillMoonFill } from "react-icons/bs";


import Logout from '../../screens/Logout/Logout';

function NavbarPopup() {

    const userData = useSelector((state) => state.userReducer);

    return (
        <div className="fixed top-14 right-2 rounded-lg shadow-lg border border-gray-200 flex ">
            <div className="w-[600px] xl:w-[320px] bg-white p-4 rounded-lg shadow-lg transform transition-all ease-in-out duration-300 scale-100">
                <NavLink to={`/profile/${userData._id}`}>
                    <div className=" flex flex-row justify-center h-12 w-[100%] xl:rounded-xl sm:rounded-full sm:w-16 xl:w-[100%] hover:bg-gray-400 p-2 xl:justify-start text-xl items-center space-x-2.5 hoverAnimation">

                        <img className="w-10 h-10 rounded-full" src={userData.picture} alt="Profil" />
                        <div className="xl:flex hidden">
                            <h2 className="text-[16px]  font-semibold text-gray-900">{userData.pseudo}</h2>
                        </div>
                    </div>
                </NavLink>
                <div className='mt-4 '>
                    <div className='flex justify-center h-12 w-[100%] xl:rounded-xl sm:rounded-full sm:w-16 xl:w-[100%] hover:bg-gray-400 p-2 xl:justify-start text-xl items-center space-x-2.5 hoverAnimation'>
                        <RiSettings3Fill className='text-[24px] text-black' />
                        <h4 className=' text-[16px] text-black hidden xl:inline'>
                            Settings and confidentiality
                        </h4>
                    </div>
                    <div className='flex justify-center h-12 w-[100%] xl:rounded-xl sm:rounded-full sm:w-16 xl:w-[100%] hover:bg-gray-400 p-2 xl:justify-start text-xl items-center space-x-2.5 hoverAnimation'>
                        <BsFillMoonFill className='text-[24px] text-black' />
                        <h4 className=' text-[16px] text-black hidden xl:inline'>
                            Display and accessibility
                        </h4>
                    </div>
                    <div className='flex justify-center h-12 w-[100%] xl:rounded-xl sm:rounded-full sm:w-16 xl:w-[100%] hover:bg-gray-400 p-2 xl:justify-start text-xl items-center space-x-2.5 hoverAnimation'>
                        <FaHandsHelping className='text-[24px] text-black' />
                        <h4 className=' text-[16px] text-black hidden xl:inline'>
                            Help
                        </h4>
                    </div>
                    <div className='flex justify-center h-12 w-[100%] xl:rounded-xl sm:rounded-full sm:w-16 xl:w-[100%] hover:bg-gray-400 p-2 xl:justify-start text-xl items-center space-x-2.5 hoverAnimation'>
                        <Logout />
                        <h4 className=' text-[16px] text-black hidden xl:inline'>
                            Logout
                        </h4>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NavbarPopup
