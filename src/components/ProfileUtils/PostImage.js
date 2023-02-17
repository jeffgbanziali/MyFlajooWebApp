import React from 'react';
import { FaHeart, FaRegComment } from 'react-icons/fa';


const images = [
    {
        name: '',
        image: 'https://th.bing.com/th/id/R.a8867af38f36cfc5ba754bf974ca4955?rik=95Kwfue8i9GbiA&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f33900000%2fCillian-in-Peaky-Blinders-cillian-murphy-33921144-500-749.jpg&ehk=Si0pmXoXe%2f3%2bl7sMd5oyIS%2bDg3RMxs5j8mQDH9zZDXE%3d&risl=&pid=ImgRaw&r=0',
        id: 1
    },
    {
        name: '',
        image: 'https://th.bing.com/th/id/R.a8867af38f36cfc5ba754bf974ca4955?rik=95Kwfue8i9GbiA&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f33900000%2fCillian-in-Peaky-Blinders-cillian-murphy-33921144-500-749.jpg&ehk=Si0pmXoXe%2f3%2bl7sMd5oyIS%2bDg3RMxs5j8mQDH9zZDXE%3d&risl=&pid=ImgRaw&r=0',
        id: 1
    },
    {
        name: '',
        image: 'https://th.bing.com/th/id/R.a8867af38f36cfc5ba754bf974ca4955?rik=95Kwfue8i9GbiA&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f33900000%2fCillian-in-Peaky-Blinders-cillian-murphy-33921144-500-749.jpg&ehk=Si0pmXoXe%2f3%2bl7sMd5oyIS%2bDg3RMxs5j8mQDH9zZDXE%3d&risl=&pid=ImgRaw&r=0',
        id: 1
    },
    {
        name: '',
        image: 'https://th.bing.com/th/id/R.a8867af38f36cfc5ba754bf974ca4955?rik=95Kwfue8i9GbiA&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f33900000%2fCillian-in-Peaky-Blinders-cillian-murphy-33921144-500-749.jpg&ehk=Si0pmXoXe%2f3%2bl7sMd5oyIS%2bDg3RMxs5j8mQDH9zZDXE%3d&risl=&pid=ImgRaw&r=0',
        id: 1
    },
    {
        name: '',
        image: 'https://th.bing.com/th/id/R.a8867af38f36cfc5ba754bf974ca4955?rik=95Kwfue8i9GbiA&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f33900000%2fCillian-in-Peaky-Blinders-cillian-murphy-33921144-500-749.jpg&ehk=Si0pmXoXe%2f3%2bl7sMd5oyIS%2bDg3RMxs5j8mQDH9zZDXE%3d&risl=&pid=ImgRaw&r=0',
        id: 1
    },
    {
        name: '',
        image: 'https://th.bing.com/th/id/R.a8867af38f36cfc5ba754bf974ca4955?rik=95Kwfue8i9GbiA&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f33900000%2fCillian-in-Peaky-Blinders-cillian-murphy-33921144-500-749.jpg&ehk=Si0pmXoXe%2f3%2bl7sMd5oyIS%2bDg3RMxs5j8mQDH9zZDXE%3d&risl=&pid=ImgRaw&r=0',
        id: 1
    },
    {
        name: '',
        image: 'https://th.bing.com/th/id/R.a8867af38f36cfc5ba754bf974ca4955?rik=95Kwfue8i9GbiA&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f33900000%2fCillian-in-Peaky-Blinders-cillian-murphy-33921144-500-749.jpg&ehk=Si0pmXoXe%2f3%2bl7sMd5oyIS%2bDg3RMxs5j8mQDH9zZDXE%3d&risl=&pid=ImgRaw&r=0',
        id: 1
    },
    {
        name: '',
        image: 'https://th.bing.com/th/id/R.a8867af38f36cfc5ba754bf974ca4955?rik=95Kwfue8i9GbiA&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f33900000%2fCillian-in-Peaky-Blinders-cillian-murphy-33921144-500-749.jpg&ehk=Si0pmXoXe%2f3%2bl7sMd5oyIS%2bDg3RMxs5j8mQDH9zZDXE%3d&risl=&pid=ImgRaw&r=0',
        id: 1
    },
    {
        name: '',
        image: 'https://th.bing.com/th/id/R.a8867af38f36cfc5ba754bf974ca4955?rik=95Kwfue8i9GbiA&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f33900000%2fCillian-in-Peaky-Blinders-cillian-murphy-33921144-500-749.jpg&ehk=Si0pmXoXe%2f3%2bl7sMd5oyIS%2bDg3RMxs5j8mQDH9zZDXE%3d&risl=&pid=ImgRaw&r=0',
        id: 1
    },
    {
        name: '',
        image: 'https://th.bing.com/th/id/R.a8867af38f36cfc5ba754bf974ca4955?rik=95Kwfue8i9GbiA&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f33900000%2fCillian-in-Peaky-Blinders-cillian-murphy-33921144-500-749.jpg&ehk=Si0pmXoXe%2f3%2bl7sMd5oyIS%2bDg3RMxs5j8mQDH9zZDXE%3d&risl=&pid=ImgRaw&r=0',
        id: 1
    },
    {
        name: '',
        image: 'https://th.bing.com/th/id/R.a8867af38f36cfc5ba754bf974ca4955?rik=95Kwfue8i9GbiA&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f33900000%2fCillian-in-Peaky-Blinders-cillian-murphy-33921144-500-749.jpg&ehk=Si0pmXoXe%2f3%2bl7sMd5oyIS%2bDg3RMxs5j8mQDH9zZDXE%3d&risl=&pid=ImgRaw&r=0',
        id: 1
    },
    {
        name: '',
        image: 'https://th.bing.com/th/id/R.a8867af38f36cfc5ba754bf974ca4955?rik=95Kwfue8i9GbiA&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f33900000%2fCillian-in-Peaky-Blinders-cillian-murphy-33921144-500-749.jpg&ehk=Si0pmXoXe%2f3%2bl7sMd5oyIS%2bDg3RMxs5j8mQDH9zZDXE%3d&risl=&pid=ImgRaw&r=0',
        id: 1
    },
]



const PostImage = () => {
    return (
        <div className="grid grid-cols-4 gap-3 ">
            {

                images.map((image) => (
                    <>
                        <div className="flex justify-center hover:opacity-10 shadow shadow-slate-600 items-center w-64 h-80 bg-yellow-600">
                            <img
                                className="w-full cursor-pointer border-2  h-full  object-cover"
                                src={image.image}
                                alt="" />
                            <div className="flex absolute flex-row ">
                                <div className="flex justify-center cursor-pointer w-8 h-8 rounded-full  hover:bg-slate-300  items-center">
                                    <button type="like">
                                        <FaHeart className="text-red-500" />
                                    </button>
                                </div>
                                <div className="flex justify-center cursor-pointer w-8 h-8 rounded-full  hover:bg-slate-300  items-center">
                                    <button type="like">
                                        <FaRegComment className="text-red-500" />
                                    </button>
                                </div>
                            </div>
                        </div>

                    </>

                ))
            }
        </div>
    );
}
export default PostImage;