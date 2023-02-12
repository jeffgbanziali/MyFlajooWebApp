import React from 'react';
import { FaFacebookMessenger } from 'react-icons/fa';

const Message = () => {
    return (
        <div>
            <button className=" bg-blue-700 hover:bg-blue-200 items-center  space-x-1 flex justify-center  w-28 h-9  rounded-xl" >
                <FaFacebookMessenger className='text-white  text-[18px] font-semibold text-center' />
                <p className="text-white  text-[16px] font-semibold text-center" >
                    Chating
                </p>
            </button>
        </div>
    );
}

export default Message;
