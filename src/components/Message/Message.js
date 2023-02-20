import React from 'react';
import { FaFacebookMessenger } from 'react-icons/fa';

const Message = ({ type }) => {
    return (
        <div>
            {
                type === "friends" && <button className=" bg-blue-700 hover:bg-blue-200 items-center  space-x-1 flex justify-center  w-28 h-9  rounded-xl" >
                    <FaFacebookMessenger className='text-white  text-[18px] font-semibold text-center' />
                    <p className="text-white  text-[16px] font-semibold text-center" >
                        Chating
                    </p>
                </button>

            }
            {
                type === "profile" && <button className=" bg-blue-400 hover:bg-blue-200 items-center  space-x-1 flex justify-center  w-40 h-8  rounded-xl" >
                    <FaFacebookMessenger className='text-white  text-[18px] font-semibold text-center' />
                    <p className="text-white  text-[14px] font-semibold text-center" >
                        Chating
                    </p>
                </button>

            }
        </div>
    );
}

export default Message;
