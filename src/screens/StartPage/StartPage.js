import React from 'react';
import { HiMail } from 'react-icons/hi';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import image from "../../../src/assets/Logos/2.png";





function StartPage(props) {
    return (

        <>

            <div
                className=' bg-black min-h-screen  flex flex-col items-center content-center self-center ' >
                <div className=' flex flex-col items-center mt-10 justify-center p-20 bg-gray-900 ml-10 rounded-lg shadow-lg text-black    '>
                    <h2 className=' text-white text-2xl font-semibold '>Let's Start </h2>
                    <h2 className='text-white text-2xl font-semibold' >Welcome </h2>
                    <img className='w-28 h-28 mt-5 rounded-full' src={image} alt="" />
                    <div className=' mt-10  text-center ' >
                        <div className='flex flex-col text-center'>
                            <button className=' bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 my-4 rounded'>
                                <div className='flex content-center  self-center text-center' >
                                    <HiMail
                                        name="mail"
                                        size={40}
                                        color="#FFFFFF"
                                        className='mr-5'
                                    />
                                    <h2 className='text-2xl font-bold'
                                    >Continue with a email</h2>
                                </div>
                            </button>
                            <button className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4  rounded'>
                                <div className='flex content-center self-center text-center' >

                                    <FaFacebook name="google"
                                        size={40}
                                        color="#FFFFFF"
                                        className='mr-5'
                                    />
                                    <h2 className='text-2xl font-bold'
                                    >Continue with a email</h2>
                                </div>
                            </button>
                            <button className=' bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 my-4  rounded'>
                                <div className='flex content-center self-center text-center'  >
                                    <FaGoogle name="google"
                                        size={40}
                                        color="#FFFFFF"
                                        className='mr-5'
                                    />
                                    <h2
                                        className='text-2xl font-bold'
                                    >Continue with a email</h2>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='flex items-center content-center self-center text-white'>
                        <h2 >Have an account ? </h2>
                        <div>
                            <button  className="bg-red-400 hover:bg-red-700 text-white font-bold ml-10 py-2 px-4 my-4 rounded">
                                <h2 className='text-l font-semibold'>Sign In</h2>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>


    );
}


export default StartPage;
