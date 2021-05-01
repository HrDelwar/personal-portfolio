import React from 'react';
import logo from '../../dist/img/logo.png';


const Header = () => {
    return (
        <header id="masthead" class="site-header" data-anchor-target=".hero" data-top="background: rgba(255,255,255,0); padding: 30px 0; box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0);" data-top-bottom="background: rgba(255,255,255,1); padding: 10px 0; box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0.2);">
            <nav id="primary-navigation" class="site-navigation">
                <div class="container">
                    <div class="navbar-header page-scroll">

                        <button type="button" class="navbar-toggle collapsed" data-target="#portfolio-perfect-collapse" aria-expanded="false" >
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>

                        <a href="#hero" class=" site-logo">
                            <img src={logo} alt="logo" />
                        </a>

                    </div>

                    <div class="main-menu" id="portfolio-perfect-collapse">

                        <ul class="nav navbar-nav navbar-right">

                            <li class="page-scroll"><a href="#hero">Home</a></li>
                            <li class="page-scroll"><a href="#about">About</a></li>
                            <li class="page-scroll"><a href="#service">Service</a></li>
                            <li class="page-scroll"><a href="#portfolio">Portfolio</a></li>
                            <li class="page-scroll"><a href="#contact">Contact</a></li>

                        </ul>

                    </div>

                </div>
            </nav>
        </header>
    );
};

export default Header;