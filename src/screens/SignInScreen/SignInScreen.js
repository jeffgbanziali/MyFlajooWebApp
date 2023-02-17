import React, { useState } from 'react';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
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
               window.location = "/";
            }

         })
         .catch((err) => {
            console.log(err);
         });
   };


   return (
      <>
         <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex items-center justify-center">
            <div className="w-[800px]  bg-black p-6 rounded-lg shadow-lg transform transition-all ease-in-out duration-300 scale-100">
               <div className="flex justify-between" >
                  <div className='flex w-full ml-10'>
                     <h3 className='text-white text-xl'>LET'S SEE WHAT'S NEW</h3>
                  </div>
               </div>
               <div className="flex f ml-10 mt-10 items-center">
                  <Link to="/">
                     <div className="flex items-center justify-center ">
                        <img className=" w-24 h-24 mt-10 " src={image} alt="logo" />
                        <img className="h-12 mr-4 mt-10 " src={image3} alt="logo" />
                     </div>
                  </Link>
               </div>
               <div className=" p-2 ">
                  <div className="flex items-center justify-center ">
                     <form
                        className=' w-full flex  items-center pt-6 pb-8 -mt-10   text-black '
                        action=""
                        onSubmit={handleSignIn}
                        id="sign-up-form" >
                        <div className="w-full py-7 ">
                           <br />
                           <input
                              className='flex mt-7 items-center pl-[10px] w-[320px] h-[50px] rounded-[10px] bg-white border-0 text-gray-800'
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
                              className='flex  mt-7 items-center pl-[10px] w-[320px] h-[50px] rounded-[10px] bg-white border-0 text-gray-800'
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
                              <h3 className='text-gray-700 '>Don't have an account ?</h3>
                              <NavLink to="/sign-up">
                                 <h3 className='text-[green] fixed hover:border-b-2 hover:border-[green] cursor-pointer font-semibold ml-2'>Sign Up</h3>
                              </NavLink>
                           </div>
                        </div>

                     </form>
                     <div className=" hidden xl:inline">
                        <img className="rounded-xl " src={image2} alt="logo" />
                     </div>
                  </div>

               </div>
            </div>
         </div>

      </>

   )
}






export default SignInScreen;






