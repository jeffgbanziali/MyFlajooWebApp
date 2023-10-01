import React, { useContext, useEffect, useState } from 'react';
import { UidContext } from '../../../Context/AppContext';
import { FiEdit } from 'react-icons/fi';
import { editComment } from '../../../actions/post.actions';
import { useDispatch } from 'react-redux';





const EditDeleteComment = ({ comment, postId }) => {
    const [isAuthor, setIsAuthor] = useState(false);
    const [edit, setEdit] = useState(false);
    const [text, setText] = useState('');
    const uid = useContext(UidContext)

    const dispatch = useDispatch();

    const handleEdit = (e) => {
        e.preventDefault();
        console.log('edit')
        if (text) {
            dispatch(editComment(postId, comment._id, text));
            setEdit('');
            setEdit(false);
        }
    }

    useEffect(() => {
        const checkAuthor = () => {
            if (uid === comment.commenterId) {
                setIsAuthor(true);
            }
        }
        checkAuthor();
    }, [uid, comment.commenterId])
    return (
        <div className="flex  flex-row justify-between">
            {
                isAuthor && edit === false && (
                    <div className="flex flex-row ">
                        <span className="text-gray-900 text-sm mr-1 cursor-pointer hover:text-gray-300" onClick={() => setEdit(!edit)}>
                            <FiEdit />
                        </span>
                    </div>
                )
            }
            {
                isAuthor && edit && (
                    <form
                        action=""
                        onSubmit={handleEdit}
                        className="flex flex-col justify-between"
                    >
                        <label
                            htmlFor='text'
                            className="text-gray-100 text-sm mr-1 cursor-pointer hover:text-gray-300"
                            onClick={() => setEdit(!edit)} >
                            Editer
                        </label>
                        <input
                            className="text-gray-100 text-sm mr-1 cursor-pointer hover:text-gray-300"
                            type="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            defaultValue={comment.text} />
                        <input
                            className="text-gray-100 text-sm mr-1 cursor-pointer hover:text-gray-300"
                            type="submit"
                            value="Validate" />
                    </form>
                )
            }
        </div>
    );
}

export default EditDeleteComment;
