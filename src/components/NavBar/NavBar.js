import React, { useContext } from 'react';
import { UidContext } from '../../Context/AppContext';
import Logout from '../../screens/Logout/Logout';
import { NavLink, Navigate } from 'react-router-dom';


const NavBar = () => {
    const uid = useContext(UidContext);
    return (
        <div
            className='flex justify-between items-center bg-gray-900 '
        >
            <a href="/" className=' text-white text-2xl font-bold mb-2'>Home</a>


            {
                uid ? (
                    <ul className='flex justify-between items-center mx-4'>
                        <li>
                            <div className="flex justify-between items-center"
                            >
                                <div>
                                    <h1 className="text-white text-sm font-bold mt-4 mb-2  py-2 px-4 rounded">Bonjour</h1>
                                </div>
                                <div
                                    className="w-10 h-10 bg-gray-300 rounded-full cursor-pointer">
                                    <NavLink to="/profile">
                                        <img className="w-10 h-10 rounded-full" src="https://www.freepnglogos.com/uploads/instagram-logo-png-transparent-0.png" alt="" />
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
                    <ul className='flex justify-between items-center mx-4'>

                        <li><a href="/sign-in">
                            <button className=' bg-gray-800  text-white text-sm font-bold mt-4 mb-2  py-2 px-4 rounded'>Sign In</button>
                        </a></li>
                        <li><a href="/sign-up">  <button className=' bg-gray-800  text-white text-sm font-bold mt-4 mb-2  py-2 px-4 rounded'>Sign Up</button></a></li>
                    </ul>
                )
            }


        </div>
    );
}

export default NavBar;
