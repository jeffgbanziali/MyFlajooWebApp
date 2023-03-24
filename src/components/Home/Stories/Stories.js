import React from 'react'
import AddingPostsProfile from '../../ProfileUtils/AddingPostsProfile'

const Stories = () => {
    return (
        <>
            <div className='w-screen flex flex-row sh p-2 bg-black rounded-2xl shadow-lg shadow-gray-800 sm:w-full  '>
                <div className='w-screen h-32 sm:w-full sm:h-48  items-center justify-start p-2 flex space-x-1 sm:space-x-2 rounded-[1rem] '>
                    <div className='flex flex-col items-center justify-center '>
                        <AddingPostsProfile />
                    </div>
                    <div className='flex  h-28 w-[4rem] sm:w-24 sm:h-40  rounded-[1rem]'>
                        <img
                            className='relative object-cover rounded-[1rem]  cursor-pointer border-2 opacity-50 transition duration-200 transform hover:scale-110 hover:animate-pulse'
                            src='https://i.pinimg.com/736x/69/d7/00/69d700ffdcef2c6594be7d81646d2e9c.jpg'
                            alt='profile'
                        />
                        <div className='w-[4rem] sm:w-24 absolute  bg-red-600'
                        >
                            <div className='flex  justify-center'>

                                <div className='absolute bg-green-500 sm:w-[12px] sm:h-[12px] w-[8px] h-[8px] rounded-full ml-6 mt-16 sm:ml-8 sm:mt-20 border sm:border-2 z-10 border-gray-200 ' />
                                <img
                                    src='https://asset.vg247.com/super-saiyan-blue-goku.png/BROK/thumbnail/1200x1200/quality/100/super-saiyan-blue-goku.png'
                                    className=' h-8 w-8 sm:h-12 sm:w-12 absolute mt-12 rounded-full  border-2 border-red-800 cursor-pointer transition duration-200 transform hover:scale-110 hover:animate-pulse'
                                    alt='profile'
                                />
                            </div>
                        </div>
                        <div className=' absolute w-[4rem] sm:w-24 sm:mt-32 mt-20 '>
                            <div className='flex justify-center '
                            >
                                <p className='text-white text-[8px] sm:text-[10px] xl:text-sm font-semibold'>
                                    Jeff Flaj
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}



export default Stories
