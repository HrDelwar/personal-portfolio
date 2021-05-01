import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Counters from '../Counters/Counters';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';
import Skills from '../Skills/Skills';


const Main = () => {
    return (
        <main id="main" class="site-main">
            <About />
            <Skills />
            <Services />
            <Portfolio />
            <Counters />
            <Contact />
        </main>
    );
};

export default Main;