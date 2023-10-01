import React, { useContext, useEffect, useState } from 'react';
import { UidContext } from '../../Context/AppContext';
import Logout from '../../screens/Logout/Logout';
import { NavLink } from 'react-router-dom';
import image from "../../../src/assets/Logos/1.png";
import { BsMessenger } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";
import { TbSmartHome } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { BsCaretDownFill } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { IoNotifications } from 'react-icons/io5';



const NavBar = () => {
    const uid = useContext(UidContext);
    console.log(uid);
    const userData = useSelector((state) => state.userReducer);

    const [nav, setNav] = useState(false);


    const handleClick = () => {
        setNav(!nav);
    }





    return (
        <>


            <div className=' xl:fixed z-10 justify-end h-14 bg-white flex w-screen shadow-lg xl:w-[100%] '>
                <div className='  absolute  h-auto w-full  items-center flex xl:justify-between   '>
                    <div className='flex items-center p-2'>
                        <NavLink to={uid ? "/" : "/start"} >
                            <img src={image} alt="logo" className="h-10 w-10" />
                        </NavLink>
                        <div className='h-8 w-72  bg-gray-200 rounded-full justify-center hidden xl:flex xl:items-center ml-4'>
                            <FiSearch className='h-4 w-4 ml-2 text-gray-500' />
                            <input type="text" placeholder='Search Flajoo' className='h-8 w-52  bg-gray-200 rounded-full focus:outline-none ml-2' />
                        </div>
                    </div>
                    {uid ? (
                        <>

                            <div className='xl:flex flex p-2 ml-20'>
                                <div className='flex xl:mr-10 xl:ml-10 xl:h-10 mr-2 h-10 ml-2 justify-center  xl:rounded-2xl w-20 rounded-xl items-center bg-gray-800 xl:space-x-4 ' >
                                    <NavLink to="/">
                                        <div className='xl:flex xl:flex-row xl:hover:text-red-700 cursor-pointer p-2 rounded-2xl  hover:bg-gray-200 text-gray-400 text-2xl font-bold  mb-2 mt-2 '>
                                            <TbSmartHome size="20" />
                                            <p className="xl:flex hidden items-center justify-center ml-2 text-xs font-semibold">Home</p>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className='flex justify-center  items-center  h-10 space-x-4 ' >
                                    <div className='xl:flex   '>
                                        <div className="w-8 h-8 xl:hover:bg-gray-500 bg-gray-300 rounded-full cursor-pointer flex items-center justify-center">
                                            <div className="absolute flex ml-10 mb-7">
                                                <div class="flex  bg-red-600  w-7 h-5 rounded-full items-center justify-center ">
                                                    <p className="text-white text-[12px] font-semibold">20+</p>
                                                </div>
                                            </div>
                                            <NavLink to="/notifications">
                                                <IoNotifications size="20" color='black' />
                                            </NavLink>
                                        </div>
                                    </div>
                                    <div>
                                        <NavLink to="/chat">
                                            <div className="w-8 h-8 hover:bg-gray-500   bg-gray-300 rounded-full cursor-pointer flex items-center justify-center">
                                                <div className="absolute flex xl:ml-8 xl:mb-7 ml-8 mb-6">
                                                    <div class="flex  bg-red-600  w-5 h-5 rounded-full items-center justify-center ">
                                                        <p className="text-white text-[12px] font-semibold">2</p>
                                                    </div>
                                                </div>
                                                <BsMessenger
                                                    size="16" color='black' />
                                            </div>
                                        </NavLink>
                                    </div>
                                    <div className="w-8 h-8 hover:bg-gray-500 hidden bg-gray-300 rounded-full cursor-pointer xl:flex items-center justify-center">
                                        <NavLink to="/menu">
                                            <CgMenuGridR
                                                size="20" color='black' />
                                        </NavLink>
                                    </div>
                                    <div className=" xl:flex items-center focus:outline-none bg-slate-500 p-1 xl:w-32 xl:hover:bg-gray-500 rounded-full cursor-pointer">
                                        <NavLink to={`/profile/${userData._id}`}>
                                            <img className="w-8 h-8 rounded-full" src={userData.picture} alt="Profil" />
                                        </NavLink>
                                        <div onClick={handleClick} className="xl:flex hidden">
                                            <h2 className="text-[16px]  font-semibold text-gray-400">{userData.pseudo}</h2>
                                        </div>
                                        {nav &&
                                            <div className="fixed top-14 right-2 rounded-lg shadow-lg border border-gray-200 flex ">
                                                <div className="w-[600px] xl:w-[300px] bg-white p-4 rounded-lg shadow-lg transform transition-all ease-in-out duration-300 scale-100">
                                                    <div className="flex  justify-between" >
                                                        <h3 className='text-black text-xl'>LET'S SEE WHAT'S NEW</h3>

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
                                                    <div className='flex justify-center h-12 w-[100%] xl:rounded-xl sm:rounded-full sm:w-16 xl:w-[100%] hover:bg-gray-400 p-2 xl:justify-start text-xl items-center space-x-2.5 hoverAnimation'>
                                                        <TbSmartHome className='text-4xl text-blue-300' />
                                                        <h4 className=' text-[16px] text-black hidden xl:inline'>
                                                            Home
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                        <div className="xl:flex xl:items-center xl:justify-center hidden xl:mr-2">
                                            <button type="">
                                                <BsCaretDownFill size="14" color='black' />
                                            </button>
                                        </div>
                                    </div>
                                    {/*<div className='xl:flex hidden justify-between items-center '  >
                                        <Logout />
                                    </div>*/}
                                </div>

                            </div>

                        </>
                    ) : (
                        <div className='flex items-center justify-center space-x-4'>
                            <NavLink to="/sign-in">
                                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
                                    Login
                                </button>
                            </NavLink>
                            <NavLink to="/sign-up">
                                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
                                    Sign Up
                                </button>
                            </NavLink>
                        </div>
                    )}
                </div >
            </div >
        </>
    );
}

export default NavBar;
