import React from 'react';
import TrackVisibility from 'react-on-screen';
import lines from '../../dist/img/lines.png'
const Skills = () => {
    return (
        <section class="site-section section-skills">
            <div class="container">
                <div class="text-center">
                    <TrackVisibility once> 
                        {({ isVisible }) => isVisible && <>
                            <h2 class="animate__animated animate__fadeInRightBig">skills</h2>
                            <img class="animate__animated animate__fadeInLeftBig img-lines" src={lines} alt="lines" />
                        </>}
                    </TrackVisibility>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="skill">
                            <h4>Html</h4>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" data-transitiongoal="94">94%</div>
                            </div>
                        </div>
                        <div class="skill">
                            <h4>CSS</h4>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" data-transitiongoal="92">92%</div>
                            </div>
                        </div>
                        <div class="skill">
                            <h4>Bootstrap-4&5</h4>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" data-transitiongoal="90">90%</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="skill">
                            <h4>Javascript</h4>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" data-transitiongoal="82">85%</div>
                            </div>
                        </div>
                        <div class="skill">
                            <h4>React</h4>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" data-transitiongoal="74">78%</div>
                            </div>
                        </div>
                        <div class="skill">
                            <h4>php</h4>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" data-transitiongoal="52">52%</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="skill">
                            <h4>Express.js</h4>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" data-transitiongoal="60">60%</div>
                            </div>
                        </div>
                        <div class="skill">
                            <h4>Node.js</h4>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" data-transitiongoal="52">52%</div>
                            </div>
                        </div>
                        <div class="skill">
                            <h4>MongoDB</h4>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" data-transitiongoal="65">65%</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Skills;