import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import image from "../../../src/assets/Logos/2.png";
import image2 from "../../../src/assets/Images/Backgroung.png";
import image3 from "../../../src/assets/Logos/5.png";



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
               window.location = "/home";
            }

         })
         .catch((err) => {
            console.log(err);
         });
   };


   return (
      <>
         <div className="flex justify-center mt-10 min-h-screen bg-black">
            <div className=" ">
               <div className="bg-gray-900 ml-10 rounded-lg shadow-lg text-black ">
                  <h1 className="text-white text-center mt-10 font-semibold text-xl">Login for a account</h1>
                  <div className="flex ml-10 mt-10 items-center">
                     <Link to="/">
                        <img className=" w-24 h-24 mt-10 " src={image} alt="logo" />
                     </Link>
                     <Link to="/">
                        <img className="h-12 mr-4 mt-10 " src={image3} alt="logo" />
                     </Link>

                  </div>

                  <div className="flex items-center content-center self-center justify-center ">
                     <form
                        className=' w-full px-8 pt-6 pb-8 -mt-10 flex  text-black '
                        action=""
                        onSubmit={handleSignIn}
                        id="sign-up-form" >
                        <div className="w-full py-7 ">
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
                              <button onClick={Clear} className=' w-[49%] h-[50px] rounded-[15px] bg-[lightblue] hover:bg-blue-500 text-white font-bold'>Clean</button>
                              <input className='w-[49%] h-[50px] rounded-[15px] bg-red-400 hover:bg-red-700 cursor-pointer text-white font-bold' type={"submit"} value="Login" >
                              </input>
                           </div>
                           <div className=' flex mt-10 ml-10'>
                              <h3 className='text-white'>Don't have an account ?</h3>
                              <h3 className='text-[green] font-bold ml-2'>Sign Up</h3>
                           </div>
                        </div>
                        <div >
                           <img className="rounded " src={image2} alt="logo" />
                        </div>
                     </form>
                  </div>
               </div>
            </div>

         </div>


      </>

   )
}






export default SignInScreen;






