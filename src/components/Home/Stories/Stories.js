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
            <div className="flex w-full  bg-gray-800  rounded-3xl p-2 items-center justify-center flex-row   ">
                {
                    stories.map((story) => (

                        <>
                            <div className="flex flex-col items-center  hover:scale-110 transition duration-200 transform ease-in-out justify-center " >
                                <div className="flex flex-col items-center justify-center p-2">
                                    <div className="flex flex-col items-center justify-center ">
                                        <img className="relative h-20 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x  rounded-full md:rounded-3xl lg:rounded-3xl border-2 border-red-600 "
                                            src={story.src}
                                            layout="fill"
                                            objectFit="cover"
                                            alt='story'
                                        />
                                    </div>
                                    <div className="flex flex-col items-center justify-center " >
                                        <div className=" absolute flex -mt-32 flex-col items-center justify-center">
                                            <img
                                                src={story.profile}
                                                className="z-10 h-10 w-10 md:h-10 md:w-10 lg:h-16 lg:w-16 cursor-pointer rounded-full md:rounded-full lg:rounded-full border-2 border-red-600 "
                                                alt='story'
                                            />
                                            <div className="absolute z-10 mt-6 ml-12 h-2 w-2 md:h-6 md:w-3 lg:h-3 lg:w-3 bg-green-400 rounded-full border-2 border-white"></div>
                                            <div className="flex mt flex-col items-center justify-center" >
                                                <p className="whitespace-nowrap text-sm font-bold">{story.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </>
                    ))

                }


            </div>
        </>
    );
}

export default Stories;
