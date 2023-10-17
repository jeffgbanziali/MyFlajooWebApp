import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserFriends } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { TbSmartHome } from 'react-icons/tb';
import { RiGroup2Line } from 'react-icons/ri';
import { MdMovieFilter, MdOutlineOndemandVideo } from 'react-icons/md';
import { HiNewspaper } from 'react-icons/hi';

const LeftBarPro = () => {
    const userData = useSelector(state => state.userReducer);


    return (
        <>
            <div className="hidden sm:flex flex-col  overflow-y-auto bg-white xl:w-[20%] p-2 fixed h-[100%] ">
                <div className="flex mt-6 flex-col p-2 ">
                    <div className='flex  h-12 w-[100%] items-center rounded-2xl  hover:bg-gray-400 p-2 '>
                        <NavLink to={`/profile/${userData._id}`}>
                            <div className='flex justify-center xl:justify-start text-xl items-center space-x-2.5 hoverAnimation'>
                                <img className='w-8 h-8 rounded-full' src={
                                    userData.picture
                                }
                                    alt='profile' />
                                <span className='hidden text-black xl:inline'>
                                    {userData.pseudo}
                                </span>
                            </div>

                        </NavLink>
                    </div>
                    <div className=' flex space-y-4 flex-col mt-4'>
                        <NavLink to={`/`}>
                            <div className='flex justify-center h-12 w-[100%] xl:rounded-xl sm:rounded-full sm:w-16 xl:w-[100%] hover:bg-gray-400 p-2 xl:justify-start text-xl items-center space-x-2.5 hoverAnimation'>
                                <TbSmartHome className='text-4xl text-blue-300' />
                                <h4 className=' text-[16px] text-black hidden xl:inline'>
                                    Home
                                </h4>
                            </div>
                        </NavLink>
                        <NavLink to='/profile'>
                            <div className='flex justify-center h-12 w-[100%] xl:rounded-xl sm:rounded-full sm:w-16 xl:w-[100%] hover:bg-gray-400 p-2  xl:justify-start text-xl items-center space-x-2.5 hoverAnimation'>
                                <FaUserFriends className='text-4xl text-red-600' />
                                <h4 className=' text-[16px] text-black hidden xl:inline'>
                                    Friends
                                </h4>
                            </div>
                        </NavLink>
                        <NavLink to='/profile'>
                            <div className='flex justify-center h-12 w-[100%] xl:rounded-xl sm:rounded-full sm:w-16 xl:w-[100%] hover:bg-gray-400 p-2  xl:justify-start text-xl items-center space-x-2.5 hoverAnimation'>
                                <RiGroup2Line className='text-4xl text-yellow-300' />
                                <span className='text-[16px] text-black hidden xl:inline'>
                                    Teams
                                </span>
                            </div>
                        </NavLink>
                        <NavLink to='/videoReels'>
                            <div className='flex justify-center h-12 w-[100%] xl:rounded-xl sm:rounded-full sm:w-16 xl:w-[100%] hover:bg-gray-400 p-2 xl:justify-start text-xl items-center space-x-2.5 hoverAnimation'>
                                <MdOutlineOndemandVideo className='text-4xl text-pink-500' />
                                <span className='text-[16px] hidden text-black xl:inline'>
                                    Watch
                                </span>
                            </div>
                        </NavLink>
                        <NavLink to='/profile'>
                            <div className='flex justify-center h-12 w-[100%] xl:rounded-xl sm:rounded-full sm:w-16 xl:w-[100%]  hover:bg-gray-400 p-2 xl:justify-start text-xl items-center space-x-2.5 hoverAnimation'>
                                <MdMovieFilter className='text-4xl text-green-300' />
                                <span className='text-[16px] hidden text-black xl:inline'>
                                    Live
                                </span>
                            </div>
                        </NavLink>
                        <NavLink to='/profile'>
                            <div className='flex justify-center h-12 w-[100%]  xl:rounded-xl sm:rounded-full sm:w-16 xl:w-[100%]  hover:bg-gray-400 p-2  xl:justify-start text-xl items-center space-x-2.5 hoverAnimation'>
                                <HiNewspaper className='text-4xl text-gray-300' />
                                <span className='text-[16px] text-black hidden xl:inline'>
                                    News
                                </span>
                            </div>
                        </NavLink>
                        <NavLink to='/profile'>
                            <div className='flex justify-center h-12 w-[100%]  xl:rounded-xl sm:rounded-full sm:w-16 xl:w-[100%]  hover:bg-gray-400 p-2  xl:justify-start text-xl items-center space-x-2.5 hoverAnimation'>
                                <HiNewspaper className='text-4xl text-gray-300' />
                                <span className='text-[16px] text-black hidden xl:inline'>
                                    News
                                </span>
                            </div>
                        </NavLink>
                        <NavLink to='/profile'>
                            <div className='flex justify-center h-12 w-[100%]  xl:rounded-xl sm:rounded-full sm:w-16 xl:w-[100%]  hover:bg-gray-400 p-2  xl:justify-start text-xl items-center space-x-2.5 hoverAnimation'>
                                <HiNewspaper className='text-4xl text-gray-300' />
                                <span className='text-[16px] text-black hidden xl:inline'>
                                    News
                                </span>
                            </div>
                        </NavLink>
                        <NavLink to='/profile'>
                            <div className='flex justify-center h-12 w-[100%]  xl:rounded-xl sm:rounded-full sm:w-16 xl:w-[100%]  hover:bg-gray-400 p-2  xl:justify-start text-xl items-center space-x-2.5 hoverAnimation'>
                                <HiNewspaper className='text-4xl text-gray-300' />
                                <span className='text-[16px]text-black hidden xl:inline'>
                                    News
                                </span>
                            </div>
                        </NavLink>
                    </div>

                </div>
                { /*<div className='flex items-center justify-center'>
                <button className='bg-blue-400 xl:inline h-10 w-56 text-sm mt-10 flex items-center hover:bg-blue-500 text-white font-bold rounded-full'>
                    Create a New tweet
                </button>
    </div>*/}
            </div>

        </>
    );
}

export default LeftBarPro;
