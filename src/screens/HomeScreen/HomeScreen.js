import React, { } from 'react';
import NavBar from '../../components/NavBar/NavBar';



const HomeScreen = () => {

    return (


        <>
            <NavBar />
            <div className="home-container">
                <div className="home-content">
                    <div className="home-header">
                        <h1>Groupomania</h1>
                        <h2>Le réseau social de l'entreprise</h2>
                    </div>
                    <div className="home-btn">
                        <h3>Bienvenue sur Groupomania</h3>
                    </div>
                </div>
            </div>
        </>




    );
}

export default HomeScreen;
