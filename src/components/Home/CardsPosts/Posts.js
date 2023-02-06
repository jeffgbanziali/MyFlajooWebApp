import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { dateParser, isEmpty } from '../../Utils/Utils';
import { FiMoreHorizontal } from 'react-icons/fi';
import { FaFacebookMessenger, FaHeart, FaRegComment } from 'react-icons/fa';
import LikeButton from './LikeButton';


const Posts = ({ post }) => {
    const [loading, setLoading] = useState(true);
    const usersData = useSelector((state) => state.usersReducer);
    const userData = useSelector((state) => state.userReducer);


    useEffect(() => {
        !isEmpty(usersData)[0] && setLoading(false);
    }, [usersData]);


    return (
        <>
            <div className='w-[90%] h-[80%] border-2 border-color-2 py-4 px-6 relative min-h-100  border-gray-600 rounded-3xl bg-gray-800' key={post._id}>
                {
                    loading ? (
                        <i className="fas fa-spinner fa-spin absolute t-[50%] left-[50%] size-12"></i>
                    ) : (
                        <>
                            <div id='post-header '>
                                <div className="flex justify-between">
                                    <div className="flex flex-row">

                                        <img src={
                                            !isEmpty(usersData[0]) &&
                                            usersData
                                                .map((user) => {
                                                    if (user._id === post.posterId) return user.picture;
                                                    else return null;
                                                })
                                                .join('')
                                        }
                                            className="w-16 hover:opacity-75 cursor-pointer hidden md:block object-cover border shadow-md  border-red-500 rounded-14 ml-18 overflow-hidden h-16 rounded-full mr-4"

                                            alt="user-pic"
                                        />
                                        <div className='flex  md:ml-18'>
                                            <div className=" flex  flex-col min-h-35">
                                                <div className='flex sm:mt-4 md:translate-y-18 mb-4 '  >
                                                    <h4 className="text-white font-semibold">
                                                        {
                                                            !isEmpty(usersData[0]) &&
                                                            usersData
                                                                .map((user) => {
                                                                    if (user._id === post.posterId) return user.pseudo;
                                                                    else return null;
                                                                })
                                                        }
                                                    </h4>
                                                </div>
                                                <span className="flex text-gray-500 translate-y-5 sm:-mt-10 sm:pt-0 sm:pb-10 text-sm mb-10 font-normal">
                                                    {dateParser(post.createdAt)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="bg-gray-800 w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-slate-400 rounded-full ">
                                        <FiMoreHorizontal name="more"
                                            className=" text-white "
                                            size={25} color="white hover:bg-black" />
                                    </div>
                                </div>

                            </div>
                            <div id='post-body'>
                                <p className="text-gray-100 text-sm font-normal text-justify sm:text-base md:text-lg lg:text-xl xl:text-sm">
                                    {post.message}
                                </p>

                                <div className=" flex justify-center mt-2 items-center " >
                                    {
                                        post.picture && (
                                            <img src={post.picture}
                                                alt="post-pic"
                                                className=" w-full h-full rounded-2xl transition duration-150 cursor-pointer hover:scale-120 hover:translate-0 transform hover:shadow-none"
                                            />
                                        )
                                    }
                                </div>
                                <div>
                                    { /*{post.video && (
                                        <iframe
                                            className="flex w-[100%] h-96 rounded-2xl transition duration-150 cursor-pointer hover:scale-120 hover:translate-0 transform hover:shadow-none"
                                            src={post.video}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            title={post._id}
                                        >
                                        </iframe>
                                   )}*/}
                                </div>
                                <div className="flex mt-2 justify-between ">
                                    <div>
                                        <span className="text-gray-500 text-sm font-normal justify-center text-justify sm:text-base md:text-lg lg:text-xl xl:text-sm">
                                            {post.likers.length} likes
                                        </span>
                                    </div>
                                    <div className="flex space-x-4">

                                        <span className="text-gray-500 text-sm font-normal text-justify sm:text-base md:text-lg lg:text-xl xl:text-sm">
                                            {post.comments.length} comments
                                        </span>
                                        <span className="text-gray-500 text-sm font-normal text-justify sm:text-base md:text-lg lg:text-xl xl:text-sm">
                                            {post.comments.length} comments
                                        </span>
                                    </div>
                                </div>
                                <div className="flex mt-2 border-t-2 border-gray-600">
                                    <div className="flex space-x-4">
                                        <div>
                                            <LikeButton post={post} />

                                        </div>
                                        <div>
                                            <div className="flex w-36 h-10 mt-2  bg-black hover:bg-red-800 cursor-pointer justify-center items-center rounded-2xl">

                                                <FaRegComment className="text-red-500 " size={20} />
                                                <p className="text-white text-sm ml-2 font-normal text-justify sm:text-base md:text-lg lg:text-xl xl:text-sm">Comment</p>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>

                        </>


                    )
                }

            </div>
        </>
    );
}

export default Posts;