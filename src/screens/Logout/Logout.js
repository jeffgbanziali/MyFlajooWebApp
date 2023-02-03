import React from 'react';
import axios from 'axios';
import cookie from 'js-cookie';

const Logout = () => {
    const removeCookie = (key) => {
        if (window !== "undefined") {
            cookie.remove(key, { expires: 1 });
        }
    };

    const logout = async () => {
        await axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}api/user/logout`,
            withCredentials: true,
        })
            .then(() => removeCookie("jwt"))
            .catch((err) => console.log(err));

        window.location = "/start";
    };

    return (
        <div className="  w-10 h-10 bg-gray-300 rounded-full" onClick={logout} title="Logout" >
            <div className="flex flex-col justify-center items-center content-center self-center cursor-pointer text-center" >
                <img className="w-6 h-6 mt-1.5 ml-1.5"
                    src="./img/icons/logout.svg" alt="logout" />
            </div>
        </div>

    );
};

export default Logout;
