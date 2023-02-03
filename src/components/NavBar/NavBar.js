import React, { useContext } from 'react';
import { UidContext } from '../../Context/AppContext';
import Logout from '../../screens/Logout/Logout';
import { NavLink } from 'react-router-dom';
import image from "../../../src/assets/Logos/1.png";
import { BsMessenger } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";


const NavBar = () => {
    const uid = useContext(UidContext);
    return (
        <div
            className='flex justify-between items-center bg-gray-900 '
        >
            <a href="/" className=' text-white text-2xl font-bold mb-2 mt-2 ml-5'>
                <img className="w-12 h-12 rounded-full" src={image} alt="" />
            </a>


            {
                uid ? (
                    <ul className='flex  mx-10'>
                        <li>
                            <div className="flex mx-2 "
                            >

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
                            </div>
                        </li>
                        <div
                            className='flex justify-between items-center mx-4'
                        >
                            <Logout />
                        </div>
                    </ul>
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
