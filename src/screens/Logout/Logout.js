import React from 'react';
import axios from 'axios';
import cookie from 'js-cookie';
import { FiLogOut } from "react-icons/fi";


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

        window.location = "/";
    };

    return (
        <div className=" flex  w-8 h-8 items-center justify-center rounded-full" onClick={logout} title="Logout" >
            <div className="flex flex-col justify-center items-center content-center self-center cursor-pointer text-center" >
                <FiLogOut
                    size="20" color='black' />
            </div>
        </div>

    );
};

export default Logout;
