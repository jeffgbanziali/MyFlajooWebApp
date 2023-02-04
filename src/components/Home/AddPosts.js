import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

const AddPosts = () => {

    /* const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState("");
    const [postPicture, setPostPicture] = useState(null);
    const [video, setVideo] = useState("");
    const [file, setFile] = useState();
    const userData = useSelector((state) => state.userReducer);
    const error = useSelector((state) => state.errorReducer.postError);
    const dispatch = useDispatch();

    const handlePost = async () => {
        if (message || postPicture || video) {
            const data = new FormData();
            data.append('posterId', userData._id);
            data.append('message', message);
            if (file) data.append("file", file);
            data.append('video', video);

            await dispatch(AddPosts(data));
            dispatch(getPosts());
            cancelPost();
        } else {
            alert("Veuillez entrer un message")
        }
    };

    const handlePicture = (e) => {
        setPostPicture(URL.createObjectURL(e.target.files[0]));
        setFile(e.target.files[0]);
        setVideo('');
    };

    const cancelPost = () => {
        setMessage("");
        setPostPicture("");
        setVideo("");
        setFile("");
    };


    useEffect(() => {
        if (!isEmpty(userData)) setIsLoading(false);

        const handleVideo = () => {
            let findLink = message.split(" ");
            for (let i = 0; i < findLink.length; i++) {
                if (
                    findLink[i].includes("https://www.yout") ||
                    findLink[i].includes("https://yout")
                ) {
                    let embed = findLink[i].replace("watch?v=", "embed/");
                    setVideo(embed.split("&")[0]);
                    findLink.splice(i, 1);
                    setMessage(findLink.join(" "));
                    setPostPicture('');
                }
            }
        };
        handleVideo();
    }, [userData, message, video]);*/

    return (

        <div>
            <h1>
                AddPosts
            </h1>
        </div>
        /*<div className="post-container">
            {isLoading ? (
                <i className="fas fa-spinner fa-pulse"></i>
            ) : (
                <>
                    <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
                        <div className="flex flex-col items-center text-center lg:text-left">
                            <p className="font-medium text-lg mb-2">
                                <span className="font-bold">
                                    {userData.following ? userData.following.length : 0}
                                </span>{" "}
                                Abonnement
                                {userData.following && userData.following.length > 1 ? "s" : null}
                            </p>
                            <p className="font-medium text-lg">
                                <span className="font-bold">
                                    {userData.followers ? userData.followers.length : 0}
                                </span>{" "}
                                Abonné
                                {userData.followers && userData.followers.length > 1 ? "s" : null}
                            </p>
                        </div>
                        <NavLink exact to="/profil" className="w-12 h-12 rounded-full overflow-hidden">
                            <img
                                src={userData.picture}
                                alt="user-img"
                                className="w-full h-full object-cover"
                            />
                        </NavLink>
                    </div>
                    <div className="w-full bg-white rounded-lg p-6 mb-6">
                        <textarea
                            className="w-full h-32 border-2 border-gray-300 rounded-lg p-2"
                            name="message"
                            id="message"
                            placeholder="Quoi de neuf ?"
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                        />
                        {message || postPicture || video.length > 20 ? (
                            <div className="flex flex-col lg:flex-row items-start lg:items-center mb-6">
                                <div className="w-12 h-12 rounded-full overflow-hidden mr-6 lg:mr-0">
                                    <img
                                        src={userData.picture}
                                        alt="user-pic"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between mb-2">
                                        <div className="font-medium">{userData.pseudo}</div>
                                        <div className="text-gray-600">{timestampParser(Date.now())}</div>
                                    </div>
                                    <p className="mb-2">{message}</p>
                                    {postPicture && (
                                        <img
                                            src={postPicture}
                                            alt=""
                                            className="w-full h-64 object-cover mb-2"
                                        />
                                    )}
                                    {video && (
                                        <iframe
                                            src={video}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            title={video}
                                            className="w-full h-64 object-cover mb-2"
                                        ></iframe>
                                    )}
                                </div>
                            </div>
                        ) : null}
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <label htmlFor="file" className="cursor-pointer">
                                    <img
                                        src="./img/icons/picture.svg"
                                        alt="picture"
                                        className="h-8 mr-4"
                                    />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    name="file"
                                    accept=".jpg, .jpeg, .png"
                                    onChange={(e) => setPostPicture(e.target.files[0])}
                                    style={{ display: "none" }}
                                />
                                <img
                                    src="./img/icons/video.svg"
                                    alt="video"
                                    className="h-8 mr-4"
                                />
                                <img
                                    src="./img/icons/tags.svg"
                                    alt="tags"
                                    className="h-8 mr-4"
                                />
                            </div>
                            <button
                                className="bg-blue-400 text-white font-bold py-2 px-4 rounded-full"
                                onClick={handlePost}
                            >
                                Publier
                            </button>
                        </div>
                    </div>

                </>
            )
            }
        </div>*/
    );
}

export default AddPosts;
