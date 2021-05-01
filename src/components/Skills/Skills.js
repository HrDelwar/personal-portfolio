import React from 'react';
import lines from '../../dist/img/lines.png'
const Skills = () => {
    return (
        <section class="site-section section-skills">
            <div class="container">
                <div class="text-center">
    
                    <h3><span id="skillsText"></span></h3>
                    <img src={lines} class="img-lines" alt="lines" />
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="skill">
                            <h4>Html/css</h4>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" data-transitiongoal="100">100%</div>
                            </div>
                        </div>
                        <div class="skill">
                            <h4>Python</h4>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" data-transitiongoal="75">75%</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="skill">
                            <h4>Javascript</h4>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" data-transitiongoal="82">82%</div>
                            </div>
                        </div>
                        <div class="skill">
                            <h4>Ruby</h4>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" data-transitiongoal="66">66%</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="skill">
                            <h4>Php</h4>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" data-transitiongoal="97">97%</div>
                            </div>
                        </div>
                        <div class="skill">
                            <h4>Java</h4>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" data-transitiongoal="45">45%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;