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
        <div className='fixed top-0 w-full h-14 items-center  bg-gradient-to-b z-50 text-white bg-gray-900 '>
            <div className='flex justify-between  xl:flex-row flex-col ml-6  items-center '
            >
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
                                    className=" cursor-pointer flex items-center relative z-10 w-10 h-10 py-3 pl-10 rounded-full border bg-transparent outline-none focus:w-full  focus:cursor-text  focus:ring-red-600 focus:pl-10 focus:pr-4" />
                                <FiSearch className="absolute flex items-center justify-center inset-y-0 my-auto h-10 w-10 text-white border-r border-transparent stroke-gray-500 px-3.5" />
                            </form>
                        </div>
                    </div>
                </div>
                {
                    uid ? (
                        <>
                            <div className='flex ml-10 justify-center  ' >
                                <div className='  hover:text-black w-full h-full text-gray-400 text-2xl font-bold mr-20 mb-2 mt-2 '>
                                    <NavLink to="/">
                                        <TbSmartHome size="36" />
                                    </NavLink>
                                </div>
                                <div className='hover:text-black text-gray-400 text-2xl font-bold mb-2 mt-2 '>
                                    <NavLink to="/">
                                        <MdOutlineOndemandVideo size="36" />
                                    </NavLink>
                                </div>
                                <div className='hover:text-black text-gray-400 text-2xl font-bold mb-2 mt-2 ml-20 '>
                                    <NavLink to="/">
                                        <HiOutlineUserGroup size="36" />
                                    </NavLink>
                                </div>
                            </div>
                            <div className='flex justify-end '>
                                <div className="w-10 h-10 hover:bg-gray-500 bg-gray-300 rounded-full mr-3 cursor-pointer flex items-center justify-center">
                                    <NavLink to="/notifications">
                                        <IoMdNotifications size="26" color='black' />
                                    </NavLink>
                                </div>
                                <div className="w-10 h-10 hover:bg-gray-500 bg-gray-300 rounded-full cursor-pointer mr-3 flex items-center justify-center">
                                    <NavLink to="/chat">
                                        <BsMessenger size="22" color='black' />
                                    </NavLink>
                                </div>
                                <div className="w-10 h-10 hover:bg-gray-500  bg-gray-300 rounded-full cursor-pointer  flex items-center justify-center">
                                    <NavLink to="/menu">
                                        <CgMenuGridR size="22" color='black' />
                                    </NavLink>
                                </div>

                                <div className="w-10 h-10 hover:bg-gray-500 bg-gray-300 rounded-full ml-3 cursor-pointer">
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
                        <ul className='flex justify-between items-center mb-2 mx-10 '>

                            <div className='flex justify-between items-center'>
                                <NavLink to="/sign-in">
                                    <button className=' bg-red-400 hover:bg-red-700 font-bold w-24 h-8 my-4 rounded text-white  mb-2'>
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
