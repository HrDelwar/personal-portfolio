import React, {useEffect} from 'react';
import lines from '../../dist/img/lines.png';
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';
import { useState } from 'react';
import TrackVisibility from 'react-on-screen';

const Contact = () => {
    const [success, setSuccess] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data, e) => {
        console.log(data);
        emailjs.send(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, data, process.env.REACT_APP_YOUR_USER_ID)
            .then(function (response) {
                setSuccess(true)
                e.target.reset()
            }, function (error) {
                setSuccess(false)
            });
    };

    if (success) {
        setTimeout(() => {
            setSuccess(false)
        }, 5000);
    }

    useEffect(() =>{
        console.log(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID,  process.env.REACT_APP_YOUR_USER_ID)
    },[])

    return (
        <section id="contact" class="site-section section-form text-center">
            <div class="container">
                <TrackVisibility >
                    {({ isVisible }) => isVisible && <>
                        <h2 class="animate__animated animate__fadeInDown">contact me</h2>
                        <img class="animate__animated animate__fadeInLeft img-lines" src={lines} alt="lines" />
                    </>}
                </TrackVisibility>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="row">
                        <div class="col-sm-6" style={{ marginBottom: 25 }}>
                            <input type="text" {...register("name", { required: true })} name="name" class={"form-control mt-x-0 " + (errors.name ? "form-error" : "")} placeholder="Name" />
                            {errors.name && <p class="text-danger">Name is required</p>}
                        </div>
                        <div class="col-sm-6" style={{ marginBottom: 25 }}>
                            <input type="email" {...register("email",
                                {
                                    required: {
                                        value: true,
                                        message: 'You must specify a email'
                                    },
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: 'Enter correct email address'
                                    }
                                }
                            )} name="email" class={"form-control mt-x-0 " + (errors.email ? "form-error" : "")} placeholder="Email" />
                            {errors.email && <p class="text-danger">{errors.email.message}</p>}
                        </div>
                        <div class="col-sm-12" style={{ marginBottom: 25 }}>
                            <input type="text" {...register("subject",
                                {
                                    required: {
                                        value: true,
                                        message: 'You must specify a subject'
                                    }
                                }
                            )} name="subject" class={"form-control mt-x-0 " + (errors.subject ? "form-error" : "")} placeholder="Subject" />
                            {errors.subject && <p class="text-danger">{errors.subject.message}</p>}
                        </div>

                        <div class="col-sm-12">
                            <textarea name="message" {...register("message", { required: true })} id="mesaage" class={"form-control mt-x-0 " + (errors.message ? "form-error" : "")} placeholder="Message" ></textarea>
                            {errors.name && <p class="text-danger">Message is required</p>}
                        </div>
                    </div>
                    <button class="btn btn-border " type="submit" >Send Message
                        <span class="glyphicon glyphicon-send"></span>
                        
                    </button>
                </form>
                {success && <p class="color-brand" style={{ fontSize: 25, marginTop: 10 }}>Message send successfully!</p>}
            </div>
        </section>
    );
};

export default Contact;