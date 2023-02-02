import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import NavBar from '../components/NavBar/NavBar';
import Profile from '../screens/Profile/Profile';


const Navigation = () => {
    return (

        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="sign-in" element={<SignInScreen />} />
                <Route path="sign-up" element={<SignUpScreen />} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="*" element={<h1>404 Not Found</h1>} />

            </Routes>
        </BrowserRouter>

    );
}

export default Navigation;
