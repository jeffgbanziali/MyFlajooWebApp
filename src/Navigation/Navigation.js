import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import Profile from '../screens/Profile/Profile';
import StartPage from '../screens/StartPage/StartPage';
import Thread from '../components/Thread/Thread';
import NavBar from '../components/NavBar/NavBar';


const Navigation = () => {
    return (

        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/start" element={<StartPage />} />
                <Route path="/" element={<HomeScreen />} />
                <Route path="/thread" element={<Thread />} />
                <Route path="sign-in" element={<SignInScreen />} />
                <Route path="sign-up" element={<SignUpScreen />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />

            </Routes>
        </BrowserRouter>

    );
}

export default Navigation;
