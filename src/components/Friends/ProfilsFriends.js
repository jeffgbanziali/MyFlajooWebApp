import React from 'react';

import { useLocation } from 'react-router-dom';

const ProfilsFriends = () => {
    const location = useLocation();
    const friend = location.state ? location.state.friend : null;

    return (
        <div className="justify-center items-center space-x-2 mt-32 text-white flex">
            <p>@
                <span className="font-bold">{friend ? friend.pseudo : 'Pseudo'}</span>
            </p>
            <img
                className="w-10 h-10 border-2 border-red-800 rounded-full"
                src={friend ? friend.picture : "https://wave.fr/images/1916/05/dragon-ball-figtherz-goku-ultra-instinct.jpg"}
                alt="" />
            {/* Afficher d'autres informations du profil ici */}
        </div>
    );
};
export default ProfilsFriends;


