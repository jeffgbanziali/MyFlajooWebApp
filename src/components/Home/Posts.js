import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { dateParser, isEmpty } from '../Utils/Utils';
import { FaFeather } from 'react-icons/fa';

const Posts = ({ post }) => {
    const [loading, setLoading] = useState(true);
    const usersData = useSelector((state) => state.usersReducer);
    const userData = useSelector((state) => state.userReducer);


    useEffect(() => {
        !isEmpty(usersData)[0] && setLoading(false);
    }, [usersData]);


    return (
        <>
            <div className='grid-2 gap-4 border-2 border-color-2 py-4 px-6 mx-auto relative min-h-100 border-gray-600 rounded-lg bg-black mt-10 ' key={post._id}>
                {
                    loading ? (
                        <i className="fas fa-spinner fa-spin absolute t-[50%] left-[50%] size-12"></i>
                    ) : (
                        <div className="flex ">

                            <img src={
                                !isEmpty(usersData[0]) &&
                                usersData
                                    .map((user) => {
                                        if (user._id === post.posterId) return user.picture;
                                        else return null;
                                    })
                                    .join('')
                            }
                                className="w-16 hidden md:block object-cover border shadow-md  border-red-500 rounded-14 ml-18 overflow-hidden h-16 rounded-full mr-4"

                                alt="user-pic"
                            />
                            <div className='flex  md:ml-18'>
                                <div className=" flex justify-between  flex-col min-h-35">
                                    <div className='flex sm:mt-4 md:translate-y-18 mb-4 '  >
                                        <h4 className="text-white font-bold">
                                            bonjour
                                        </h4>
                                    </div>
                                    <span className="flex text-gray-500 translate-y-5 sm:-mt-10 sm:pt-0 sm:pb-10 text-sm mb-10 font-normal">
                                        {dateParser(post.createdAt)}
                                    </span>
                                </div>
                            </div>
                            {/*<div className="bg-gray-800 rounded-full p-2">
                                <FaFeather name="more-horizontal" size={25} color="white" />
                            </div>*/}
                        </div>
                    )
                }

            </div>
        </>
    );
}

export default Posts;
