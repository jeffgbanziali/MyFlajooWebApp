import React from 'react';

const LeftNavBar = () => {
    return (
        <div className="relative w-72 h-screen bg-white border-r-2 border-gray-300 ">
            <div className="fixed z-10 left-0 top-0 w-16 h-screen self-center">
                <div className="absolute w-16 h-screen  ">
                </div>
            </div>
        </div>
    );
};

export default LeftNavBar;
