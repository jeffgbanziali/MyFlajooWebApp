import React from 'react';


const photos = [
    {
        id: 1,
        picture: "https://www.shop-justforgames.com/Files/85433/Img/15/Packshot-Puzzle-Assassins-creed-Valhalla-Eivor-Male-Just-For-Games-03-zoom.jpg",
        username: "Jeff Flaj",
        pseudo: "Pseudo"
    },
    {
        id: 2,
        picture: "https://www.shop-justforgames.com/Files/85433/Img/15/Packshot-Puzzle-Assassins-creed-Valhalla-Eivor-Male-Just-For-Games-03-zoom.jpg",
        username: "Jeff Flaj",
        pseudo: "Pseudo"
    },
    {
        id: 3,
        picture: "https://www.shop-justforgames.com/Files/85433/Img/15/Packshot-Puzzle-Assassins-creed-Valhalla-Eivor-Male-Just-For-Games-03-zoom.jpg",
        username: "Jeff Flaj",
        pseudo: "Pseudo"
    },
    {
        id: 3,
        picture: "https://www.shop-justforgames.com/Files/85433/Img/15/Packshot-Puzzle-Assassins-creed-Valhalla-Eivor-Male-Just-For-Games-03-zoom.jpg",
        username: "Jeff Flaj",
        pseudo: "Pseudo"
    },
    {
        id: 3,
        picture: "https://www.shop-justforgames.com/Files/85433/Img/15/Packshot-Puzzle-Assassins-creed-Valhalla-Eivor-Male-Just-For-Games-03-zoom.jpg",
        username: "Jeff Flaj",
        pseudo: "Pseudo"
    },
    {
        id: 3,
        picture: "https://www.shop-justforgames.com/Files/85433/Img/15/Packshot-Puzzle-Assassins-creed-Valhalla-Eivor-Male-Just-For-Games-03-zoom.jpg",
        username: "Jeff Flaj",
        pseudo: "Pseudo"
    },
    {
        id: 3,
        picture: "https://www.shop-justforgames.com/Files/85433/Img/15/Packshot-Puzzle-Assassins-creed-Valhalla-Eivor-Male-Just-For-Games-03-zoom.jpg",
        username: "Jeff Flaj",
        pseudo: "Pseudo"
    },
    {
        id: 3,
        picture: "https://www.shop-justforgames.com/Files/85433/Img/15/Packshot-Puzzle-Assassins-creed-Valhalla-Eivor-Male-Just-For-Games-03-zoom.jpg",
        username: "Jeff Flaj",
        pseudo: "Pseudo"
    },
    {
        id: 3,
        picture: "https://www.shop-justforgames.com/Files/85433/Img/15/Packshot-Puzzle-Assassins-creed-Valhalla-Eivor-Male-Just-For-Games-03-zoom.jpg",
        username: "Jeff Flaj",
        pseudo: "Pseudo"
    },

]

const PhotoUser = () => {
    return (
        <div className="shadow bg-gray-900  p-2 shadow-slate-600 rounded-xl w-full">
            <div className="flex p-3 ml-6 mt-4 rounded-b-xl">
                <h1 className="text-3xl font-italic text-gray-400">Friends</h1>
            </div>
            <div className="  grid grid-cols-3 p-2 gap-2">
                {
                    photos.map((photo) => (
                        <div className="flex flex-col rounded-3xl bg-green-800 justify-center items-center ">
                            <div className="flex w-full -space-x-2 rounded-xl h-full ">
                                <img src={photo.picture} alt="" className=" w-full h-full  " />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default PhotoUser;
