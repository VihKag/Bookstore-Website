import React, { useState } from 'react';
import './contact.css'; // Assuming you have the styles in a file named ContactForm.css
import Header from '../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import pic1 from "../../assets/image/shape.png"
import pic2 from "../../assets/image/location.png"
import pic3 from "../../assets/image/email.png"
import pic4 from "../../assets/image/phone.png"

function ContactPage() {
    const [focused, setFocused] = useState(false);

    const handleFocus = () => {
        setFocused(true);
    };

    const handleBlur = (e) => {
        if (e.target.value === '') {
            setFocused(false);
        }
    };

    return (
       
<div>
    <Header/>

            <div className="container-contact">
                <span className="big-circle"></span>
                <img src={pic1} className="square" alt="" />
                <div className="form-contact">
                    <div className="contact-info">
                        <h3 className="title">Let's get in touch</h3>
                        <p className="text">
                            Hello, please leave a message for us when needed, so we can assist you. Thank you!!!
                        </p>

                        <div className="info">
                            <div className="information">
                                <img src={pic2} className="icon" alt="" />
                                <p>1 Vo Van Ngan,Linh Chieu, Thu Duc</p>
                            </div>
                            <div className="information">
                                <img src={pic3} className="icon" alt="" />
                                <p>thaiphuc@outlook.com</p>
                            </div>
                            <div className="information">
                                <img src={pic4} className="icon" alt="" />
                                <p>0987-654-321</p>
                            </div>
                        </div>

                        <div className="social-media">
                            <p>Connect with us :</p>
                            <div className="social-icons">
                                <a href="/#">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                                <a href="/#">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="/#">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a href="/#">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={`contact-form ${focused ? 'focus' : ''}`}>
                        <span className="circle one"></span>
                        <span className="circle two"></span>

                        <form className="contact" action="index.html" autoComplete="off">
                            <h3 className="title">Contact us</h3>
                            <div className="input-container">
                                <input
                                    type="text"
                                    name="name"
                                    className="input"
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    required
                                />
                                <label>Username</label>
                                <span>Username</span>
                            </div>
                            <div className="input-container">
                                <input
                                    type="email"
                                    name="email"
                                    className="input"
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    required

                                />
                                <label>Email</label>
                                <span>Email</span>
                            </div>
                            <div className="input-container">
                                <input
                                    type="tel"
                                    name="phone"
                                    className="input"
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    required

                                />
                                <label>Phone</label>
                                <span>Phone</span>
                            </div>
                            <div className="input-container textarea">
                                <textarea
                                    name="message"
                                    className="input"
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                                                        required

                                ></textarea>
                                <label>Message</label>
                                <span>Message</span>
                            </div>
                            <input type="submit" value="Send" className="btn" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
