import React, { useContext } from 'react';
import { UidContext } from '../../Context/AppContext';
import Logout from '../../screens/Logout/Logout';
import { NavLink } from 'react-router-dom';
import image from "../../../src/assets/Logos/1.png";
import { BsMessenger } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { TbSmartHome } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { BsCaretDownFill } from "react-icons/bs";

import { useSelector } from 'react-redux';



const NavBar = () => {
    const uid = useContext(UidContext);
    const userData = useSelector((state) => state.userReducer);
    return (
        <div >
            <div className=' fixed z-10 h-14 w-full bg-gray-800 flex justify-between shadow-lg p-2  '>
                <div className='flex'>
                    <img src={image} alt="logo" className="h-10  w-10" />
                    <div className='h-10 w-64 bg-gray-200 rounded-full flex items-center ml-4'>
                        <FiSearch className='h-4 w-4 ml-2 text-gray-500' />
                        <input type="text" placeholder='Search Flajoo' className='h-10 w-52 bg-gray-200 rounded-full focus:outline-none ml-2' />
                    </div>
                </div>
                {
                    uid ? (
                        <>

                            <div className='flex items-center'>
                                <div className='flex ml-10 justify-end space-x-6 ' >
                                    <div className='flex flex-row hover:text-red-700 cursor-pointer p-2 rounded-2xl  hover:bg-gray-200 text-gray-400 text-2xl font-bold  mb-2 mt-2 '>
                                        <NavLink to="/">
                                            <TbSmartHome size="28" />
                                        </NavLink>
                                        <p className="flex items-center justify-center ml-2 text-xs font-semibold">Home</p>

                                    </div>
                                    <div className='flex flex-row hover:text-red-700 cursor-pointer p-2 rounded-2xl  hover:bg-gray-200 text-gray-400 text-2xl font-bold mb-2 mt-2 '>
                                        <NavLink to="/">
                                            <MdOutlineOndemandVideo size="28" />
                                        </NavLink>
                                        <p className="flex items-center justify-center ml-2 text-xs font-semibold">Home</p>
                                    </div>
                                    <div className='flex flex-row hover:text-red-700 cursor-pointer rounded-2xl  p-2 hover:bg-gray-200 text-gray-400 text-2xl font-bold mb-2 mt-2  '>
                                        <NavLink to="/">
                                            <HiOutlineUserGroup size="28" />
                                        </NavLink>
                                        <p className="flex items-center justify-center ml-2 text-xs font-semibold">Home</p>
                                    </div>

                                </div>

                            </div>

                            <div className='flex space-x-2 '>
                                <div>
                                    <div className="w-10 h-10 hover:bg-gray-500 bg-gray-300 rounded-full cursor-pointer flex items-center justify-center">
                                        <div className="absolute flex ml-10 mb-7">
                                            <div class="flex  bg-red-600  w-7 h-5 rounded-full items-center justify-center ">
                                                <p className="text-white text-[12px] font-semibold">20+</p>
                                            </div>
                                        </div>
                                        <NavLink to="/notifications">
                                            <IoMdNotifications size="28" color='black' />
                                        </NavLink>
                                    </div>
                                </div>
                                <div>
                                    <div className="w-10 h-10 hover:bg-gray-500   bg-gray-300 rounded-full cursor-pointer flex items-center justify-center">
                                        <div className="absolute flex ml-10 mb-7">
                                            <div class="flex  bg-red-600  w-5 h-5 rounded-full items-center justify-center ">
                                                <p className="text-white text-[12px] font-semibold">2</p>
                                            </div>
                                        </div>
                                        <NavLink to="/chat">
                                            <BsMessenger
                                                size="20" color='black' />
                                        </NavLink>
                                    </div>
                                </div>

                                <div className="w-10 h-10 hover:bg-gray-500  bg-gray-300 rounded-full cursor-pointer flex items-center justify-center">
                                    <NavLink to="/menu">
                                        <CgMenuGridR
                                            size="24" color='black' />
                                    </NavLink>
                                </div>
                                <div>
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

                                </div>
                                <div className='flex justify-between items-center '  >
                                    <Logout />
                                </div>
                            </div>

                        </>

                    ) : (
                        <ul className='flex justify-between items-center mb-2 mx-10 '>

                            <div className='flex justify-between items-center'>
                                <NavLink to="/sign-in">
                                    <button className=' bg-red-400  hover:bg-red-700 font-bold w-24 h-8 my-4 rounded text-white  mb-2'>
                                        <h2 className='' >
                                            Sign In
                                        </h2>
                                    </button>
                                </NavLink>
                            </div>
                            <div>
                                <NavLink to="/sign-up">
                                    <button className=' bg-blue-400  hover:bg-blue-700 font-bold text-center ml-4 w-24 h-8 my-4 rounded text-white text-sm mb-2 mr-2'>
                                        <h2 className='' >
                                            Sign Up
                                        </h2>
                                    </button>
                                </NavLink>
                            </div>
                        </ul>
                    )
                }


            </div >
        </div >

    );
}

export default NavBar;
