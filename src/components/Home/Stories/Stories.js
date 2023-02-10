import React from 'react';


const stories = [
    {
        name: "Rafael Nadal",
        src: "https://i.pinimg.com/736x/69/d7/00/69d700ffdcef2c6594be7d81646d2e9c.jpg",
        profile: "https://links.papareact.com/l4v"

    },
    {
        name: "Rafael Nadal",
        src: "https://i.pinimg.com/736x/69/d7/00/69d700ffdcef2c6594be7d81646d2e9c.jpg",
        profile: "https://links.papareact.com/l4v"

    },
    {
        name: "Rafael Nadal",
        src: "https://i.pinimg.com/736x/69/d7/00/69d700ffdcef2c6594be7d81646d2e9c.jpg",
        profile: "https://links.papareact.com/l4v"

    },
    {
        name: "Rafael Nadal",
        src: "https://i.pinimg.com/736x/69/d7/00/69d700ffdcef2c6594be7d81646d2e9c.jpg",
        profile: "https://links.papareact.com/l4v"

    },
    {
        name: "Rafael Nadal",
        src: "https://i.pinimg.com/736x/69/d7/00/69d700ffdcef2c6594be7d81646d2e9c.jpg",
        profile: "https://links.papareact.com/l4v"

    },
    {
        name: "Rafael Nadal",
        src: "https://i.pinimg.com/736x/69/d7/00/69d700ffdcef2c6594be7d81646d2e9c.jpg",
        profile: "https://links.papareact.com/l4v"

    },
]


const Stories = () => {
    return (
        <>
            <div className="w-screen sm:w-full  ">
                <div className="w-full bg-red-300 h-48 items-center justify-center flex space-x-3 rounded-[1rem] ">

                    {stories.map((story) => (
                        <>
                            <div className=' flex h-32 w-[4.5rem] sm:w-24 sm:h-40  rounded-[1rem]'>
                                <div className="flex">
                                    <img
                                        key={story.src}
                                        //className="h-14 w-14 rounded-full p-[1.5px] border-red-500 "
                                        className="flex object-cover rounded-[1rem] border-2 cursor-pointer transition duration-200 transform hover:scale-110 hover:animate-pulse"
                                        src={story.src}
                                        alt={story.name}
                                    />
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
