import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
        <div className='flex items-center justify-center w-full h-full min-w-[360px] bg-black'>
            <div className='pop-up'>
                <div className='px-2 flex items-center w-full h-[70px]'>
                    <Link to="/">
                        <img className='w-[50px] h-[50px] ml-2' src="https://www.freepnglogos.com/uploads/instagram-logo-png-transparent-0.png" alt="" />
                    </Link>
                    <div className='flex justify-evenly items-center w-[250px] h-[100%] bg-transparent '>
                        <Link to="/"><h1 className='text-white font-bold' >Home</h1></Link>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='flex w-full p-4'>
                        <h3 className='text-white text-xl'>LET'S SEE WHAT'S NEW</h3>
                    </div>
                    <div className='flex justify-center w-full p-4'>
                        <h3 className='font-bold text-3xl text-[green]'>CREATE A COUNT</h3>

                    </div>
                    <div className='flex w-full p-5 '>
                        <h3 className='text-white'>Already member ? </h3>
                        <h3 className='text-[green] font-bold ml-2'>Sign in</h3>
                    </div>
                </div>
                <form className=' w-full px-4' action='' onSubmit={handleLogin} id="sin-up-form">
                    <div className='w-full py-7 '>
                        <input className='flex  mt-7 items-center pl-[10px] w-[320px] h-[50px] rounded-[10px] bg-[grey] border-0 text-white' type="text" name="pseudo" id='pseudo' placeholder='enter your first name' onChange={(e) => setPseudo(e.target.value)} />
                        <input className='flex  mt-7 items-center pl-[10px] w-[320px] h-[50px] rounded-[10px] bg-[grey] border-0 text-white' type="text" name="firstName" id='firstName' placeholder='enter your first name' onChange={(e) => setFirstName(e.target.value)} />
                        <input className='flex  mt-7 items-center pl-[10px] w-[320px] h-[50px] rounded-[10px] bg-[grey] border-0 text-white' type="text" name="lastName" id='lastName' placeholder='enter your last name' onChange={(e) => setLastName(e.target.value)} />
                        <input className='flex  mt-7 items-center pl-[10px] w-[320px] h-[50px] rounded-[10px] bg-[grey] border-0 text-white' type="email" name="email" id='email' placeholder='enter your email' onChange={(e) => setEmail(e.target.value)} />
                        <input className='flex  mt-7 items-center pl-[10px] w-[320px] h-[50px] rounded-[10px] bg-[grey] border-0 text-white' type="password" name="password" id='password' placeholder='enter your password' onChange={(e) => setPassword(e.target.value)} />
                        <input className='flex  mt-7 items-center pl-[10px] w-[320px] h-[50px] rounded-[10px] bg-[grey] border-0 text-white' type="password" name="confirmPassword" id='confirmPassword' placeholder='confirm your password' onChange={(e) => setConfirmPassword(e.target.value)} />
                        <input className='flex  mt-7 items-center pl-[10px] w-[320px] h-[50px] rounded-[10px] bg-[grey] border-0 text-white' type="number" name="phone" id='phone' placeholder='enter your phone number' onChange={(e) => setPhone(e.target.value)} />


                    </div>
                    <div className='flex justify-between w-[320px] mb-10'>
                        <button onClick={Clear} className=' w-[49%] h-[50px] rounded-[15px] bg-[grey] text-white font-bold'>Clean</button>
                        <input className='w-[49%] h-[50px] rounded-[15px] bg-[green] text-white font-bold' type={"submit"} value="Register" >
                        </input>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUpScreen;
