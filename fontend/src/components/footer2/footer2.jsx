import React from "react";
import "./footer2.css"
import fb from './fb.png'
import twitter from './twitter.png'
import linkedin from './linkedin.png'
import insta from './insta.png'

const Footer2 = () => {
    return (
        <div className="footer2">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">

                    <div className="sb_footer-links-div">
                        <h4>For business</h4>
                        <a className="a-footer" href="/employer">
                            <p>
                                Employee
                            </p>
                        </a>
                        <a className="a-footer" href="/healthplan">
                            <p>
                                Health Plan
                            </p>
                        </a><a className="a-footer" href="/individual">
                            <p>
                                Individual
                            </p>
                        </a>
                    </div>
                    <div className="sb_footer-links-div">
                        <h4>Resources</h4>
                        <a className="a-footer" href="/resource">
                            <p>
                                Resource center
                            </p>
                        </a>
                        <a className="a-footer" href="/resource">
                            <p>
                                Testimonials
                            </p>
                        </a><a className="a-footer" href="/resource">
                            <p>
                                STV
                            </p>
                        </a>
                    </div>
                    <div className="sb_footer-links-div">
                        <h4>Partners</h4>
                        <a className="a-footer" href="/employer">
                            <p>Swing Tech</p>
                        </a>
                    </div>
                    <div className="sb_footer-links-div">
                        <h4>Company</h4>
                        <a className="a-footer" href="/about">
                            <p>About</p>
                        </a>
                        <a className="a-footer" href="/press">
                            <p>Press</p>
                        </a>
                        <a className="a-footer" href="/career">
                            <p>Career</p>
                        </a>
                        <a className="a-footer" href="/contact">
                            <p>Contact</p>
                        </a>
                    </div>
                    <div className="sb_footer-links-div">
                        <h4>Coming soon on </h4>
                        <div className="socialmedia">
                            <p><img src={fb} alt="" /></p>
                            <p><img src={twitter} alt="" /></p>
                            <p><img src={linkedin} alt="" /></p>
                            <p><img src={insta} alt="" /></p>
                        </div>
                    </div>
                </div>
                <hr className="hr-footer"></hr>
                <div className="sb_footer-below">
                    <div className="sb_footer-copyright">
                        <p>
                            @{new Date().getFullYear()} CodeInn. All rights reserved.
                        </p>
                    </div>
                    <div className="sb_footer-below-links">
                        <a className="a-footer" href="/terms">
                            <div>
                                <p>
                                    Terms & Conditions
                                </p>
                            </div>
                        </a>
                        <a className="a-footer" href="/privacy">
                            <div>
                                <p>
                                   Privacy
                                </p>
                            </div>
                        </a><a className="a-footer" href="/security">
                            <div>
                                <p>
                                    Security
                                </p>
                            </div>
                        </a><a className="a-footer" href="/cookie">
                            <div>
                                <p>
                                    Cookie Declaration
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer2;