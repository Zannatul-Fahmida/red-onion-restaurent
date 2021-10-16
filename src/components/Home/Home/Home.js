import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Menus from '../Menus/Menus';
import Reviews from '../Reviews/Reviews';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <TopBanner></TopBanner>
            <Menus></Menus>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;