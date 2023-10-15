import React, { useState } from "react";
import { BsImageFill } from "react-icons/bs";
import { HiVideoCamera } from "react-icons/hi";
import { GiMusicSpell } from "react-icons/gi";
import { useSelector } from "react-redux";

const CreatePost = () => {
  const [postText, setPostText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [video, setVideo] = useState("");
  const [audio, setAudio] = useState("");
  const userData = useSelector((state) => state.userReducer);

  const handlePicture = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setSelectedImage(selectedFile);
      setVideo("");
      setAudio("");
    }
  };

  const handleAudio = (e) => {
    const selectedAudio = e.target.files[0];

    if (selectedAudio) {
      setAudio(URL.createObjectURL(selectedAudio));
      setSelectedImage(null);
      setVideo("");
    }
  };

  const cancelPost = () => {
    setPostText("");
    setSelectedImage(null);
    setVideo("");
    setAudio("");
  };

  const handlePost = () => {
    // Ici, tu mettrais la logique pour envoyer le post
    // Cela pourrait inclure l'envoi de données au backend, le stockage d'images, etc.
    console.log("Post envoyé:", postText, selectedImage, video, audio);

    // Réinitialiser le formulaire
    cancelPost();
  };

  return (
    <div className="w-full h-full flex shadow-xl items-center justify-center rounded-xl">
      <div className="w-[40%] h-[80%] p-4 bg-white rounded-xl ">
        <div className="h-[18%] space-x-4 items-center  flex  rounded-xl">
          <img
            src={userData.picture}
            alt="user-img"
            className="sm:w-12 sm:h-12 xl:w-12 xl:h-12 w-12 h-12 rounded-full border-2 border-red-800 object-cover"
          />
          <input
            type="text"
            className="w-[90%] h-12 p-2 border flex bg-gray-300 border-gray-300 rounded-xl"
            placeholder="Add your message ?"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          />
        </div>
        {selectedImage && (
          <div className=" w-96 h-64 flex justify-center bg-red-400  mb-2">
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Selected"
              className="w-[100%] h-[100%] object-cover mb-2"
            />
          </div>
        )}
        {video && (
          <div className=" w-96 h-64 flex justify-center ">
            <video controls className="w-full h-48">
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
        {audio && (
          <div className="w-96 h-20 flex justify-center mb-2">
            <audio controls className="w-full">
              <source src={audio} type="audio/mpeg" />
              Your browser does not support the audio tag.
            </audio>
          </div>
        )}
        <div className="flex justify-center space-x-2">
          <label htmlFor="file" className="cursor-pointer">
            <div className="flex items-center p-2 bg-white hover:bg-gray-200 rounded">
              <BsImageFill size={20} className="mr-2 text-red-500" />
              <span className="text-sm text-gray-500">Photo</span>
            </div>
          </label>
          <label htmlFor="video" className="cursor-pointer">
            <div className="flex items-center p-2 bg-white hover:bg-gray-200 rounded">
              <HiVideoCamera size={20} className="mr-2 text-green-500" />
              <span className="text-sm text-gray-500">Video</span>
            </div>
          </label>
          <label htmlFor="audio" className="cursor-pointer">
            <div className="flex items-center p-2 bg-white hover:bg-gray-200 rounded">
              <GiMusicSpell size={20} className="mr-2 text-yellow-500" />
              <span className="text-sm text-gray-500">Audio</span>
            </div>
          </label>
        </div>
        <div className="flex justify-between mt-4">
          <button
            className="bg-red-400 hover:bg-red-700 text-white font-bold w-24 h-10 rounded-xl"
            onClick={cancelPost}
          >
            Annuler
          </button>
          <button
            className="bg-blue-400 hover:bg-blue-700 text-white font-bold w-32 h-10 rounded-xl"
            onClick={handlePost}
          >
            Publier
          </button>
        </div>
        <input
          type="file"
          id="file"
          name="file"
          accept=".jpg, .jpeg, .png"
          onChange={handlePicture}
          style={{ display: "none" }}
        />
        <input
          type="file"
          id="video"
          name="video"
          accept=".mp4, .avi, .mov"
          onChange={(e) => setVideo(URL.createObjectURL(e.target.files[0]))}
          style={{ display: "none" }}
        />
        <input
          type="file"
          id="audio"
          name="audio"
          accept=".mp3, .wav"
          onChange={handleAudio}
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
};

export default CreatePost;
