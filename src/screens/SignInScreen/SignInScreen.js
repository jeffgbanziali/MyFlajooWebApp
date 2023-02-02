import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



function Clear() {
   // eslint-disable-next-line no-restricted-globals
   location.reload();
}


const SignInScreen = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const handleSignIn = (e) => {

      e.preventDefault();
      const emailError = document.querySelector(".email.error");
      const passwordError = document.querySelector(".password.error");

      axios({
         method: "post",
         url: "http://localhost:5000/api/user/login",
         withCredentials: true,
         data: {
            email,
            password,
         },
      })
         .then((res) => {
            console.log(res);
            if (res.data.errors) {
               emailError.innerHTML = res.data.errors.email;
               passwordError.innerHTML = res.data.errors.password;
            } else {
               window.location = "/";
            }

         })
         .catch((err) => {
            console.log(err);
         });
   };


   return (
      <>
         <div className="flex items-center justify-center min-h-screen bg-black">
            <div className="w-full max-w-sm">
               <div className="flex items-center mb-6">
                  <Link to="/">
                     <img className="w-16 h-16 mr-4" src="https://www.freepnglogos.com/uploads/instagram-logo-png-transparent-0.png" alt="" />
                  </Link>
                  <Link to="/">
                     <h1 className="text-white font-bold text-xl">Home</h1>
                  </Link>
               </div>
               <div className="bg-gray-300 py-8 px-8 rounded-lg shadow-lg justify-center text-black w-full">

                  <h2 className="text-gray-700 text-xl font-bold mb-4">Log In</h2>
                  <form
                     className=' w-full px-4'
                     action=""
                     onSubmit={handleSignIn}
                     id="sign-up-form" >
                     <div className="w-full py-7 ">
                        <label
                           className="text-sm font-bold text-gray-700 tracking-wide"
                           htmlFor="email">Email</label>
                        <br />

                        <input
                           className='flex  mt-7 items-center pl-[10px] w-[320px] h-[50px] rounded-[10px] bg-[grey] border-0 text-white'
                           type="text"
                           name="email"
                           id="email"
                           placeholder='enter your email'
                           onChange={(e) => setEmail(e.target.value)}
                           value={email}
                        />
                        <div className=" flex items-center justify-center">
                           <p className="email error"></p>
                        </div>
                        <br />
                        <label
                           className="text-sm font-bold text-gray-700 tracking-wide"

                           htmlFor="password">Mot de passe</label>
                        <br />
                        <input
                           className='flex  mt-7 items-center pl-[10px] w-[320px] h-[50px] rounded-[10px] bg-[grey] border-0 text-white'
                           type="password"
                           name="password"
                           id="password"
                           placeholder='enter your password'
                           onChange={(e) => setPassword(e.target.value)}
                           value={password}
                        />
                        <div className="password error"></div>
                        <br />
                        <div className='flex justify-between w-[320px]'>
                           <button onClick={Clear} className=' w-[49%] h-[50px] rounded-[15px] bg-[grey] text-white font-bold'>Clean</button>
                           <input className='w-[49%] h-[50px] rounded-[15px] bg-[green] text-white font-bold' type={"submit"} value="Login" >
                           </input>
                        </div>

                     </div>

                  </form>
               </div>
            </div>

         </div>


      </>

   )
}






export default SignInScreen;






