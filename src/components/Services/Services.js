import React from 'react';
import lines from '../../dist/img/lines.png'
import forntEnd from '../../dist/img/front-end.png';
import template from '../../dist/img/back-end.png';
import backend from '../../dist/img/consultancy.png';
import TrackVisibility from 'react-on-screen';

const services = [
    {
        name: 'Front-end',
        img: forntEnd,
        description: "As well as making responsive front-end development with popular javascript frameworks such as React.js, familiar with Vue.js, HTML5, CSS3, Bootstrap4&5, MaterialUI and techniques working with jQuery."
    },
    {
        name: 'Back-end',
        img: backend,
        description: "Utilising node.js, express.js, mongoDB, firebase, heroku, including REST APIs, and more. Building e-services, e-commerce, e-learning and more website and web applications."
    },
    {
        name: 'Template',
        img: template,
        description: "As well as making responsive web template with HTML5, CSS3, Bootstrap4&5, Tailwind-CSS and jQuery."
    },
];

const Services = () => {
    return (
        <section id="service" class="site-section section-services overlay text-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <TrackVisibility once>
                            {({ isVisible }) => isVisible && <>
                                <h2 class="animate__animated animate__fadeInRightBig">what can i do</h2>
                                <img class="animate__animated animate__fadeInLeftBig img-lines" src={lines} alt="lines" />
                            </>}
                        </TrackVisibility>
                    </div>
                    {
                        services.map(service =>
                            <div class="col-sm-6 col-md-4" key={service.name}>
                                <div class="service">
                                    <img src={service.img} alt={service.name} />
                                    <h4>{service.name}</h4>
                                    <p class="text-justify">{service.description}</p>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;