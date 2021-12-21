import React, {useState} from 'react';
import Typed from 'react-typed';
import TrackVisibility from 'react-on-screen';

const Hero = () => {
    const [loaded, setLoaded] = useState(false)

    const boxStyle = {
        display: loaded ? 'block' :''
    }

    setTimeout(() => {
        setLoaded(true)
    },4000)
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

                    <div className="col-md-6">
                        <TrackVisibility>
                            {
                                ({isVisible}) => isVisible &&

                                    <div id="hero-box" style={boxStyle}>
                                        <div id="hero-logo-wrapper" className={"hero-section  no-shadow " + (loaded ? ' load-image' : '')}><img
                                            onLoad={() => setLoaded(true)}
                                            id="hero-logo"
                                            src="https://i.ibb.co/THZZ8T1/hr-delwarpng.png"/></div>
                                        <div className="balloon">
                                            <div><span>JavaScript</span></div>
                                            <div><span>Node js</span></div>
                                            <div><span>React js</span></div>
                                            <div><span>HTML5</span></div>
                                            <div><span>PHP</span></div>
                                            <div><span>Vue js</span></div>
                                            <div><span>CSS3</span></div>
                                            <div><span>Firebase</span></div>
                                            <div><span>Wordpress</span></div>
                                            <div><span>Laravel</span></div>
                                            <div><span>SQL</span></div>
                                            <div><span>NoSQL</span></div>
                                            <div><span>Tailwind css</span></div>
                                            <div><span>Material UI</span></div>
                                        </div>
                                    </div>
                            }
                        </TrackVisibility>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Hero;