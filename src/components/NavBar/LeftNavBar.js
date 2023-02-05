import React from 'react';

const LeftNavBar = () => {
    return (
        <nav className=" w-72  bg-white border-r-2">
            <div className="p-10">
                <h3 className="text-lg font-medium">Left Navigation</h3>
                <ul className="mt-10">
                    <li className="mb-6">
                        <a href="#" className="text-gray-800 hover:text-indigo-500">Home</a>
                    </li>
                    <li className="mb-6">
                        <a href="#" className="text-gray-800 hover:text-indigo-500">About</a>
                    </li>
                    <li class="mb-6">
                        <a href="#" className="text-gray-800 hover:text-indigo-500">Services</a>
                    </li>
                    <li class="mb-6">
                        <a href="#" className="text-gray-800 hover:text-indigo-500">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>

    );
};





export default LeftNavBar;
