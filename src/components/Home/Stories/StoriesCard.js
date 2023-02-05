import React from 'react';

const StoriesCard = ({ name, src, profile }) => {
    return (
        <div className="flex relative items-center justify-center md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse">
            <img src={src}
                className="flex absolute items-center opacity-0 lg:opacity-100 rounded-full z-50 "
                objectFit="cover"
                layout="fill"
                alt="user-pic"
                width={80}
                height={80}
            />
        </div>
    );
}

export default StoriesCard;
