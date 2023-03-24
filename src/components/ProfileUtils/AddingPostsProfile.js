import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddingPostsProfile = () => {
    return (
        <>
            <div className='flex h-28 w-[4rem] sm:w-24 sm:h-40  rounded-[1rem] '>
                <img
                    src='https://wave.fr/images/1916/05/dragon-ball-figtherz-goku-ultra-instinct.jpg'
                    className='flex  object-cover rounded-[1rem] border-2 cursor-pointer opacity-50 transition duration-200 transform hover:scale-110 hover:animate-pulse'
                    alt='profile'
                />
                <div className='w-[4rem] sm:w-24 absolute  '
                >
                    <div className='flex justify-center '>

                        <div className='absolute bg-yellow-500 sm:w-[16px] sm:h-[16px] w-[14px] h-[12px] rounded-full ml-6 mt-16 sm:ml-8 sm:mt-20 border sm:border-2 z-10 border-gray-200 '>
                            <div className='flex justify-center items-center w-full h-full  content-center self-center' >
                                <FaPlus size={6} />
                            </div>
                        </div>
                        <img
                            src='https://asset.vg247.com/super-saiyan-blue-goku.png/BROK/thumbnail/1200x1200/quality/100/super-saiyan-blue-goku.png'
                            className=' h-8 w-8 sm:h-12 sm:w-12 absolute mt-12 rounded-full  border border-red-800 cursor-pointer transition duration-200 transform hover:scale-110 hover:animate-pulse'
                            alt='profile'
                        />
                    </div>
                </div>
                <div className=' absolute w-[4rem] sm:w-24  sm:mt-32 mt-20 '>
                    <div className='flex justify-center '
                    >
                        <p className='text-white text-[8px] sm:text-[10px] xl:text-sm font-semibold'>
                            Jeff Flaj
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AddingPostsProfile
