import React from 'react';

const Counters = () => {
    return (
        <section class="site-section section-counters text-center">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4 col-xs-12">
                        <p class="counter start" data-to="01" data-speed="2000">0</p>
                        <h4>Years Experience</h4>
                    </div>
                    <div class="col-sm-4 col-xs-12">
                        <p class="counter start" data-to="20" data-speed="2000">0</p>
                        <span class="counter-plus">+</span>
                        <h4>Completed Projects</h4>
                    </div>
                    <div class="col-sm-4 col-xs-12">
                        <p class="counter start" data-to="360" data-speed="2000">0</p>
                        <span class="counter-plus">+</span>
                        <h4>GitHub Contributions in the last year</h4>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Counters;