import React from 'react';
import TrackVisibility from 'react-on-screen';
import lines from '../../dist/img/lines.png'
const About = () => {
    return (
        <section id="about" class="site-section section-about text-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-md-offset-3">
                        <TrackVisibility >
                            {({ isVisible }) => isVisible && <>
                                <h2 class="animate__animated animate__fadeInDown">about me</h2>
                                <img class="animate__animated animate__fadeInLeft img-lines" src={lines} alt="lines" />
                            </>}
                        </TrackVisibility>
                        <p class="text-justify">Hello! I am Habibur Rahman Delwar, a MERN stack developer, Jr. Web Developer or a JavaScript enthusiast. And I have good knowledge building web applications with React.js for client-side, Node.js / express.js for server-side, and MongoDB for database. I am currently available for a job. If your company needs a React developer, junior web developer, or MERN stack developer,then get in touch.</p>
                        <TrackVisibility>
                        {
                            ({isVisible}) => isVisible && <a href="https://docs.google.com/document/d/18H9uIXujPX1tCdOrnF1brICsHU_C7Oqk/export?format=pdf" class="animate__animated animate__fadeInRight btn btn-fill" download>Download my cv </a>
                        }
                        </TrackVisibility>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;