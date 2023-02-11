import React from 'react';
import AddingPostsProfile from '../../ProfileUtils/AddingPostsProfile';


const story = [
    {
        name: "Rafael Nadal",
        src: "https://i.pinimg.com/736x/69/d7/00/69d700ffdcef2c6594be7d81646d2e9c.jpg",
        profile: "https://asset.vg247.com/super-saiyan-blue-goku.png/BROK/thumbnail/1200x1200/quality/100/super-saiyan-blue-goku.png"

    },
    {
        name: "Rafael Nadal",
        src: "https://i.pinimg.com/736x/69/d7/00/69d700ffdcef2c6594be7d81646d2e9c.jpg",
        profile: "https://asset.vg247.com/super-saiyan-blue-goku.png/BROK/thumbnail/1200x1200/quality/100/super-saiyan-blue-goku.png"

    }, {
        name: "Rafael Nadal",
        src: "https://i.pinimg.com/736x/69/d7/00/69d700ffdcef2c6594be7d81646d2e9c.jpg",
        profile: "https://asset.vg247.com/super-saiyan-blue-goku.png/BROK/thumbnail/1200x1200/quality/100/super-saiyan-blue-goku.png"

    }, {
        name: "Rafael Nadal",
        src: "https://i.pinimg.com/736x/69/d7/00/69d700ffdcef2c6594be7d81646d2e9c.jpg",
        profile: "https://asset.vg247.com/super-saiyan-blue-goku.png/BROK/thumbnail/1200x1200/quality/100/super-saiyan-blue-goku.png"

    },
    {
        name: "Rafael Nadal",
        src: "https://i.pinimg.com/736x/69/d7/00/69d700ffdcef2c6594be7d81646d2e9c.jpg",
        profile: "https://wave.fr/images/1916/05/dragon-ball-figtherz-goku-ultra-instinct.jpg"

    },
    {
        name: "Rafael Nadal",
        src: "https://i.pinimg.com/736x/69/d7/00/69d700ffdcef2c6594be7d81646d2e9c.jpg",
        profile: "https://wave.fr/images/1916/05/dragon-ball-figtherz-goku-ultra-instinct.jpg"

    },

]


const Stories = () => {
    return (
        <>
            <div className="w-screen flex flex-row sh p-2 bg-black rounded-2xl shadow-lg shadow-gray-800 sm:w-full  ">
                <div className="w-screen h-32 sm:w-full sm:h-48 bg-gray-800  items-center justify-start p-2 flex space-x-0.5 sm:space-x-2 rounded-[1rem] ">
                    <div className="flex flex-col items-center justify-center ">
                        <AddingPostsProfile />
                    </div>
                    {story.map((story) => (
                        <>
                            <div className="flex h-28 w-[8rem] sm:w-24 sm:h-40  rounded-[2rem]">
                                <img
                                    key={story.src}
                                    //className="h-14 w-14 rounded-full p-[1.5px] border-red-500 "
                                    className="flex  object-cover rounded-[1rem] border-2 cursor-pointer opacity-50 transition duration-200 transform hover:scale-110 hover:animate-pulse"
                                    src={story.src}
                                    alt={story.name}
                                />
                                <div className="absolute bg-green-500 sm:w-[12px] sm:h-[12px] w-[8px] h-[8px] rounded-full ml-6 mt-16 sm:ml-8 sm:mt-20 border sm:border-2 z-10 border-gray-200 " />
                                <div>

                                </div>
                                <img
                                    key={story.profile}
                                    src={story.profile}
                                    className=" h-8 w-8 sm:h-12 sm:w-12 absolute mt-12 rounded-full  border-4 border-red-800 cursor-pointer transition duration-200 transform hover:scale-110 hover:animate-pulse"
                                    alt='profile'
                                />
                                <div className="absolute items-center justify-center sm:mt-32 mt-24 ">
                                    <p className="text-white text-[6px] sm:text-[10px] xl:text-sm font-semibold">{story.name}</p>
                                </div>
                            </div>
                        </>
                    ))}
                </div>


            </div>
        </>
    );
}

export default Stories;
