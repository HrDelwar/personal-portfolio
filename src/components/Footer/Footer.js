import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAngleDoubleUp, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import TrackVisibility from 'react-on-screen';
import { Link } from 'react-router-dom';
import lines from '../../dist/img/lines.png';


const Footer = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > 50);
        })
    }, [])

    return (
        <footer >
            <div class="container text-center">
                <TrackVisibility once>
                    {({ isVisible }) => isVisible && <>
                        <h2 class="animate__animated animate__fadeInDown text-uppercase">get in touch</h2>
                        <img class="animate__animated animate__fadeInLeft img-lines" src={lines} alt="lines" />
                        <p><a href="mailto:hrdelwar75@gmail.com" class="color-brand">hrdelwar75@gmail.com</a></p>
                        <p><a href="tel:+8801749269594" class="color-brand" >+8801749269594</a></p>
                    </>}
                </TrackVisibility>
                <div class="row ">
                    <div class="list-group ">
                        <ul class="icon-list list-unstyled text-capitalize">
                            <li class="nav-item ">
                                <Link class="nav-link bg-custom rounded-circle icon" target="_blank" to="//linkedin.com/in/HrDelwar/"><FontAwesomeIcon icon={faLinkedin} /></Link>
                            </li>
                            <li class="nav-item ">
                                <Link class="nav-link bg-custom rounded-circle icon facebook" target="_blank" to="//facebook.com/HrDelwar"><FontAwesomeIcon icon={faFacebookF} /></Link>
                            </li>
                            <li class="nav-item ">
                                <Link class="nav-link bg-custom rounded-circle icon" target="_blank" to="//instagram.com/HrDelwar"><FontAwesomeIcon icon={faInstagram} /></Link>
                            </li>
                            <li class="nav-item ">
                                <Link class="nav-link bg-custom rounded-circle px-1 icon" target="_blank" to="//twitter.com/HrDelwar"><FontAwesomeIcon icon={faTwitter} /></Link>
                            </li>
                            <li class="nav-item ">
                                <Link class="nav-link bg-custom rounded-circle px-1 icon" target="_blank" to="//hrdelwar.netlify.app"><FontAwesomeIcon icon={faGlobe} /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="text-center pt-2" style={{ borderTop: '1px dashed' }}>Copyright © <Link target="_blank" class="color-brand" to="//linkedin.com/in/HrDelwar/">HrDelwar</Link> {new Date().getFullYear()}. All rights reserved. </div>
            </div>
            {scroll &&

                <li class="page-scroll">
                    <a class="btn-scroll-up " href="#hero" >
                        <FontAwesomeIcon class="btn-scroll-icon-up" icon={faAngleDoubleUp} />
                    </a>
                </li>

            }
        </footer>
    );
};

export default Footer;