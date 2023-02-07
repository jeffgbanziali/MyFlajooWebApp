import React, { useState } from 'react';
import { FaRegComment } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty, timestampParser } from '../../Utils/Utils';



const CommentButoon = ({ post }) => {
    const usersData = useSelector((state) => state.usersReducer);
    const userData = useSelector((state) => state.userReducer);


    const dispatch = useDispatch();

    const handleComment = async () => { }

    return (
        <>
            <div className="   flex flex-col w-full space-y-2 mt-2 ">
                {
                    post.comments.map((comment) => {
                        return (
                            <div className={comment.posterId === userData._id ? "bg-gray-800 border-none rounded-lg border-r-6 border-b-6" : "flex flex-col w-96   border-gray-200 rounded-lg p-2 m-2"}>
                                <div className="flex -space-x-2  ">
                                    <div>
                                        < img src={
                                            !isEmpty(usersData[0]) &&
                                            usersData.map((user) => {
                                                if (user._id === comment.commenterId)
                                                    return user.picture;
                                                else return null;
                                            }
                                            ).join('')

                                        }
                                            className="w-8 h-8 hover:opacity-75 cursor-pointer flex object-cover border shadow-md  border-red-500 rounded-14 ml-18 overflow-hidden rounded-full mr-4"
                                            alt="commenter-pic"
                                        />
                                    </div>
                                    <div>

                                        <div className="flex flex-col text-justify border-gray-200 rounded-2xl  p-2  bg-gray-900">

                                            <h4 className="text-white ml-1 text-[12px] font-semibold">
                                                {
                                                    comment.commenterPseudo
                                                }
                                            </h4>
                                            <p className="text-gray-400 ml-1  text-[14px]">
                                                {
                                                    comment.text
                                                }
                                            </p>
                                        </div>
                                        <div className="flex flex-row space-x-2 justify-between items-center mt-2">
                                            <div className="cursor-pointer">
                                                <h4 className="text-gray-400 hover:text-red-500 text-[10px] font-semibold">
                                                    Like
                                                </h4>
                                            </div>
                                            <div className="cursor-pointer" >
                                                <h4 className="text-gray-400 hover:text-red-500 text-[10px] font-semibold">
                                                    Respond
                                                </h4>
                                            </div>
                                            <h4 className="text-gray-700 text-[10px] font-semibold">
                                                {
                                                    timestampParser(comment.timestamp)
                                                }
                                            </h4>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        )
                    }
                    )
                }

            </div>
        </>


    );
}

export default CommentButoon;
