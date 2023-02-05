import React from 'react';

const Stories = () => {
    return (
        <div className=" flex bg-cover  border-2 border-color-2 py-4 px-20 mx-auto relative min-h-100 border-gray-600 rounded-lg self-center items-center justify-center mt-20 bg-[#212020]">
            <div className="flex flex-row items-center justify-between my-auto  ">
                <img className="w-16 h-28 sm:w-32 sm:h-56 rounded-xl object-cover " src="https://picsum.photos/200/300" alt="" />
                <img className="w-16 h-28 sm:w-32 sm:h-56 rounded-xl object-cover" src="https://picsum.photos/200/300" alt="" />
                <img className="w-16 h-28 sm:w-32 sm:h-56 rounded-xl object-cover" src="https://picsum.photos/200/300" alt="" />
                <img className="w-16 h-28 sm:w-32 sm:h-56 rounded-xl object-cover " src="https://picsum.photos/200/300" alt="" />
                <img className="w-16 h-28 sm:w-32 sm:h-56 rounded-xl object-cover" src="https://picsum.photos/200/300" alt="" />
            </div>
        </div>
    );
}

export default Stories;
