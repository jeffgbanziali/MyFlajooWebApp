import React from 'react';
import { FaSuitcase } from 'react-icons/fa';

const UserInfo = () => {
    return (
        <div className="shadow shadow-slate-600 rounded w-full  p-4">
            <div className="text-xl font-bold text-gray-400">
                User Info
            </div>
            <div className="mt-4 items-center flex ">
                <FaSuitcase className="text-gray-400" />
                <span className="ml-2 text-gray-400 font-semibold">
                    Job Title
                </span>
            </div>
            <div className="mt-4 items-center flex ">
                <FaSuitcase className="text-gray-400" />
                <span className="ml-2 text-gray-400 font-semibold">
                    Job Title
                </span>
            </div>
            <div className="mt-4 items-center flex ">
                <FaSuitcase className="text-gray-400" />
                <span className="ml-2 text-gray-400 font-semibold">
                    Job Title
                </span>
            </div>
            <div className="mt-4 items-center flex ">
                <FaSuitcase className="text-gray-400" />
                <span className="ml-2 text-gray-400 font-semibold">
                    Job Title
                </span>
            </div>
            <div className="mt-4 items-center flex ">
                <FaSuitcase className="text-gray-400" />
                <span className="ml-2 text-gray-400 font-semibold">
                    Job Title
                </span>
            </div>
        </div>
    );
}

export default UserInfo;
