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
        <div className=' fixed shadow-xl shadow-gray-800  w-full justify-between items-center bg-slate-800 border-b border-gray-900  bg-gradient-to-b z-50 text-white '>
            <div className='flex justify-between  xl:flex-row flex-col ml-6 items-center '>
                <div className='flex items-center' >
                    <div className='flex items-center'>
                        <a href="/" className=' text-white text-2xl font-bold '>
                            <img className="w-12 h-12 rounded-full" src={image} alt="" />
                        </a>
                    </div>

                    <div className=" flex items-center rounded-2xl bg-gray-800 ml-2"  >
                        <div className="mx-auto flex items-center max-w-md">
                            <form action="" className="relative  mx-auto w-max">
                                <input
                                    type="search"
                                    placeholder='Search'
                                    className=" cursor-pointer flex items-center relative z-10 w-8 h-8 py-3 pl-10 rounded-full border bg-transparent outline-none focus:w-full  focus:cursor-text  focus:ring-red-600 focus:pl-10 focus:pr-4" />
                                <FiSearch className="absolute flex items-center justify-center inset-y-0 my-auto h-10 w-10 text-white border-r border-transparent stroke-gray-500 px-3.5" />
                            </form>
                        </div>
                    </div>
                </div>
                {
                    uid ? (
                        <>

                            <div className='flex items-center space-x-8 mr-6 '>
                                <div className='flex ml-10 justify-end space-x-6 ' >
                                    <div className='flex flex-row hover:text-red-700 cursor-pointer p-2 rounded-2xl  bg-gray-200 text-gray-400 text-2xl font-bold  mb-2 mt-2 '>
                                        <NavLink to="/">
                                            <TbSmartHome size="28" />
                                        </NavLink>
                                        <p className="flex items-center justify-center ml-2 text-xs font-semibold">Home</p>
                                    </div>
                                    <div className='flex flex-row hover:text-red-700 cursor-pointer p-2 rounded-2xl  bg-gray-200 text-gray-400 text-2xl font-bold mb-2 mt-2 '>
                                        <NavLink to="/">
                                            <MdOutlineOndemandVideo size="28" />
                                        </NavLink>
                                        <p className="flex items-center justify-center ml-2 text-xs font-semibold">Home</p>
                                    </div>
                                    <div className='flex flex-row hover:text-red-700 cursor-pointer rounded-2xl  p-2 bg-gray-200 text-gray-400 text-2xl font-bold mb-2 mt-2  '>
                                        <NavLink to="/">
                                            <HiOutlineUserGroup size="28" />
                                        </NavLink>
                                        <p className="flex items-center justify-center ml-2 text-xs font-semibold">Home</p>
                                    </div>

                                </div>
                                <div className='flex items-center  space-x-4'>
                                    <div>
                                        <div className="w-12 h-12 hover:bg-gray-500 bg-gray-300 rounded-full cursor-pointer flex items-center justify-center">
                                            <div className="absolute flex ml-10 mb-6">
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

                                        <div className="w-12 h-12 hover:bg-gray-500  bg-gray-300 rounded-full cursor-pointer flex items-center justify-center">
                                            <div className="absolute flex ml-10 mb-6">
                                                <div class="flex  bg-red-600  w-5 h-5 rounded-full items-center justify-center ">
                                                    <p className="text-white text-[12px] font-semibold">2</p>
                                                </div>
                                            </div>
                                            <NavLink to="/chat">
                                                <BsMessenger
                                                    size="24" color='black' />
                                            </NavLink>
                                        </div>
                                    </div>

                                    <div className="w-12 h-12 hover:bg-gray-500  bg-gray-300 rounded-full cursor-pointer flex items-center justify-center">
                                        <NavLink to="/menu">
                                            <CgMenuGridR
                                                size="24" color='black' />
                                        </NavLink>
                                    </div>

                                    <div className=" flex items-center justify-between  bg-slate-500 p-1 w-32 hover:bg-gray-500 rounded-full cursor-pointer">
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
                                    <div className='flex justify-between items-center mr-4'  >
                                        <Logout />
                                    </div>
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


            </div>
        </div>

    );
}

export default NavBar;
