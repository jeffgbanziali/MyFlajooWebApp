import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addPosts } from '../../../actions/post.actions';
import { isEmpty, timestampParser } from '../../Utils/Utils';
import { BsImageFill } from 'react-icons/bs';
import { HiVideoCamera } from 'react-icons/hi';
import { IoPricetagsSharp } from 'react-icons/io5';
import { uploadImageToFirebase } from '../../../data/firestore';
import { collection, addDoc, getDoc } from 'firebase/firestore';
import { firestore } from '../../../data/firestore';

const AddingPosts = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState("");
    const [postPicture, setPostPicture] = useState(null);
    const [video, setVideo] = useState("");
    const [postText, setPostText] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userReducer);


    const handlePost = async () => {
        if (postText.trim() === '') {
            alert('Erreur', 'Veuillez entrer du texte pour votre post.');
            return;
        }

        const postData = {
            posterId: userData._id,
            message: postText,
            imageFileName: null,
        };

        try {
            if (selectedImage) {
                const imageName = `image-${Date.now()}.${selectedImage.name.split('.').pop()}`;
                const imageUrl = await uploadImageToFirebase(selectedImage, imageName);

                postData.imageFileName = imageUrl;
            }

            // Utilise le dispatch pour ajouter le post au store Redux
            dispatch(addPosts(postData));

            // Ajoute le document à la collection "posts" dans Firestore
            const docRef = await addDoc(collection(firestore, 'posts'), postData);
            const docSnapshot = await getDoc(docRef);

            console.log('Post créé avec succès! Document ID:', docRef.id);
            console.log('Document data:', docSnapshot.data());
            alert('Succès', 'Votre post a été publié avec succès !');
            setPostText('');
            setSelectedImage(null);
        } catch (error) {
            console.error('Erreur lors de la création du post :', error);

            let errorMessage = 'Une erreur s\'est produite lors de la création du post.';

            if (error.response && error.response.data && error.response.data.errors) {
                errorMessage = Object.values(error.response.data.errors).join('\n');
            }

            alert('Erreur', errorMessage);
        }
    };

    const handlePicture = (e) => {
        const selectedFile = e.target.files[0];

        if (selectedFile) {
            setPostPicture(URL.createObjectURL(selectedFile));
            setSelectedImage(selectedFile);
            setVideo('');
        }
    };

    const cancelPost = () => {
        setMessage("");
        setPostPicture("");
        setVideo("");
        setSelectedImage("");
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
        <div className="w-screen sm:w-full sm:h-auto shadow-xl shadow-gray-200 border-gray-900 bg-white rounded-2xl">
            {isLoading ? (
                <i className="fas fa-spinner fa-pulse"></i>
            ) : (
                <>
                    <div className="flex p-2 lg:flex-row items-center">
                        <div className="flex lg:flex-row items-center">
                            <NavLink exact="true" to="/profil">
                                <img
                                    src={userData.picture}
                                    alt="user-img"
                                    className="sm:w-10 sm:h-10 xl:w-10 xl:h-10 w-12 h-12 rounded-full border-2 border-red-800 object-cover"
                                />
                            </NavLink>
                        </div>
                        <input
                            className="w-full h-10 rounded-full border-2 text-black ml-1 justify-center items-center bg-slate-200 border-gray-200 p-2 focus:outline-none focus:border-red-50"
                            name="message"
                            id="message"
                            placeholder="Quoi de neuf ?"
                            onChange={(e) => setPostText(e.target.value)}
                            value={postText}
                        />
                    </div>
                    <div className="w-full p-4 items-center rounded-lg">
                        {postText || postPicture || video.length > 20 ? (
                            <div className="flex flex-col lg:flex-row items-start lg:items-center mb-2">
                                <div className="w-12 h-12 rounded-full overflow-hidden mr-6 lg:mr-0">
                                    <img
                                        src={userData.picture}
                                        alt="user-pic"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between">
                                        <div className="font-medium">{userData.pseudo}</div>
                                        <div className="text-gray-600">{timestampParser(Date.now())}</div>
                                    </div>
                                    <p className="mb-2">{postText}</p>
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
                                        >
                                        </iframe>
                                    )}
                                </div>
                            </div>
                        ) : null}
                        <div className="xl:flex xl:space-x-10 hidden xl:items-center">
                            <div className="flex items-center space-x-3">
                                <div className="flex justify-between">
                                    {video && (
                                        <button className="bg-red-400 hover:bg-red-700 text-white font-bold text-sm w-24 h-12 py-2 px-4 rounded-xl" onClick={cancelPost}>
                                            Supprimer la video
                                        </button>
                                    )}
                                </div>
                                <div className="flex justify-between">
                                    {postText || postPicture || video.length > 20 ? (
                                        <button className="bg-red-400 hover:bg-red-700 text-white font-bold text-sm w-24 h-12 py-2 px-4 rounded-xl" onClick={cancelPost}>
                                            Supprimer le post
                                        </button>
                                    ) : null}
                                </div>
                                {!video && (
                                    <>
                                        <input
                                            type="file"
                                            id="file"
                                            name="file"
                                            accept=".jpg, .jpeg, .png"
                                            onChange={(e) => handlePicture(e)}
                                            style={{
                                                display: "none",
                                            }}
                                        />
                                        <label htmlFor="file" className="cursor-pointer">
                                            <div className="flex w-12 h-12 justify-center sm:w-24 sm:h-10 sm:rounded-xl rounded-xl bg-white hover:bg-slate-600  items-center" >
                                                <BsImageFill
                                                    size={25}
                                                    className="h-8 mr-2 text-red-500  "
                                                />
                                                <span className="text-sm hidden xl:inline text-gray-500">Photo</span>
                                            </div>
                                        </label>
                                    </>
                                )}
                                {!video && (
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
                                            <div className="flex w-12 h-12 justify-center sm:w-24 sm:h-10 sm:rounded-xl rounded-xl bg-white hover:bg-slate-600  items-center" >
                                                <HiVideoCamera
                                                    className="h-8 mr-2 text-green-500"
                                                    size={25}
                                                />
                                                <span className="text-sm hidden xl:inline text-gray-500">Video</span>
                                            </div>
                                        </label>
                                    </>
                                )}
                                <input
                                    type="file"
                                    id="file"
                                    name="file"
                                    accept=".jpg, .jpeg, .png"
                                    onChange={(e) => setSelectedImage(e.target.files[0])}
                                    style={{ display: "none" }}
                                />
                                <label className="cursor-pointer">
                                    <div className="flex w-12 h-12 justify-center sm:w-24 sm:h-10 sm:rounded-xl rounded-xl bg-white hover:bg-slate-600  items-center" >
                                        <IoPricetagsSharp
                                            size={25}
                                            className="h-8 mr-2 text-yellow-500"
                                        />
                                        <span className="text-sm hidden xl:inline text-gray-500">Tags</span>
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
            )}
        </div>
    );
}

export default AddingPosts;
