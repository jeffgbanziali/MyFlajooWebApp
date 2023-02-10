import React from 'react';
import image from "../../../src/assets/Logos/1.png";
import { FiSearch } from 'react-icons/fi';
import { BsCaretDownFill, BsMessenger } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoMdNotifications } from 'react-icons/io';
import { CgMenuGridR } from 'react-icons/cg';
import { TbSmartHome } from 'react-icons/tb';
import { MdOutlineOndemandVideo } from 'react-icons/md';
import { HiOutlineUserGroup } from 'react-icons/hi';

const NatBar = () => {

    const userData = useSelector((state) => state.userReducer);
    return (
        <div>
            <div className='h-14 w-screen flex justify-between shadow-lg px-4 py-2'>
                <div className='flex'>
                    <img src={image} alt="logo" className="h-10  w-10" />
                    <div className='h-10 w-64 bg-gray-200 rounded-full flex items-center ml-4'>
                        <FiSearch className='h-4 w-4 ml-2 text-gray-500' />
                        <input type="text" placeholder='Search Flajoo' className='h-10 w-52 bg-gray-200 rounded-full focus:outline-none ml-2' />
                    </div>
                </div>

                <div className='flex items-center'>
                    <div className='flex ml-10 justify-end space-x-6 ' >
                        <div className='flex flex-row hover:text-red-700 cursor-pointer p-2 rounded-2xl  bg-gray-200 text-gray-400 text-2xl font-bold  mb-2 mt-2 '>
                            <button type="">
                                <TbSmartHome size="28" />
                            </button>
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

                        <div className="w-10 h-10 hover:bg-gray-500 inset-x-  bg-gray-300 rounded-full cursor-pointer flex items-center justify-center">
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

                </div>
            </div>
        </div>
    );
}

export default NatBar;
