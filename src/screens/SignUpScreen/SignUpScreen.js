import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import image from '../../../src/assets/Logos/2.png';
import image2 from '../../../src/assets/Images/Backgroung.png';

function Clear() {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
}

const SignUpScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [pseudo, setPseudo] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');

    const navigate = useNavigate()


    const handleLogin = (e) => {
        e.preventDefault();

        axios({
            method: "post",
            url: 'http://localhost:4000/api/user/register',
            data: {
                email,
                password,
                confirmPassword,
                pseudo,
                firstName,
                lastName,
                phone
            }
        }).then((res) => {
            if (res.data.errors) {
                console.log("Erreur dans la saisie")
            } else {
                console.log("Vous êtes connecter")
                console.log(res.data.user)
                navigate("/sign-in")
            }
        }).catch((err) => {
            console.log(err);
            console.log("Une du server");
        })
    }

    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex items-center justify-center">
                <div className="w-[600px] xl:w-[600px]  bg-black  rounded-lg shadow-lg transform transition-all ease-in-out duration-300 scale-100">
                    <div className="flex justify-between" >
                        <div className='flex w-full ml-10'>
                            <h3 className='text-white text-xl'>LET'S SEE WHAT'S NEW</h3>
                        </div>
                    </div>
                    <div className='justify-center flex mt-4'>
                        <div className='flex items-center  '>
                            <div className='ml-2  p-2 flex items-center h-[70px]'>
                                <Link to="/">
                                    <img className='w-[50px] h-[50px] ml-2' src={image} alt="" />
                                </Link>
                            </div>
                            <h3 className='font-semibold text-3xl text-red-800'>Add a account for to use Flajoo</h3>
                        </div>
                    </div>
                    <form className=' flex w-full px-8 py-10' action='' onSubmit={handleLogin} id="sin-up-form">
                        <div className='w-full  '>
                            <input className='flex  mt-4 items-center xl:pl-[8px] xl:w-[300px] xl:h-[40px] rounded-[10px] bg-white border-0 text-gray-800' type="text" name="pseudo" id='pseudo' placeholder='enter your first name' onChange={(e) => setPseudo(e.target.value)} />
                            <input className='flex  mt-4 items-center xl:pl-[8px] xl:w-[300px] xl:h-[40px] rounded-[10px] bg-white border-0 text-gray-800' type="text" name="firstName" id='firstName' placeholder='enter your first name' onChange={(e) => setFirstName(e.target.value)} />
                            <input className='flex  mt-4 items-center xl:pl-[8px] xl:w-[300px] xl:h-[40px] rounded-[10px] bg-white border-0 text-gray-800' type="text" name="lastName" id='lastName' placeholder='enter your last name' onChange={(e) => setLastName(e.target.value)} />
                            <input className='flex  mt-4 items-center xl:pl-[8px] xl:w-[300px] xl:h-[40px] rounded-[10px] bg-white border-0 text-gray-800' type="email" name="email" id='email' placeholder='enter your email' onChange={(e) => setEmail(e.target.value)} />
                            <input className='flex  mt-4 items-center xl:pl-[8px] xl:w-[300px] xl:h-[40px] rounded-[10px] bg-white border-0 text-gray-800' type="password" name="password" id='password' placeholder='enter your password' onChange={(e) => setPassword(e.target.value)} />
                            <input className='flex  mt-4 items-center xl:pl-[8px] xl:w-[300px] xl:h-[40px] rounded-[10px] bg-white border-0 text-gray-800' type="password" name="confirmPassword" id='confirmPassword' placeholder='confirm your password' onChange={(e) => setConfirmPassword(e.target.value)} />
                            <input className='flex  mt-4 items-center xl:pl-[8px] xl:w-[300px] xl:h-[40px] rounded-[10px] bg-white border-0 text-gray-800' type="number" name="phone" id='phone' placeholder='enter your phone number' onChange={(e) => setPhone(e.target.value)} />

                            <div className='flex justify-around xl:w-[300px]  mt-6'>
                                <button onClick={Clear} className=' xl:w-[40%] xl:h-[40px] rounded-[15px] bg-[lightblue] hover:bg-blue-500 text-white font-bold'>Clean</button>
                                <input className='xl:w-[40%] xl:h-[40px] rounded-[15px] bg-red-400 hover:bg-red-700 cursor-pointer text-white font-bold' type={"submit"} value="Register" >
                                </input>
                            </div>
                            <div className='flex  w-full xl:mt-4 xl:ml-4'>
                                <h3 className='flex justify-center items-center text-gray-700'>Already member ? </h3>
                                <div>
                                    <NavLink to="/sign-in">
                                        <h3 className='text-[green] fixed hover:border-b-2 hover:border-[green] cursor-pointer font-semibold ml-2'>Sign in</h3>
                                    </NavLink>
                                </div>
                            </div>
                        </div>

                        <div className=" hidden  ml-4 xl:inline">
                            <img className="rounded " src={image2} alt="logo" />
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default SignUpScreen;
