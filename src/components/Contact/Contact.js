import React from 'react';
import lines from '../../dist/img/lines.png';

const Contact = () => {
    return (
        <section id="contact" class="site-section section-form text-center">
            <div class="container">

                <h3><span id="contactText"></span></h3>
                <img src={lines} class="img-lines" alt="lines" />
                <form>
                    <div class="row">
                        <div class="col-sm-6">
                            <input type="text" name="name" class="form-control mt-x-0" placeholder="Name" required />
                        </div>
                        <div class="col-sm-6">
                            <input type="email" name="email" class="form-control" placeholder="Email" required />
                        </div>
                        <div class="col-sm-12">
                            <textarea name="message" id="mesaage" class="form-control" placeholder="Message" required></textarea>
                        </div>
                    </div>
                    <button href="#" class="btn btn-border custom-tooltip" type="submit" >Hire Me
                        <span class="glyphicon glyphicon-send"></span>
                        <span class="custom-tooltip-item">I'm ready to do your project</span>
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;