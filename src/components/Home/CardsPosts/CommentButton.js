import React, { useState } from 'react';
import { RiSendPlaneFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty, timestampParser } from '../../Utils/Utils';
import { addComment, getPosts } from '../../../actions/post.actions';
import EditDeleteComment from './EditDeleteComment';



const CommentButton = ({ post }) => {
    const [text, setText] = useState("");
    const usersData = useSelector((state) => state.usersReducer);
    const userData = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

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
            <div className="  flex flex-col w-full space-y-2 mt-2 m-4 ">
                {
                    post.comments.map((comment) => {
                        return (
                            <div >
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
                                    <div >

                                        <div className={comment.commenterId === userData._id ? "flex flex-col  text-justify border-gray-200 rounded-br-2xl rounded-t-2xl  p-2  bg-slate-200" : "flex  flex-col text-justify border-gray-200 rounded-bl-2xl rounded-t-2xl  p-2  bg-gray-300"}>
                                            <h4 className="text-black ml-1 text-[16px] font-semibold">
                                                {
                                                    comment.commenterPseudo
                                                }
                                            </h4>
                                            <p className="text-gray-800 ml-1  text-[14px]">
                                                {
                                                    comment.text
                                                }


                                            </p>
                                            <EditDeleteComment comment={comment} postId={post._id} />
                                        </div>
                                        <div className="flex flex-row space-x-2  items-center mt-2">
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
                    })}
                <div>
                    {

                        userData._id && (
                            <>
                                <div className="flex flex-row space-x-3 3 items-center mt-2">
                                    <img
                                        src={
                                            !isEmpty(usersData[0]) &&
                                            usersData.map((user) => {
                                                if (user._id === userData._id)
                                                    return user.picture;
                                                else return null;
                                            }
                                            ).join('')
                                        }
                                        className="w-12 h-12 hover:opacity-75 cursor-pointer flex object-cover border shadow-md  border-red-500 rounded-14 ml-18 overflow-hidden rounded-full "
                                        alt="commenter-pic"
                                    />
                                    <input
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}
                                        type="text"
                                        placeholder="Write a comment..."
                                        placeholderTextColor="gray-500-400"
                                        className="w-[80%] text-slate-400  bg-gray-200 p-2 border-gray-500 rounded-3xl border-1 " />
                                    <div className="flex flex-row items-center justify-center" >
                                        <button
                                            onClick={handleComment}
                                            type="button"
                                            className="flex text-blue-700 justify-center  hover:opacity-75 rounded-full items-center w-12 h-12   bg-slate-400 hover:text-red-700 font-semibold">
                                            <RiSendPlaneFill size={24} />
                                        </button>
                                    </div>

                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default CommentButton;
