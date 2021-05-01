import React from 'react';
import hero from '../../dist/img/hr.delwarpng.png';

const Hero = () => {
    return (
        <div id="hero" class="hero ">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h1>Hr Delwar</h1>
                        <div class="page-scroll">
                            <p class="job-title"><span id="heroText"></span></p>
                            <a href="../../dist/resume/mine-resume.pdf" class="custom-tooltip btn btn-fill mr-1 " download >Get Resume
                        </a>
                            <div class="clearfix visible-xxs"></div>
                            <a href="#portfolio" class="custom-tooltip btn btn-border" >Explore more
                        </a>
                        </div>
                    </div>

                    <div class="col-md-6 text-right">
                        <img src={hero} alt="alex-vidal" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;