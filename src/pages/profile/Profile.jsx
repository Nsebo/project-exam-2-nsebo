import React from 'react';
import Header from "../../layouts/Header/Header.jsx";
import Footer from "../../layouts/Footer/Footer.jsx";


const Profile = () => {
    return (
        <div className="profile">
        <Header/>
        <Footer/>
        <div className="profileWrapper">
        <Sidebar/>
        </div>
        </div>
    );
};

export default Profile;
