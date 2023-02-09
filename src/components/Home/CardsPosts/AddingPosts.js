import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addPosts, getPosts } from '../../../actions/post.actions';
import { isEmpty, timestampParser } from '../../Utils/Utils';
import { BsImageFill } from 'react-icons/bs';
import { HiVideoCamera } from 'react-icons/hi';
import { IoPricetagsSharp } from 'react-icons/io5';

const AddingPosts = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState("");
    const [postPicture, setPostPicture] = useState(null);
    const [video, setVideo] = useState("");
    const [file, setFile] = useState();
    const userData = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    const handlePost = async () => {
        if (message || postPicture || video) {
            const data = new FormData();
            data.append('posterId', userData._id);
            data.append('message', message);
            if (file) data.append("file", file);
            data.append('video', video);

            await dispatch(addPosts(data));
            dispatch(getPosts());
            cancelPost();
            console.log(data);
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
    }, [userData, message, video]);

    return (


        <div className="  w-full  shadow-xl shadow-gray-800  border-gray-900  bg-gray-800  rounded-3xl ">
            {isLoading ? (
                <i className="fas fa-spinner fa-pulse"></i>
            ) : (
                <>
                    <div className=" flex lg:flex-row items-center  ">
                        <div className="flex p-4 lg:flex-row items-center mb-2">
                            <NavLink exact to="/profil">
                                <img
                                    src={userData.picture}
                                    alt="user-img"
                                    className="w-16 h-16 p-2 rounded-full  border-2 border-red-800 object-cover"
                                />
                            </NavLink>
                        </div>
                        <textarea
                            className="w-full h-12 border-2 mr-10 justify-center items-center border-gray-300 rounded-lg p-2 focus:outline-none focus:border-red-800"
                            name="message"
                            id="message"
                            placeholder="Quoi de neuf ?"
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                        />


                    </div>
                    <div className="w-full items-center rounded-lg p-6 mb-2">
                        {message || postPicture || video.length > 20 ? (
                            <div className="flex flex-col lg:flex-row items-start lg:items-center mb-2">
                                <div className="w-12 h-12 rounded-full overflow-hidden mr-6 lg:mr-0">
                                    <img
                                        src={userData.picture}
                                        alt="user-pic"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between ">
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
                                    {
                                        video && (
                                            <iframe
                                                src={video}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                title={video}
                                                className="w-full h-64 object-cover mb-2"
                                            >
                                            </iframe>
                                        )}
                                </div>
                            </div>
                        ) : null
                        }

                        <div className="flex space-x-10 items-center">
                            <div className="flex items-center space-x-3">
                                <div className="flex justify-between">

                                    {
                                        video && (
                                            <button className="bg-red-400 hover:bg-red-700 text-white font-bold text-sm w-24 h-12 py-2 px-4 rounded-xl" onClick={cancelPost}>
                                                Supprimer la video
                                            </button>
                                        )
                                    }
                                </div>
                                <div className="flex justify-between">

                                    {
                                        message || postPicture || video.length > 20 ? (
                                            <button className="bg-red-400 hover:bg-red-700 text-white font-bold text-sm w-24 h-12 py-2 px-4 rounded-xl" onClick={cancelPost}>
                                                Supprimer le post
                                            </button>
                                        ) : null
                                    }

                                </div>
                                {
                                    isEmpty(video) && (
                                        <>
                                            <input
                                                type="file"
                                                id="file"
                                                name="file"
                                                accept=".jpg, .jpeg, .png"
                                                onChange={(e) => handlePicture(e)}
                                                style={{ display: "none" }}
                                            />
                                            <label htmlFor="file" className="cursor-pointer">
                                                <div className="flex w-32 h-12 justify-center rounded-xl bg-gray-700 hover:bg-slate-600 items-center" >
                                                    <BsImageFill
                                                        size={25}
                                                        className="h-8 mr-4"
                                                    />
                                                    <span className="text-sm text-white">Photo</span>
                                                </div>
                                            </label>
                                        </>
                                    )
                                }
                                {
                                    isEmpty(video) && (
                                        <>

                                            <input
                                                type="file"
                                                id="video"
                                                name="video"
                                                accept=".mp4, .avi, .mov"
                                                onChange={(e) => handlePicture(e)}
                                                style={{ display: "none" }}
                                            />
                                            <label htmlFor="video" className="cursor-pointer">
                                                <div className="flex w-32 h-12 justify-center rounded-xl  bg-gray-700 hover:bg-slate-600  items-center" >
                                                    <HiVideoCamera
                                                        className="h-8 mr-4"
                                                        size={25}
                                                    />
                                                    <span className="text-sm text-white">Video</span>
                                                </div>
                                            </label>
                                        </>
                                    )}
                                <input
                                    type="file"
                                    id="file"
                                    name="file"
                                    accept=".jpg, .jpeg, .png"
                                    onChange={(e) => setPostPicture(e.target.files[0])}
                                    style={{ display: "none" }}
                                />
                                <label className="cursor-pointer">
                                    <div className="flex w-32 h-12 justify-center rounded-xl  bg-gray-700 hover:bg-slate-600  items-center" >
                                        <IoPricetagsSharp
                                            size={25}
                                            className="h-8 mr-4"
                                        />
                                        <span className="text-sm text-white">Tags</span>
                                    </div>
                                </label>
                            </div>
                            <button
                                className="bg-blue-400 hover:bg-blue-700 text-white font-bold w-32 h-12F py-2 px-4 rounded-xl"
                                onClick={handlePost}
                            >
                                Send
                            </button>


                        </div>
                    </div>


                </>
            )
            }
        </div >

    )

}

export default AddingPosts;
