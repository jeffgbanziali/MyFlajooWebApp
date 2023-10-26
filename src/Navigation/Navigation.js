import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import SignInScreen from "../screens/SignInScreen/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen/SignUpScreen";
import Profile from "../screens/Profile/Profile";
import StartPage from "../screens/StartPage/StartPage";
import ProfilsFriends from "../components/Friends/ProfilsFriends";
import Message from "../screens/Message/Message";
import StoriesSteams from "../components/Home/Stories/StoriesSteams";
import Réels from "../screens/Réels/Réels";
import StoryCreated from "../components/Home/Stories/StoryCreated";



const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route path="/profile/:pseudo" element={<Profile />} />
          <Route path="/friends/:friendId" element={<ProfilsFriends />} />
          <Route path="/stories/:id" element={<StoriesSteams />} />
          <Route path="/createStories" element={<StoryCreated />} />
          <Route path="/videoReels" element={<Réels />} />
          <Route path="/chat" element={<Message />} />
          <Route path="/start" element={<StartPage />} />
          <Route path="sign-in" element={<SignInScreen />} />
          <Route path="sign-up" element={<SignUpScreen />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navigation;
