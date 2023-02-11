import React, { useEffect, useState } from 'react';
import {useSelector } from 'react-redux';
import { dateParser, isEmpty } from '../../Utils/Utils';
import { FiMoreHorizontal } from 'react-icons/fi';
import { FaPen, FaRegComment } from 'react-icons/fa';
import LikeButton from './LikeButton';
import CommentButton from './CommentButton';
import FollowHandler from '../../ProfileUtils/FollowHandler';


const Posts = ({ post }) => {
    const [loading, setLoading] = useState(true);
    const usersData = useSelector((state) => state.usersReducer);
    const userData = useSelector((state) => state.userReducer);
    const [showComments, setShowComments] = useState(false);
   



    useEffect(() => {
        !isEmpty(usersData)[0] && setLoading(false);
    }, [usersData]);


    return (
        <>
            <div className=' w-screen sm:w-full  h-auto border py-4 px-6 relative min-h-100 shadow-xl shadow-gray-800  border-gray-900 rounded-2xl bg-black' key={post._id}>
                {
                    loading ? (
                        <i className="fas fa-spinner fa-spin absolute t-0 left-0 size-12"></i>
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
                                                    <div className="flex items-center ml-2">
                                                        {post.posterId !== userData._id &&
                                                            <FollowHandler idToFollow={post.posterId} type={'friends'} />}

                                                    </div>
                                                </div>
                                                <span className="flex text-gray-500 translate-y-5 sm:-mt-8 sm:pt-0 sm:pb-10 text-sm mb-10 font-normal">
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
                                <p className="text-gray-100 text-lg font-normal text-justify sm:text-base md:text-sm lg:text-[14px] xl:text-[16x]">
                                    {post.message}
                                </p>
                                <div className=" flex justify-center mt-4 items-center " >
                                    {
                                        post.picture && (
                                            <img src={post.picture}
                                                alt="post-pic"
                                                className=" w-full h-full rounded-xl transition duration-150 cursor-pointer hover:scale-120 hover:translate-0 transform hover:shadow-none"
                                            />
                                        )
                                    }
                                </div>
                                <div>
                                    {post.video && (
                                        <iframe
                                            className="flex w-[100%] h-96 rounded-2xl transition duration-150 cursor-pointer hover:scale-120 hover:translate-0 transform hover:shadow-none"
                                            src={post.video}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            title={post._id}
                                        >
                                        </iframe>
                                    )}
                                    {
                                        userData._id === post.posterId && (
                                            <div className="flex ">
                                                <button
                                                    className=" items-center justify-center text-white font-bold py-2 px-4 rounded-full mr-2"
                                                    onClick={() => (true)} >
                                                    <FaPen size={16} />

                                                </button>
                                            </div>
                                        )
                                    }
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
                                <div className="flex  mt-2 border-t-2 border-gray-600">
                                    <div className="flex space-x-4">
                                        <div>
                                            <LikeButton post={post} />
                                        </div>

                                        <div>
                                            <div>
                                                <div onClick={() => setShowComments(!showComments)}
                                                    className="flex w-36 h-10 mt-2  bg-black hover:bg-red-800 cursor-pointer justify-center items-center rounded-2xl">
                                                    <FaRegComment className="text-red-500 " size={20} />
                                                    <p className="text-white text-sm ml-2 font-normal text-justify sm:text-base md:text-lg lg:text-xl xl:text-sm">Comment</p>
                                                </div>
                                            </div >


                                        </div>
                                    </div>

                                </div>
                                <div className="flex flex-col w-full " >
                                    {showComments && <CommentButton post={post} />}
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