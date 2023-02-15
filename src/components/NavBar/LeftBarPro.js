import React from 'react';
import { NavLink } from 'react-router-dom';
import {  FaUserFriends } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { TbSmartHome } from 'react-icons/tb';
import { RiGroup2Line } from 'react-icons/ri';
import { SiMarketo } from 'react-icons/si';
import { MdMovieFilter, MdOutlineOndemandVideo } from 'react-icons/md';
import { GoClock } from 'react-icons/go';
import { HiNewspaper } from 'react-icons/hi';

const LeftBarPro = () => {
    const userData = useSelector(state => state.userReducer);

    return (
        <div className="hidden sm:flex flex-col ml-2 overflow-y-auto bg-green-800 border-r-2 xl:w-[360px] p-2 fixed h-full ">
            <div className="flex flex-col p-2 mt-20">
                <div className='flex  h-16 w-[100%] items-center rounded-2xl  hover:bg-white p-2 '>
                    <NavLink to='/profile'>
                        <div className='flex justify-center xl:justify-start text-xl items-center space-x-2.5 hoverAnimation'>
                            <img className='w-12 h-12 rounded-full' src='https://play-lh.googleusercontent.com/H-BL_nBtFpQY92qaBHGZ4cHAcceuBfLiXWAHGOUDPS-9Gp4TPnhEjQSCZWvpfEFOv_A' alt='profile' />
                            <span className='hidden xl:inline'>
                                {userData.pseudo}
                            </span>
                        </div>
                    </NavLink>
                </div>
                <div className=' flex flex-col mt-4'>
                    <NavLink to='/profile'>
                        <div className='flex justify-center h-16 w-[100%] xl:rounded-2xl sm:rounded-full sm:w-16 xl:w-[100%] hover:bg-white p-2 xl:justify-start text-xl items-center space-x-2.5 hoverAnimation'>
                            <TbSmartHome className='text-3xl' />
                            <span className='hidden xl:inline'>
                                Home
                            </span>
                        </div>
                    </NavLink>
                    <NavLink to='/profile'>
                        <div className='flex justify-center h-16 w-[100%] xl:rounded-2xl sm:rounded-full sm:w-16 xl:w-[100%] hover:bg-white p-2  xl:justify-start text-xl items-center space-x-2.5 hoverAnimation'>
                            <FaUserFriends className='text-3xl' />
                            <span className='hidden xl:inline'>
                                Friends
                            </span>
                        </div>
                    </NavLink>
                    <NavLink to='/profile'>
                        <div className='flex justify-center h-16 w-[100%] xl:rounded-2xl sm:rounded-full sm:w-16 xl:w-[100%] hover:bg-white p-2  xl:justify-start text-xl items-center space-x-2.5 hoverAnimation'>
                            <RiGroup2Line className='text-3xl' />
                            <span className='hidden xl:inline'>
                                Teams
                            </span>
                        </div>
                    </NavLink>
                    <NavLink to='/profile'>
                        <div className='flex justify-center h-16 w-[100%] xl:rounded-2xl sm:rounded-full sm:w-16 xl:w-[100%]  hover:bg-white p-2  xl:justify-start text-xl items-center space-x-2.5 hoverAnimation'>
                            <SiMarketo className='text-3xl' />
                            <span className='hidden xl:inline'>
                                Market
                            </span>
                        </div>
                    </NavLink>
                    <NavLink to='/profile'>
                        <div className='flex justify-center h-16 w-[100%] xl:rounded-2xl sm:rounded-full sm:w-16 xl:w-[100%] hover:bg-white p-2 xl:justify-start text-xl items-center space-x-2.5 hoverAnimation'>
                            <MdOutlineOndemandVideo className='text-3xl' />
                            <span className='hidden xl:inline'>
                                Watch
                            </span>
                        </div>
                    </NavLink>
                    <NavLink to='/profile'>
                        <div className='flex justify-center h-16 w-[100%] xl:rounded-2xl sm:rounded-full sm:w-16 xl:w-[100%] hover:bg-white p-2 xl:justify-start text-xl items-center space-x-2.5 hoverAnimation'>
                            <GoClock className='text-3xl' />
                            <span className='hidden xl:inline'>
                                Home
                            </span>
                        </div>
                    </NavLink>
                    <NavLink to='/profile'>
                        <div className='flex justify-center h-16 w-[100%] xl:rounded-2xl sm:rounded-full sm:w-16 xl:w-[100%]  hover:bg-white p-2 xl:justify-start text-xl items-center space-x-2.5 hoverAnimation'>
                            <MdMovieFilter className='text-3xl' />
                            <span className='hidden xl:inline'>
                                Live
                            </span>
                        </div>
                    </NavLink>
                    <NavLink to='/profile'>
                        <div className='flex justify-center h-16 w-[100%]  xl:rounded-2xl sm:rounded-full sm:w-16 xl:w-[100%]  hover:bg-white p-2  xl:justify-start text-xl items-center space-x-2.5 hoverAnimation'>
                            <HiNewspaper className='text-2xl' />
                            <span className='hidden xl:inline'>
                                News
                            </span>
                        </div>
                    </NavLink>
                </div>

            </div>
            <div className='flex items-center justify-center'>
                <button className='bg-blue-400 xl:inline h-10 w-56 text-sm mt-10 flex items-center hover:bg-blue-500 text-white font-bold rounded-full'>
                    Create a New tweet
                </button>
            </div>

        </div>
    );
}

export default LeftBarPro;
