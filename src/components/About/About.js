import React from 'react';
import lines from '../../dist/img/lines.png'
const About = () => {
    return (
        <section id="about" class="site-section section-about text-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-md-offset-3">
                        <h2><span id="aboutMeText"></span></h2>
                        <img src={lines} class="img-lines" alt="lines" />
                        <p class="text-justify">Hello! I am Habibur Rahman Delwar, a MERN stack developer, Jr. Web Developer or a JavaScript enthusiast. And I have good knowledge building web applications with React.js for client-side, Node.js / express.js for server-side, and MongoDB for database. I am currently available for a job or freelancing work. If your company needs a React developer, junior web developer, or MERN stack developer or you have a project that you want to get started or think you need my help with something, then get in touch.</p>
                        <a href="../../dist/resume/mine-resume.pdf" class=" btn btn-fill" download>Download my cv </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;