import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dateParser, isEmpty, timestampParser } from '../../../Utils/Utils';
import LikeButton from './LikeButtonPopup';
import { FaRegComment } from 'react-icons/fa';
import { addComment, getPosts } from '../../../../actions/post.actions';
import { AiOutlineHeart } from 'react-icons/ai';

const PostsPopup = ({ post }) => {


    const usersData = useSelector((state) => state.usersReducer);
    const userData = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    const [text, setText] = useState('');

    useEffect(() => {
        !isEmpty(usersData[0]) && console.log(usersData);
    }, [usersData]);


    const handleComment = (e) => {
        e.preventDefault();
        if (text) {
            dispatch(addComment(post._id, userData._id, text, userData.pseudo))
                .then(() => dispatch(getPosts()))
                .then(() => setText(''));
        }
    };
    return (
        <>
            <div className="xl:flex xl:p-2 xl:w-full xl:items-center hidden xl:border-b-2 xl:h-20" >
                <img
                    className="w-14 h-14 rounded-full object-cover"
                    src={
                        !isEmpty(usersData[0]) &&
                        usersData
                            .map((user) => {
                                if (user._id === post.posterId) return user.picture;
                                else return null;
                            })
                            .join('')
                    }
                    alt="" />
                <div className="flex flex-row  ml-2 ">
                    <div className="flex flex-col justify-center ">
                        <h2 className="text-gray-800   font-normal ">
                            {
                                !isEmpty(usersData[0]) &&
                                usersData
                                    .map((user) => {
                                        if (user._id === post.posterId) return user.pseudo;
                                        else return null;
                                    })
                            }

                        </h2>
                    </div>
                </div>
            </div>
            <div className="flex flex-col p-2  w-full overflow-auto h-[70%] border-b-2  " >
                {
                    post.comments.map((comment) => {
                        return (
                            <>
                                <div className={comment.commenterId === userData._id ? "flex  text-blue text-justify" : "flex   text-justify   "}>
                                    <div className="flex w-full h-full p-2 " >
                                        <img
                                            className="w-11 h-11 rounded-full object-cover"
                                            src={
                                                !isEmpty(usersData[0]) &&
                                                usersData.map((user) => {
                                                    if (user._id === comment.commenterId)
                                                        return user.picture;
                                                    else return null;
                                                }
                                                ).join('')

                                            }
                                            alt="" />
                                        <div className="flex flex-col  ml-2 ">
                                            <div className="flex flex-row ">
                                                <h4 className={comment.commenterId === userData._id ? "text-white ml-1 text-justify text-[16px] font-semibold" : "text-blue-300 ml-1 text-justify text-[16px] font-semibold"}>

                                                    {
                                                        comment.commenterPseudo
                                                    }
                                                </h4>
                                                <h2 className={comment.commenterId === userData._id ? "text-gray-600 ml-1 text-justify text-[16px] font-normal" : "text-gray-400 ml-1 text-justify text-[16px] font-normal"}>
                                                    {
                                                        comment.text
                                                    }
                                                </h2>
                                            </div>
                                            <div className="flex flex-row space-x-2 ml-1 items-center mt-2">
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
                                    <div className="flex flex-col p-2  " >
                                        <div className="flex flex-row space-x-2  ml-1 items-center mt-2">
                                            <div className="cursor-pointer">
                                                <h4 className="text-gray-400 text-[10px] font-semibold">
                                                    <AiOutlineHeart className="text-gray-200 hover:text-red-500 " size={18} />
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )

                    })
                }
            </div>
            <div className="flex flex-col p-2  w-full   h-[16%] border-b-2  " >
                <div className="flex flex-row w-full h-full items-center ">
                    <div>
                        <LikeButton post={post} />
                    </div>
                    <div
                        className="flex w-14 h-14 bg-black hover:bg-gray-800 cursor-pointer justify-center items-center rounded-full">
                        <FaRegComment className="text-gray-200 " size={30} />
                    </div>
                </div>
                <div className="flex flex-col w-full p-2 h-full ">
                    <div className="">
                        {
                            post.likers.length > 0 && <h2 className="text-gray-200 text-[12px] items-center flex font-semibold">
                                {post.likers.length} likes
                            </h2>
                        }
                    </div>
                    <h2 className="text-gray-300 text-[14px] font-normal">
                        {dateParser(post.createdAt)}
                    </h2>
                </div>
            </div>
            <div className="flex flex-row p-2 w-full items-center  border-b-2 h-20" >
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Add a comment..."
                    className="w-full h-14 p-2 bg-black text-gray-200 focus:outline-none" />
                <div className="flex flex-row w-20 h-10 bg-black   cursor-pointer justify-center items-center rounded-2xl">
                    <button
                        type="submit"
                        onClick={handleComment}>
                        <h2 className="text-blue-800 hover:text-blue-400  text-[18px] items-center flex font-semibold">
                            Post
                        </h2>
                    </button>
                </div>
            </div>
        </>
    );
}

export default PostsPopup;
