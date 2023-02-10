import React from 'react';
import { FaPhone, FaUserFriends } from 'react-icons/fa';
import { MdMore } from 'react-icons/md';
import { useSelector } from 'react-redux';

const UsersUtils = () => {
    const userData = useSelector((state) => state.userReducer);
    return (
        <>
            <div className='  '>
                <div className=' flex relative bg-red-500 h-96 rounded-b justify-center '>
                    <div className="object-cover w-full h-full bg-gray-900" >
                        <div className='flex  mt-20 justify-center space-x-10' >
                            <div className=''>
                                <img src="https://1.bp.blogspot.com/-psj5GG30jC8/YIEkjqmbUGI/AAAAAAAAFJs/hOgwMvu_EtY1MSZjycVYAcY624I4px07QCLcBGAsYHQ/w600/Biodata%2Bdan%2BProfil%2BAnushka%2BSharma.jpg" alt="" className="w-40 h-40 border-4 border-white rounded-full" />
                            </div>
                            <div className='flex flex-col mt-6 '>
                                <div className='flex '>
                                    <div className="text-center text-3xl text-black">
                                        <h2 className="text-[20px]  font-semibold text-gray-400">
                                            {userData.pseudo}
                                        </h2>
                                    </div>
                                    <div className='flex items-center  ml-2 space-x-2'>
                                        <button className='w-24 h-9 bg-gray-700 flex items-center justify-center focus:outline-none rounded'>
                                            <FaPhone className='text-white' />
                                        </button>
                                        <button className='w-24 h-9 bg-gray-700 flex items-center justify-center focus:outline-none rounded'>
                                            <FaUserFriends className='text-white' />

                                        </button>
                                        <button className='w-12 h-9 bg-gray-700 flex items-center justify-center focus:outline-none rounded'>
                                            <MdMore className='text-white' />
                                        </button>
                                        <button className='w-12 h-9 bg-gray-700 flex items-center justify-center focus:outline-none rounded'>
                                            <MdMore className='text-white' />
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    {
                                        userData.following && userData.followers && (
                                            <>
                                                <div className='flex mt-4 space-x-6'>
                                                    <div className='flex flex-col items-center'>
                                                        <div className='text-lg text-gray-400'>Posts</div>
                                                        <div className='text-lg text-gray-400'>1,234</div>
                                                    </div>
                                                    <div className='flex flex-col items-center'>
                                                        <div className='text-lg text-gray-400'>Followers</div>
                                                        <div className='text-lg text-gray-400'>
                                                            {userData.followers.length}
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-col items-center'>
                                                        <div className='text-lg text-gray-400'>Following</div>
                                                        <div className='text-lg text-gray-400'>
                                                            {userData.following.length}
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }
                                </div>
                                <div>
                                    <div className='flex mt-4 space-x-6'>
                                        <span>
                                            {userData.bio}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='border border-gray-700 border-opacity-10' />
                <div className='flex justify-center px-8'>
                    <div className='flex items-center '>
                        <div className='px-4 py-5 font-semibold text-blue-800 border-b-4 border-b-blue-700' >
                            Posts
                        </div>
                        <div className='px-4 py-5 font-semibold text-gray-500 ' >
                            About
                        </div>
                        <div className=' px-4 py-5  font-semibold text-gray-500 ' >
                            Friends <span className='text-sm ml-1'>
                                1,234
                            </span>
                        </div>
                        <div className='px-4 py-5  font-semibold text-gray-500 ' >
                            Photos
                        </div>
                        <div className='px-4 py-5 font-semibold text-gray-500 ' >
                            Videos
                        </div>
                        <div className='px-4 py-5 font-semibold text-gray-500 ' >
                            Check-ins
                        </div>
                    </div>
                </div>
            </div >
        </>

    );
}

export default UsersUtils;
