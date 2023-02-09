import React, { useContext, useEffect, useState } from 'react';
import { getPosts } from '../../actions/post.actions';
import { useDispatch, useSelector } from 'react-redux';
import Posts from '../Home/CardsPosts/Posts';
import AddingPosts from '../Home/CardsPosts/AddingPosts';
import { isEmpty } from '../Utils/Utils';
import { UidContext } from '../../Context/AppContext';
import Stories from '../Home/Stories/Stories';

const Thread = () => {
    const [loadPosts, setLoadPosts] = useState(true);
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.postReducer);
    const uid = useContext(UidContext)

    useEffect(() => {
        if (loadPosts) {
            dispatch(getPosts());
            setLoadPosts(false);
        }

    }, [loadPosts, dispatch])
    return (
        <>
            <div className='flex space-y-4 flex-col  justify-center '>
                { /* <div className='flex justify-center' >
                    <Stories />
    </div>*/}
                <div className='flex justify-center '>
                    {
                        uid ? <AddingPosts title="Home" /> : null
                    }

                </div>
                <div className='space-y-4'>
                    {!isEmpty(posts[0]) &&
                        posts.map((post) => {
                            return (
                                <div className='flex justify-center'
                                >
                                    <Posts post={post} key={post._id} />
                                </div>)
                        })}
                </div>
            </div>

        </>
    );
}

export default Thread;
