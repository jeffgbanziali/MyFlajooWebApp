import React from 'react';
import StoriesCard from './StoriesCard';


const stories = [
    {
        name: "Rafael Nadal",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v"
    },
    {
        name: "Rafael Nadal",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v"
    },
    {
        name: "Rafael Nadal",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v"
    },
    {
        name: "Rafael Nadal",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v"
    },
    {
        name: "Rafael Nadal",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v"
    },
    {
        name: "Rafael Nadal",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v"
    },
    {
        name: "Rafael Nadal",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v"
    },
    {
        name: "Rafael Nadal",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v"
    },
    {
        name: "Rafael Nadal",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v"
    },

    {
        name: "Rafael Nadal",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v"
    }
]

const Stories = () => {
    return (
        <div className=" flex mt-10">
            <div className="flex border-2 border-color-2 bg-black border-gray-600 rounded-lg mt-10  ">
                {
                    stories.map((story) => (
                        <StoriesCard
                            key={story.src}
                            name={story.name}
                            src={story.src}
                            profile={story.profile} />
                    ))
                }

            </div>
        </div>
    );
}

export default Stories;
