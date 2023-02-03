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



const NavBar = () => {
    const uid = useContext(UidContext);
    return (
        <div className='flex justify-between items-center bg-gray-900 '>
            <div className='flex items-center m-2' >
                <div className='flex items-center'>
                    <a href="/" className=' text-white text-2xl font-bold mb-2 mt-2 ml-5'>
                        <img className="w-12 h-12 rounded-full" src={image} alt="" />
                    </a>
                </div>

                <div className="relative z-10 flex  rounded-2xl bg-gray-800 items-center ml-5"  >
                    <div class="mx-auto max-w-md">
                        <form action="" className="relative mx-auto w-max">
                            <input type="search" className="peer cursor-pointer relative z-10 w-8 h-8 pl-8 rounded-full border bg-transparent outline-none focus:w-full focus:cursor-text  focus:ring-red-600 focus:pl-16 focus:pr-4" />
                            <FiSearch className="absolute flex items-center justify-center inset-y-0 my-auto h-8 w-12 text-white border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500" />
                        </form>
                    </div>
                </div>
            </div>
            {
                uid ? (
                    <>
                        <div className='flex justify-center  ' >
                            <div className='  hover:bg-red-700 text-white text-2xl font-bold mr-20 mb-2 mt-2 '>
                                <NavLink to="/home">
                                    <TbSmartHome size="36" />
                                </NavLink>
                            </div>
                            <div className='hover:bg-red-700 text-white text-2xl font-bold mb-2 mt-2 '>
                                <NavLink to="/home">
                                    <MdOutlineOndemandVideo size="36" />
                                </NavLink>
                            </div>
                            <div className='hover:bg-red-700 text-white text-2xl font-bold mb-2 mt-2 ml-20 '>
                                <NavLink to="/home">
                                    <HiOutlineUserGroup size="36" />
                                </NavLink>
                            </div>
                        </div>
                        <div className='flex justify-end '>
                            <div className="w-10 h-10 bg-gray-300 rounded-full mr-3 cursor-pointer flex items-center justify-center">
                                <NavLink to="/notifications">
                                    <IoMdNotifications size="26" />
                                </NavLink>
                            </div>
                            <div className="w-10 h-10 bg-gray-300 rounded-full cursor-pointer mr-3 flex items-center justify-center">
                                <NavLink to="/chat">
                                    <BsMessenger size="22" />
                                </NavLink>
                            </div>
                            <div className="w-10 h-10 bg-gray-300 rounded-full cursor-pointer  flex items-center justify-center">
                                <NavLink to="/menu">
                                    <CgMenuGridR size="22" />
                                </NavLink>
                            </div>

                            <div className="w-10 h-10 bg-gray-300 rounded-full ml-3 cursor-pointer">
                                <NavLink to="/profile">
                                    <img className="w-10 h-10 rounded-full" src="https://play-lh.googleusercontent.com/H-BL_nBtFpQY92qaBHGZ4cHAcceuBfLiXWAHGOUDPS-9Gp4TPnhEjQSCZWvpfEFOv_A" alt="Profil" />
                                </NavLink>
                            </div>
                            <div className='flex justify-between items-center mx-4'  >
                                <Logout />
                            </div>

                        </div>



                    </>

                ) : (
                    <ul className='flex justify-between items-center mx-10 '>

                        <li><a href="/sign-in">
                            <button className=' bg-red-400 hover:bg-red-700 font-bold py-1 px-4 my-4 rounded text-white text-sm mt-4 mb-2'>Sign In</button>
                        </a></li>
                        <li>
                            <a href="/sign-up">
                                <button className=' bg-blue-400 hover:bg-blue-700 font-bold ml-4 py-1 px-4 my-4 rounded text-white text-sm mt-4 mb-2 mr-2'>Sign Up</button>
                            </a>
                        </li>
                    </ul>
                )
            }


        </div>
    );
}

export default NavBar;
