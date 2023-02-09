import React, { useState } from 'react';

const PostSHandler = ({ posterId }) => {
    const [postsUser, setPostsUser] = useState([]);
    return (
        <div>
            {
                postsUser.map((post) => {
                    return (
                        <div>
                            <h2>
                                PostsUser
                            </h2>
                        </div>
                    );
                }
                )
            }
        </div>
    );
}

export default PostSHandler;
