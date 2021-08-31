import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Main from '../Main/Main';
import PortfolioDetails from '../PortfolioDetails/PortfolioDetails';

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Main />
            <PortfolioDetails />
            <Footer />
        </>
    );
};

export default Home;