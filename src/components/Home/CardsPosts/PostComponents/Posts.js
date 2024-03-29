import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { formatPostDate, isEmpty } from '../../../Utils/Utils'
import { FiMoreHorizontal } from 'react-icons/fi'
import { FaPen, FaRegComment } from 'react-icons/fa'
import LikeButton from '../LikeButton'
import CommentButton from '../CommentButton'
import FollowHandler from '../../../ProfileUtils/FollowHandler'
import { NavLink } from 'react-router-dom'
import PostsPopup from './PostsPopup'
import ProfileMouse from '../../../ProfileUtils/ProfileMouse'

const Posts = ({ post }) => {
  const [loading, setLoading] = useState(true)
  const usersData = useSelector(state => state.usersReducer)
  const userData = useSelector(state => state.userReducer)
  const [showComments, setShowComments] = useState(false)
  const [commentPopup, setCommentPopup] = useState(false)

  const [showInitialContent, setShowInitialContent] = useState(false)
  const [showHoverContent, setShowHoverContent] = useState(false)


  const handleHoverMouseEnter = () => {
    setShowHoverContent(true)
  }

  const handleHoverMouseLeave = () => {
    setShowHoverContent(false)
  }

  useEffect(() => {
    !isEmpty(usersData)[0] && setLoading(false)
  }, [usersData])

  return (
    <>
      <div
        className=' w-screen sm:w-full h-auto border py-4 px-6 relative min-h-100 shadow-xl shadow-gray-200  border-gray-100 rounded-2xl bg-white'
        key={post._id}
      >
        {loading ? (
          <i className='fas fa-spinner fa-spin absolute t-0 left-0 size-12'></i>
        ) : (
          <>
            <div id='post-header '>
              <div className='flex justify-between'>
                <div className='flex flex-row'>
                  <NavLink to={`/profile/${post.posterId}`}>
                    <img
                      src={
                        !isEmpty(usersData[0]) &&
                        usersData
                          .map(user => {
                            if (user._id === post.posterId) return user.picture
                            else return null
                          })
                          .join('')
                        ||
                        "https://www.bdch.com/sites/bdch.com/assets/images/Staff/profileNone.jpg"
                      }
                      className='w-12 p-[2px] hover:opacity-75 cursor-pointer  md:block object-cover border-2 shadow-md  border-red-500 rounded-14 ml-18 overflow-hidden h-12 rounded-full mr-4'
                      alt='user-pic'
                    />
                  </NavLink>
                  <div className='flex  md:ml-18'>
                    <div className=' flex flex-col min-h-35'>
                      <div className='flex md:translate-y-18 mb-4 '>
                        <h4 className='text-black  font-bold'>
                          {!isEmpty(usersData[0]) &&
                            usersData.map(user => {
                              if (user._id === post.posterId) return user.pseudo
                              else return null
                            })}
                        </h4>
                      </div>
                      <span className='flex text-gray-800 translate-y-5 -mt-9 sm:-mt-8 sm:pt-0 sm:pb-10 text-[10px] mb-10 font-normal'>
                        {formatPostDate(post.createdAt)}
                      </span>
                      {showInitialContent && (
                        <>
                          <ProfileMouse
                            onMouseEnter={handleHoverMouseEnter}
                            onMouseLeave={handleHoverMouseLeave}
                            post={post}
                          />
                        </>
                      )}
                      {showHoverContent && (
                        <>
                          <PostsPopup post={post} />
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className='w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-slate-400 rounded-full '>
                  <FiMoreHorizontal
                    name='more'
                    className=' text-gray-800 '
                    size={25}
                    color='white hover:bg-black'
                  />
                </div>
              </div>
            </div>
            <div id='post-body' className='sm:-mt-10'>
              <p className='text-black  sm:text-lg font-normal text-justify text-[13px] md:text-sm lg:text-[14px] xl:text-[16x]'>
                {post.message}
              </p>
              <div className=' flex  justify-center mt-4 items-center '>
                {post.picture && (
                  <>
                    <button
                      className='flex w-[100%] bg-red-800 h-96 rounded-2xl transition duration-150 cursor-pointer hover:scale-120 hover:translate-0 transform hover:shadow-none'
                      type=''
                    >
                      <img
                        src={post.picture}
                        alt='post-pic'
                        className=' w-full h-full rounded-xl transition duration-150 cursor-pointer hover:scale-120 hover:translate-0 transform hover:shadow-none'
                      />
                    </button>
                  </>
                )}
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
                {userData._id === post.posterId && (
                  <div className='flex '>
                    <button
                      className=' items-center justify-center text-white font-bold py-2 px-4 rounded-full mr-2'
                      onClick={() => true}
                    >
                      <FaPen size={16} />
                    </button>
                  </div>
                )}
              </div>
              <div className='flex mt-2 justify-between '>
                <div>
                  <span className='text-gray-500 text-sm font-normal justify-center text-justify sm:text-base md:text-lg lg:text-xl xl:text-sm'>
                    {post.likers.length} likes
                  </span>
                </div>
                <div
                  onClick={() => setCommentPopup(true)}
                  className='flex space-x-4 cursor-pointer'
                >
                  <span className='text-gray-500 text-sm font-normal text-justify sm:text-base md:text-lg lg:text-xl xl:text-sm'>
                    {post.comments.length} comments
                  </span>
                  <span className='text-gray-500 text-sm font-normal text-justify sm:text-base md:text-lg lg:text-xl xl:text-sm'>
                    {post.comments.length} comments
                  </span>
                </div>
              </div>
              <div className='flex  mt-2 border-t border-gray-400'>
                <div className='flex space-x-4'>
                  <div>
                    <LikeButton post={post} />
                  </div>
                  <div>
                    <div>
                      <div
                        onClick={() => setShowComments(!showComments)}
                        className='flex w-36 h-10 mt-2  bg-white hover:bg-gray-600 cursor-pointer justify-center items-center rounded-2xl'
                      >
                        <FaRegComment className='text-gray-800 ' size={20} />
                        <p className='text-gray-800 text-sm ml-2 font-normal text-justify sm:text-base md:text-lg lg:text-xl xl:text-sm'>
                          Comment
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col w-full '>
                {showComments && <CommentButton post={post} />}
              </div>
            </div>
            {commentPopup && (
              <>
                <div className='fixed top-0 left-0 w-full z-50 h-full hidden bg-opacity-75 xl:flex items-center justify-center'>
                  <div className='w-[70%] h-[95%] bg-black p-2 rounded-lg shadow-lg transform transition-all ease-in-out duration-300 scale-100'>
                    <div className='flex w-[100%] h-[100%]  '>
                      <div className='flex flex-col border-l-2 border-r-2  w-[60%] h-[100%]  text-justify'>
                        {post.picture && (
                          <img
                            src={post.picture}
                            alt='post-pic'
                            className=' w-full h-full z-10  transition duration-150 cursor-pointer hover:scale-120 hover:translate-0 transform hover:shadow-none'
                          />
                        )}
                      </div>
                      <div className='flex flex-col   w-[40%] '>
                        <PostsPopup post={post} />
                      </div>
                    </div>
                  </div>
                  <div className='absolute top-0 right-0 mt-2 mr-2'>
                    <span
                      className='text-gray-200 text-2xl cursor-pointer'
                      onClick={() => setCommentPopup(false)}
                    >
                      &#10005;
                    </span>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  )
}
export default Posts
