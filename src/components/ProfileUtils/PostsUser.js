import React, { useState } from 'react';

const PostsUser = () => {
    const [postsPopup, setPostsPopup] = useState(false);
    return (
        <>
            <div onClick={() => setPostsPopup(!postsPopup)} >
                <h2>
                    PostsUser
                </h2>
            </div>
            <div>
                {
                    postsPopup && (
                        <div>
                            <h2>
                                PostsUser
                            </h2>
                        </div>
                    )
                }

            </div>
        </>

    );
}

export default PostsUser;
