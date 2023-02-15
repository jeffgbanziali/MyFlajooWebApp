import React, { useState } from 'react';
import { HiMail } from 'react-icons/hi';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import image from "../../../src/assets/Logos/2.png";
import SignInPopup from '../../components/LoginPopup/SignInPopup';
import SignUpPopup from '../../components/LoginPopup/SignUpPopup';


function StartPage() {

    const [signInPopup, setSignInPopup] = useState(false);
    const [signUpPopup, setSignUpPopup] = useState(false);

    return (

        <>
            <div className=' min-h-screen bg-gray-900 flex flex-col justify-center items-center' >
                <div className=' flex flex-col items-center mt-10 justify-center p-20 bg-black ml-10 rounded-lg shadow-lg text-black    '>
                    <h2 className=' text-white text-2xl font-semibold '>Let's Start </h2>
                    <h2 className='text-white text-2xl font-semibold' >Welcome </h2>
                    <img className='w-28 h-28 mt-5 rounded-full' src={image} alt="" />
                    <div className=' mt-10  text-center ' >
                        <div className='flex flex-col text-center'>
                            <button
                                onClick={() => setSignUpPopup(true)}
                                className=' bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 my-4 rounded-lg'>
                                <div className='flex items-center  self-center text-center' >
                                    <HiMail
                                        name="mail"
                                        size={40}
                                        color="#FFFFFF"
                                        className='mr-5'
                                    />
                                    <h2 className='text-2xl font-semibold'
                                    >Continue with a email</h2>
                                </div>
                            </button>
                            <button className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded-lg'>
                                <div className='flex items-center self-center text-center' >

                                    <FaFacebook name="google"
                                        size={40}
                                        color="#FFFFFF"
                                        className='mr-5'
                                    />
                                    <h2 className='text-2xl font-semibold'
                                    >Continue with Facebook</h2>
                                </div>
                            </button>
                            <button className=' bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 my-4  rounded-lg'>
                                <div className='flex items-center self-center text-center'  >
                                    <FaGoogle name="google"
                                        size={40}
                                        color="#FFFFFF"
                                        className='mr-5'
                                    />
                                    <h2
                                        className='text-2xl font-semibold'
                                    >Continue with a Google </h2>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='flex items-center content-center self-center text-white'>
                        <h2 className='text-l font-semibold' >Have an account ? </h2>
                        <div
                            onClick={() => setSignInPopup(true)} >
                            <button className="bg-red-400 hover:bg-red-700 text-white font-bold ml-6 py-2 px-4 my-4 rounded-lg">
                                <div className='flex items-center' >
                                    <h2 className='text-lg font-semibold'>Sign In</h2>
                                </div>
                            </button>
                        </div>
                        {signInPopup &&
                            <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex items-center justify-center">
                                <div className="w-[800px]  bg-black p-6 rounded-lg shadow-lg transform transition-all ease-in-out duration-300 scale-100">
                                    <div className="flex justify-between" >
                                        <h3 className="text-gray-200 text-xl font-medium">Login for a account</h3>
                                        <span className="text-gray-200  text-2xl cursor-pointer" onClick={() => setSignInPopup(false)}>
                                            &#10005;
                                        </span>
                                    </div>
                                    <SignInPopup />
                                </div>
                            </div>
                        }
                        {signUpPopup &&
                            <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex items-center justify-center">
                                <div className="w-[800px]s bg-black p-10 rounded-lg shadow-lg transform transition-all ease-in-out duration-300 scale-100">
                                    <div className="flex  justify-between" >
                                        <h3 className='text-white text-xl'>LET'S SEE WHAT'S NEW</h3>
                                        <span className="text-gray-200  text-2xl cursor-pointer" onClick={() => setSignUpPopup(false)}>
                                            &#10005;
                                        </span>
                                    </div>
                                    <SignUpPopup />
                                </div>
                            </div>
                        }
                    </div>
                </div>

            </div>
        </>
    );
}


export default StartPage;
