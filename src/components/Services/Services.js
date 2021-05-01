import React from 'react';
import lines from '../../dist/img/lines.png'
import forntEnd from '../../dist/img/front-end.png';
import backEnd from '../../dist/img/back-end.png';
import consultancy from '../../dist/img/consultancy.png';

const services = [
    {
        name: 'Front-end',
        img: forntEnd,
        description: "As a MERN Stack Developer, I have experience in HTML5, CSS3, Bootstrap, MaterialUI and techniques working with jQuery or more popular javascript frameworks such as React.js, Vue.js"
    },
    {
        name: 'Back-end',
        img: backEnd,
        description: "Utilising node.js, express.js, mongoDB, firebase, heroku, including REST APIs, and more. Building e-services, e-commerce, e-learning and more website and web applications."
    },
    {
        name: 'Consultancy',
        img: consultancy,
        description: "As well as providing development services, I can also help you decide strategic roadmaps via consultancy services."
    },
];

const Services = () => {
    return (
        <section id="service" class="site-section section-services overlay text-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h3><span id="serviceText"></span> </h3>
                        <img src={lines} class="img-lines" alt="lines" />
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