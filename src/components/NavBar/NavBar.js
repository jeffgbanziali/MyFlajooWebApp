import React, { useContext } from 'react';
import { UidContext } from '../../Context/AppContext';
import Logout from '../../screens/Logout/Logout';


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
                            <a href="/profil">
                                <button className=' bg-gray-800  text-white text-sm font-bold mt-4 mb-2  py-2 px-4 rounded'>Profil</button>
                            </a>
                        </li>
                        <li>
                            <a href="/publish">
                                <button className=' bg-gray-800  text-white text-sm font-bold mt-4 mb-2  py-2 px-4 rounded'>Publier</button>
                            </a>
                        </li>

                        <Logout />

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
