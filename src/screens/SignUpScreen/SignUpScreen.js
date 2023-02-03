import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
            url: 'http://localhost:5000/api/user/register',
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
        <div className='flex justify-center items-center min-h-screen bg-black'>
            <div className='pop-up bg-gray-900 mt-2 ml-10 rounded-lg shadow-lg text-black '>
                <div className='ml-2 flex items-center w-full h-[70px]'>
                    <Link to="/">
                        <img className='w-[50px] h-[50px] ml-2' src={image} alt="" />
                    </Link>
                    <div className='flex w-full ml-10'>
                        <h3 className='text-white text-xl'>LET'S SEE WHAT'S NEW</h3>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='flex justify-center w-full '>
                        <h3 className='font-bold text-3xl text-[green]'>CREATE A COUNT</h3>
                    </div>
                </div>
                <form className=' flex w-full px-8 py-10' action='' onSubmit={handleLogin} id="sin-up-form">
                    <div className='w-full  '>
                        <input className='flex  mt-7 items-center pl-[10px] w-[320px] h-[50px] rounded-[10px] bg-[grey] border-0 text-white' type="text" name="pseudo" id='pseudo' placeholder='enter your first name' onChange={(e) => setPseudo(e.target.value)} />
                        <input className='flex  mt-7 items-center pl-[10px] w-[320px] h-[50px] rounded-[10px] bg-[grey] border-0 text-white' type="text" name="firstName" id='firstName' placeholder='enter your first name' onChange={(e) => setFirstName(e.target.value)} />
                        <input className='flex  mt-7 items-center pl-[10px] w-[320px] h-[50px] rounded-[10px] bg-[grey] border-0 text-white' type="text" name="lastName" id='lastName' placeholder='enter your last name' onChange={(e) => setLastName(e.target.value)} />
                        <input className='flex  mt-7 items-center pl-[10px] w-[320px] h-[50px] rounded-[10px] bg-[grey] border-0 text-white' type="email" name="email" id='email' placeholder='enter your email' onChange={(e) => setEmail(e.target.value)} />
                        <input className='flex  mt-7 items-center pl-[10px] w-[320px] h-[50px] rounded-[10px] bg-[grey] border-0 text-white' type="password" name="password" id='password' placeholder='enter your password' onChange={(e) => setPassword(e.target.value)} />
                        <input className='flex  mt-7 items-center pl-[10px] w-[320px] h-[50px] rounded-[10px] bg-[grey] border-0 text-white' type="password" name="confirmPassword" id='confirmPassword' placeholder='confirm your password' onChange={(e) => setConfirmPassword(e.target.value)} />
                        <input className='flex  mt-7 items-center pl-[10px] w-[320px] h-[50px] rounded-[10px] bg-[grey] border-0 text-white' type="number" name="phone" id='phone' placeholder='enter your phone number' onChange={(e) => setPhone(e.target.value)} />

                        <div className='flex justify-between w-[320px]  mt-6'>
                            <button onClick={Clear} className=' w-[49%] h-[50px] rounded-[15px] bg-[lightblue] hover:bg-blue-500 text-white font-bold'>Clean</button>
                            <input className='w-[49%] h-[50px] rounded-[15px] bg-red-400 hover:bg-red-700 cursor-pointer text-white font-bold' type={"submit"} value="Login" >
                            </input>
                        </div>
                        <div className='flex w-full mt-6 ml-10'>
                            <h3 className='text-white'>Already member ? </h3>
                            <h3 className='text-[green] font-bold ml-2'>Sign in</h3>
                        </div>
                    </div>
                    <div >
                        <img className="rounded " src={image2} alt="logo" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUpScreen;
