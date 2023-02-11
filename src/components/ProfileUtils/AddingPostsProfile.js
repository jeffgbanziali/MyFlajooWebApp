import React from 'react';


const AddingPostsProfile = () => {


    return (

        <>
            <div className="flex h-28 w-[4rem] sm:w-24 sm:h-40  rounded-[2rem] ">
                <img
                    src="https://wave.fr/images/1916/05/dragon-ball-figtherz-goku-ultra-instinct.jpg"
                    className="flex  object-cover rounded-[1rem] border-2 cursor-pointer transition duration-200 transform hover:scale-110 hover:animate-pulse"
                    alt="profile"
                />
                <div className="absolute bg-green-500 sm:w-[12px] sm:h-[12px] w-[8px] h-[8px] rounded-full ml-6 mt-16 sm:ml-8 sm:mt-20 border sm:border-2 z-10 border-gray-200 " />
                <img
                    src="https://wave.fr/images/1916/05/dragon-ball-figtherz-goku-ultra-instinct.jpg"
                    className=" h-8 w-8 sm:h-12 sm:w-12 absolute mt-12 rounded-full  border-4 border-red-800 cursor-pointer transition duration-200 transform hover:scale-110 hover:animate-pulse"
                    alt='profile'
                />
                <div className="absolute sm:mt-32 mt-24 ">
                    <p className="text-white text-[6px] sm:text-[10px] xl:text-sm font-semibold">
                        Your Story
                    </p>
                </div>
            </div>
        </>
    )
}

export default AddingPostsProfile;
