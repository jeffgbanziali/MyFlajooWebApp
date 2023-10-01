import React, { useContext } from 'react';
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
    return (
        <>


            <div className=' fixed z-10 justify-end flex w-screen  xl:w-[80%] '>
                <div className='  absolute  h-auto w-full  items-center flex xl:justify-between shadow-lg  '>
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

                            <div className='xl:flex hidden p-2 '>
                                <div className='flex ml-10 h-10 justify-center  rounded-2xl items-center bg-gray-800 space-x-4 ' >
                                    <NavLink to="/">
                                        <div className='flex flex-row hover:text-red-700 cursor-pointer p-2 rounded-2xl  hover:bg-gray-200 text-gray-400 text-2xl font-bold  mb-2 mt-2 '>
                                            <TbSmartHome size="20" />
                                            <p className="flex items-center justify-center ml-2 text-xs font-semibold">Home</p>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className='flex justify-center  items-center  h-10 space-x-4 ' >
                                    <div className='xl:flex hidden p-4   '>
                                        <div className="w-8 h-8 hover:bg-gray-500 bg-gray-300 rounded-full cursor-pointer flex items-center justify-center">
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
                                                <div className="absolute flex ml-10 mb-7">
                                                    <div class="flex  bg-red-600  w-5 h-5 rounded-full items-center justify-center ">
                                                        <p className="text-white text-[12px] font-semibold">2</p>
                                                    </div>
                                                </div>
                                                <BsMessenger
                                                    size="16" color='black' />
                                            </div>
                                        </NavLink>
                                    </div>
                                    <div className="w-8 h-8 hover:bg-gray-500  bg-gray-300 rounded-full cursor-pointer flex items-center justify-center">
                                        <NavLink to="/menu">
                                            <CgMenuGridR
                                                size="20" color='black' />
                                        </NavLink>
                                    </div>
                                    <div className=" flex items-center focus:outline-none bg-slate-500 p-1 w-32 hover:bg-gray-500 rounded-full cursor-pointer">
                                        <NavLink to="/profile">
                                            <img className="w-8 h-8 rounded-full" src="https://play-lh.googleusercontent.com/H-BL_nBtFpQY92qaBHGZ4cHAcceuBfLiXWAHGOUDPS-9Gp4TPnhEjQSCZWvpfEFOv_A" alt="Profil" />
                                        </NavLink>
                                        <div>
                                            <h2 className="text-[16px]  font-semibold text-gray-400">{userData.pseudo}</h2>
                                        </div>
                                        <div className="flex items-center justify-center  mr-2">
                                            <button type="">
                                                <BsCaretDownFill size="14" color='black' />
                                            </button>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center '  >
                                        <Logout />
                                    </div>
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
