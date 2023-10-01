import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { TbSmartHome } from "react-icons/tb";

function NavbarPopup() {

    const userData = useSelector((state) => state.userReducer);

    return (
        <div className="fixed top-14 right-2 rounded-lg shadow-lg border border-gray-200 flex ">
            <div className="w-[600px] xl:w-[300px] bg-white p-4 rounded-lg shadow-lg transform transition-all ease-in-out duration-300 scale-100">
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
                        <TbSmartHome className='text-4xl text-blue-300' />
                        <h4 className=' text-[16px] text-black hidden xl:inline'>
                            Home
                        </h4>
                    </div>
                    <div className='flex justify-center h-12 w-[100%] xl:rounded-xl sm:rounded-full sm:w-16 xl:w-[100%] hover:bg-gray-400 p-2 xl:justify-start text-xl items-center space-x-2.5 hoverAnimation'>
                        <TbSmartHome className='text-4xl text-blue-300' />
                        <h4 className=' text-[16px] text-black hidden xl:inline'>
                            Home
                        </h4>
                    </div>
                    <div className='flex justify-center h-12 w-[100%] xl:rounded-xl sm:rounded-full sm:w-16 xl:w-[100%] hover:bg-gray-400 p-2 xl:justify-start text-xl items-center space-x-2.5 hoverAnimation'>
                        <TbSmartHome className='text-4xl text-blue-300' />
                        <h4 className=' text-[16px] text-black hidden xl:inline'>
                            Home
                        </h4>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NavbarPopup
