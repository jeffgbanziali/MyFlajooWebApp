import React from 'react';

const Profile = () => {
    return (
        <div >
            <div className="flex flex-col justify-center items-center content-center self-center cursor-pointer text-center mt-10">
                <div className="flex  content-center self-center cursor-pointer text-center" >
                    <div className="flex flex-col justify-center items-center content-center self-center cursor-pointer text-center" >
                        <img className="w-28 h-28 mt-1.5 ml-1.5 rounded-full " src="https://play-lh.googleusercontent.com/H-BL_nBtFpQY92qaBHGZ4cHAcceuBfLiXWAHGOUDPS-9Gp4TPnhEjQSCZWvpfEFOv_A" alt="logout" />
                    </div>
                    <div className="flex flex-col justify-center items-center content-center self-center cursor-pointer text-center ml-10" >
                        <p className="text-2xl font-bold">
                         Eren Jager </p>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Profile;
