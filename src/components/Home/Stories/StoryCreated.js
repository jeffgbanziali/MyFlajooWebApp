import React, {  useState } from 'react'
import { AiOutlinePicture } from 'react-icons/ai'
import { FaRegSmile } from 'react-icons/fa'
import { FiMusic } from 'react-icons/fi'
import { RiArrowDownSLine } from 'react-icons/ri'
import { RxLetterCaseCapitalize } from 'react-icons/rx'

function StoryCreated() {


    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileChange = (e) => {
        const files = e.target.files;
        setSelectedFiles([...selectedFiles, ...files]);
    };


    

    return (
        <>

            <div className='fixed top-0 flex-col left-0 w-full  justify-center z-50 h-full hidden xl:flex '>
                <div className=' w-full hidden top-0 right-0  '>
                    <span
                        className='text-gray-200 text-2xl cursor-pointer'

                    >
                        &#10005;
                    </span>
                </div>
                <div className='w-[100%] h-[100%] flex flex-col items-center  mt-4 '>
                    <div className='w-[70%] h-[50%] flex items-center justify-around  '>
                        <div className="sm:w-[24%]  sm:h-[80%] h-32 w-24 bg-gray-400  flex flex-col items-center justify-center rounded-2xl">
                            <div className='w-20 h-20 bg-blue-700 flex justify-center items-center rounded-full'>
                                <RxLetterCaseCapitalize size={40} color='white' />
                            </div>
                            <p className='text-[30px] text-white'>
                                Write a text
                            </p>
                        </div>
                        <div className="sm:w-[24%] sm:h-[80%] h-32 w-24 bg-violet-400   flex flex-col items-center justify-center rounded-2xl">
                            <div className='w-20 h-20 bg-green-700 flex justify-center items-center rounded-full'>
                                <FiMusic size={40} color='white' />
                            </div>
                            <p className='text-[30px] text-white'>
                                Music
                            </p>
                        </div>
                        <div className="sm:w-[24%] sm:h-[80%] h-32 w-24 bg-red-900   flex flex-col items-center justify-center rounded-2xl">
                            <div className='w-20 h-20 bg-yellow-300 flex justify-center items-center rounded-full'>
                                <FaRegSmile size={50} color='black' />
                            </div>
                            <p className='text-[30px] text-white'>
                                Selfie
                            </p>
                        </div>
                        <div className='sm:w-[24%] sm:h-[80%] bg-gray-400 flex flex-col items-center justify-center rounded-2xl'>
                            <label htmlFor='file' className='w-20 h-20 bg-blue-700 flex justify-center items-center rounded-full cursor-pointer'>
                                <RxLetterCaseCapitalize size={40} color='white' />
                            </label>
                            <input
                                type='file'
                                id='file'
                                name='file'
                                accept='.jpg, .jpeg, .png'
                                onChange={(e) => handleFileChange(e)}
                                style={{ display: 'none' }}
                                multiple
                            />
                            <p className='text-[30px] text-white'>Write a text</p>
                        </div>
                    </div>
                    <div className='w-[65%] h-[6%] flex flex-row items-center justify-between  '>
                        <div className='w-36 flex flex-row justify-center items-center h-10 '>
                            <p className='text-[22px]'>
                                Pellicule
                            </p>
                            <RiArrowDownSLine color='black' size={30} />
                        </div>
                        <div className='w-60 flex flex-row p-4 justify-between rounded-3xl border border-gray-400 items-center h-10 '>
                            <AiOutlinePicture color='black' size={30} />
                            <p className='text-[22px]'>
                                Multiples choices
                            </p>
                        </div>
                    </div>

                    {selectedFiles.map((file, index) => (
                        <div className='  w-[100%] h-[100%] p-4 items-center  bg-black justify-center flex flex-row flex-wrap gap-4 overflow-y-scroll  '>

                            <div key={index} className='w-[80%] z-40 items-center justify-center flex h-[100%] bg-black'>
                                <img src={URL.createObjectURL(file)} alt={`Media ${index}`} style={{ maxWidth: '100%', maxHeight: '100%' }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>



    )
}

export default StoryCreated
