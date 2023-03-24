import React, { useContext, useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import { UidContext } from '../../../Context/AppContext'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import { useDispatch } from 'react-redux'
import { likePost, unlikePost } from '../../../actions/post.actions'

const LikeButton = ({ post }) => {
    const [liked, setLiked] = useState(false)
    const uid = useContext(UidContext)
    const dispatch = useDispatch()

    const like = () => {
        dispatch(likePost(post._id, uid))
        setLiked(true)
    }

    const unlike = () => {
        dispatch(unlikePost(post._id, uid))
        setLiked(false)
    }

    useEffect(() => {
        if (post.likers.includes(uid)) setLiked(true)
        else setLiked(false)
    }, [uid, post.likers, liked])
    return (
        <div>
            {uid === null && (
                <Popup
                    trigger={
                        <div className='flex w-32 h-10 mt-2  bg-black hover:bg-red-800 cursor-pointer justify-center items-center rounded-2xl'>
                            <AiOutlineHeart className='text-white ' size={20} />
                            <p className='text-white text-sm ml-2 font-normal text-justify sm:text-base md:text-lg lg:text-xl xl:text-sm'>
                                Like
                            </p>
                        </div>
                    }
                    position={['right center', 'bottom right', 'bottom left']}
                    closeOnDocumentClick
                >
                    <div className='flex flex-col justify-center items-center'>
                        <p className='text-black text-sm font-normal text-justify sm:text-base md:text-lg lg:text-xl xl:text-sm'>
                            You must be logged in to like a post
                        </p>
                    </div>
                </Popup>
            )}
            {uid && liked === false && (
                <div
                    onClick={like}
                    className='flex w-32 h-10 mt-2  bg-black hover:bg-gray-600 cursor-pointer justify-center items-center rounded-2xl'
                >
                    <AiOutlineHeart className='text-white transition duration-200 transform hover:scale-110' size={20} />
                    <p className='text-white text-sm ml-2 font-normal text-justify sm:text-base md:text-lg lg:text-xl xl:text-sm'>
                        Like
                    </p>
                </div>
            )}
            {uid && liked && (
                <div
                    onClick={unlike}
                    className='flex w-32 h-10 mt-2   bg-black hover:bg-red-800 cursor-pointer justify-center items-center rounded-2xl'
                >
                    <FaHeart className='text-red-500 transition duration-200 transform hover:scale-110 delay-100' size={20} />
                    <p className='text-red-500 text-sm ml-2 font-normal text-justify sm:text-base md:text-lg lg:text-xl xl:text-sm'>
                        Like
                    </p>
                </div>
            )}
        </div>
    )
}

export default LikeButton
