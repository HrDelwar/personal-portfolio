import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faCode, faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import TrackVisibility from 'react-on-screen';
import lines from '../../dist/img/lines.png';

export const projects = [
    {
        name: 'Painting Art - Online Art Service',
        img: "https://i.ibb.co/k6jXbh7/Portfolio-1.png",
        liveSite: "https://hr-painting-art.netlify.app/",
        implementsBy: "React, React-router, React-hook-form, Visa card payment, Node.js, Express.js, Firebase, Bootstrap, MaterialUI, MongoDB",
        codeLinkClient: "https://github.com/HrDelwar/painting-art-client",
        codeLinkServer: " https://github.com/HrDelwar/painting-art-server",
        description: ["● Rules for user and admin with firebase login and MongoDB database.",
            "● Users can book services, add review with star ratting,pay with a visa card.",
            "● Admin can manage admin, manage service, manage book, set user rule."]
    },
    {
        name: 'Retro Blog - Blog Site',
        img: "https://i.ibb.co/q90hBmy/Portfolio-8.png",
        liveSite: "https://hr-retro-blog.netlify.app/",
        implementsBy: "React,  React-router, React-animated-slider, Node.js, Express.js, TTailwind CSS, MongoDB, heroku",
        codeLinkClient: "https://github.com/HrDelwar/retro-blog-client",
        codeLinkServer: "https://github.com/hrdelwar/retro-blog-server",
        description: ["● register email and password.",
        "● login email and password", "● admin can add a blok post", "● admin can delete a block post","● admin can see all users","● user can reed all blogs","● user can contact admin",]
    },
    {
        name: 'Ema Jhon - Ecommerce shop',
        img: "https://i.ibb.co/XjMZvyp/Portfolio-2.png",
        liveSite: "https://hrdelwar-ema-john-simple.netlify.app/",
        implementsBy: "React, React-router, React-hook-form, Visa card payment, Node.js, Express.js",
        codeLinkClient: "https://github.com/HrDelwar/ema-john-simple",
        codeLinkServer: "https://github.com/HrDelwar/ema-johnn-simple-sever",
        description: ["● Users can add multiple orders, review orders, remove orders and place order pay with a visa card.",
            "● Implements firebase login with google, GitHub, Facebook, and Gmail-password.",
            "● Orders data store in local storage and place order data store in MongoDB database."]
    },
    {
        name: 'Dream Destination - Journey booking',
        img: "https://i.ibb.co/fXmGtw0/Portfolio-3.png",
        liveSite: "https://hr-dream-destination.netlify.app/",
        implementsBy: "React, React-router, React-hook-form, react-google-map, Node.js, Express.js, Firebase, MaterialUI, MongoDB",
        codeLinkClient: "https://github.com/HrDelwar/dream-destination",
        codeLinkServer: "",
        description: ["● Implements firebase google, GitHub, and Gmail-password authentication.",
            "● Users can set destination search by google map, and book a journey.",
            "● Users can journey with deferent way like bus, train, bike, etc."
        ]
    },
    {
        name: 'Burj Al Arab - Hotel Booking ',
        img: "https://i.ibb.co/9rVBcTG/Portfolio-4.png",
        liveSite: "https://hr-hotel-burj-al-arab.netlify.app/",
        implementsBy: "React, React-router, React-hook-form, Node.js, Express.js, Firebase, MaterialUI, MongoDB",
        codeLinkClient: "https://github.com/HrDelwar/hotel-burj-al-arab",
        codeLinkServer: "https://github.com/HrDelwar/hotel-burj-al-arab-server",
        description: ["● Users can log-in to firebase google authentication.",
            "● Users can book a single, double, or couple room with choose day and.",
            "● Users can see own booking list and cancel bookings.",
            "● Implements CURD operation with MongoDB database and express.js."
        ]
    },
    {
        name: 'Volunteer Network - Event',
        img: "https://i.ibb.co/6ySRFnP/Portfolio-5.png",
        liveSite: "https://hr-volunteer-network.netlify.app/",
        implementsBy: "React, React-router, React-hook-form, Node.js, Express.js, MaterialUI, MongoDB",
        codeLinkClient: "https://github.com/HrDelwar/volunteer-network-client",
        codeLinkServer: "https://github.com/HrDelwar/volunteer-network-sever",
        description: ["● Users can set events, make events, and delete events.",
            "● mplements create and delete operation with MongoDB database and express.js."
        ]
    },
    {
        name: 'Global Library - Online Book library',
        img: "https://i.ibb.co/3Y7Ngqh/Portfolio-6.png",
        liveSite: "https://hr-global-library.netlify.app/",
        implementsBy: "React, React-router, React-hook-form, Node.js, Express.js, Firebase, MaterialUI, MongoDB",
        codeLinkClient: "https://github.com/HrDelwar/global-library-client",
        codeLinkServer: "https://github.com/HrDelwar/global-library-server",
        description: ["● Implements firebase google, GitHub, and Gmail-password authentication.",
            "● Implements CURD operation with MongoDB database and express.js.",]
    },
    {
        name: 'Hr-bliss-shop - Ecommerce shop',
        img: "https://i.ibb.co/7QyZYK5/Portfolio-7.png",
        liveSite: "https://hr-bliss-shop.netlify.app/",
        implementsBy: "React, Redux, React-router, React-animated-slider, Node.js, Express.js, React Bootstrap, MongoDB",
        codeLinkClient: "https://github.com/HrDelwar/bliss-shop",
        codeLinkServer: "",
        description: []
    },
   
]
const Portfolio = () => {
    return (
        <section id="portfolio" class="site-section section-portfolio">
            <div class="container">
                <div class="text-center">
                    <TrackVisibility once>
                        {({ isVisible }) => isVisible && <>
                            <h2 class="animate__animated animate__fadeInDown">my recent project</h2>
                            <img class="animate__animated animate__fadeInLeft img-lines" src={lines} alt="lines" />
                        </>}
                    </TrackVisibility>
                </div>
                <div class="row">
                    {
                        projects.map((project, index) => (
                            <div class="col-lg-4 col-md-6 col-sm-6 mb-1" key={project.liveSite}>
                                <div class="portfolio-item">
                                    <img src={project.img} class="img-res" alt={project.name} />
                                    <div class="portfolio-item-info">
                                        <h4>{project.name}</h4>
                                        <p>{project.implementsBy}</p>
                                        <a href="/#" class="custom-tooltip mr-1" data-toggle="modal" data-target={"#portfolioItem" + (index + 1)}>
                                            <FontAwesomeIcon style={{ fontSize: 16 }} icon={faEye} />
                                            <span class="custom-tooltip-item custom-width">Details</span>
                                        </a>
                                        <a href={project.liveSite} class="custom-tooltip mr-1" target="_blank" rel="noreferrer">
                                            <FontAwesomeIcon style={{ fontSize: 16 }} icon={faLink} />
                                            <span class="custom-tooltip-item custom-width">live page</span>
                                        </a>
                                        <a href={project.codeLinkClient} target="_blank" rel="noreferrer" class="custom-tooltip mr-1">
                                            <FontAwesomeIcon icon={faCode} style={{ fontSize: 16 }} />
                                            <span class="custom-tooltip-item custom-width">client code</span>
                                        </a>
                                        {project.codeLinkServer && <a href={project.codeLinkServer} target="_blank" rel="noreferrer" class="custom-tooltip mr-1">
                                            <FontAwesomeIcon style={{ fontSize: 16 }} icon={faCode} />
                                            <span class="custom-tooltip-item custom-width">server code</span>
                                        </a>}
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    );
};

export default Portfolio;