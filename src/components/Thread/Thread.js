import React, { useEffect, useState } from 'react';
import { getPosts } from '../../actions/post.actions';
import { useDispatch, useSelector } from 'react-redux';
import Posts from '../Home/CardsPosts/Posts';
import AddingPosts from '../Home/CardsPosts/AddingPosts';
import { isEmpty } from '../Utils/Utils';

const Thread = () => {
    const [loadPosts, setLoadPosts] = useState(true);
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.postReducer);

    useEffect(() => {
        if (loadPosts) {
            dispatch(getPosts());
            setLoadPosts(false);
        }

    }, [loadPosts, dispatch])
    return (
        <>
            <div className='flex space-y-4 flex-col mt-10 mr-24 justify-start '>
                <div className='flex justify-start '>
                    <AddingPosts title="Home" />
                </div>
                <div className='space-y-4'>
                    {!isEmpty(posts[0]) &&
                        posts.map((post) => {
                            return (
                                <div>
                                    <Posts post={post} key={post._id} />
                                </div>)
                        })}
                </div>
            </div>

        </>
    );
}

export default Thread;
