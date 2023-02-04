import React from 'react';

const Stories = () => {
    return (
        <div className="w-[40%] p-10 bg-cover rounded-xl self-center items-center justify-center mt-20 bg-[#212020]">
            <div className="flex flex-row items-center  self-center content-center justify-between   my-auto  ">
                <div >
                    <img className="w-32 h-56 rounded-xl border-2  " src="https://picsum.photos/200/300" alt="" />
                </div>
                <div>
                    <img className="w-32 h-56 rounded-xl" src="https://picsum.photos/200/300" alt="" />
                </div>
                <div>
                    <img className="w-32 h-56 rounded-xl " src="https://picsum.photos/200/300" alt="" />
                </div>
                <div>
                    <img className="w-32 h-56 rounded-xl " src="https://picsum.photos/200/300" alt="" />
                </div>
                <div>
                    <img className="w-32 h-56 rounded-xl " src="https://picsum.photos/200/300" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Stories;
