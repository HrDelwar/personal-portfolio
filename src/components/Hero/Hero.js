import React from 'react';
import Typed from 'react-typed';
import TrackVisibility from 'react-on-screen';

const Hero = () => {

    return (
        <div id="hero" class="hero ">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 ">
                        <TrackVisibility>
                            {({ isVisible }) => isVisible && <div class="animate__animated animate__fadeInLeft">
                                <h1 class="">Hr Delwar</h1>
                                <div class="page-scroll">
                                    <p class="job-title">
                                        <Typed
                                            strings={['React Developer', 'Responsive Web Designer', 'MERN Stack Developer']}
                                            typeSpeed={80}
                                            backSpeed={80}
                                            startDelay={1000}
                                            backDelay={2000}
                                            loop
                                        />
                                    </p>
                                    <a href="https://drive.google.com/file/d/1LkBzrqWz6c9x4NNTXzgn6p7OwONWzpoK/view" target="_blank" rel="noreferrer" class="custom-tooltip btn btn-fill mr-1 " >Get Resume
                                     </a>
                                    <div class="clearfix visible-xxs"></div>
                                    <a href="#portfolio" class="custom-tooltip btn btn-border" >Explore more
                                     </a>
                                </div>
                            </div>}
                        </TrackVisibility>
                    </div>
                    <div class="col-md-6 text-right ">
                        <TrackVisibility>
                            {
                                ({ isVisible }) => isVisible &&
                                    <img src="https://i.ibb.co/THZZ8T1/hr-delwarpng.png" class="animate__animated animate__fadeInRight" alt="Hr Delwar" />
                            }
                        </TrackVisibility>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;