import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope, faLocation, faBasketball } from "@fortawesome/free-solid-svg-icons";
// import { fab } from '@fortawesome/free-brands-svg-icons'

const Signup = () => {
    return (
        <>
            <section className="bg-contact">
                <nav className="navbar">
                    <div className="navbar-container container">
                        <input type="checkbox" name id />
                        <div className="hamburger-lines">
                            <span className="line line1" />
                            <span className="line line2" />
                            <span className="line line3" />
                        </div>
                        <ul className="menu-items">
                            <li><Link to="#">Explore</Link></li>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                            <li><Link to="#">T&amp;C</Link></li>
                            <li><Link to="/faq">Faqs</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li className="btn-1"><Link className="btn-1-a" to="#">Connect Wallet</Link></li>
                        </ul>
                        <img className="logo" src="./images/de3Verse.png" alt />
                    </div>
                </nav>
                <form className="contact-form" action>
                    <div className="contact-column1">
                        <h2 className="contact-heading">Have questions? Let’s get in touch.</h2>
                        <div className="contact-row1">
                            <input className="contact-input1" type="text" placeholder="Name" />
                            <input style={{ marginRight: '0px!important' }} className="contact-input1" type="text" placeholder="Email Address" />
                        </div>
                        <div className="contact-row1">
                            <select name id className="contact-select">
                                <option className="select-option" value>Interested in</option>
                                <option value>Example</option>
                                <option value>Example</option>
                            </select>
                            <input style={{ marginRight: '0px!important' }} className="contact-input1" type="text" placeholder="Phone Number" />
                        </div>
                    </div>
                    <div className="contact-row1">
                        <textarea className="text-message" name id placeholder="Message" defaultValue={""} />
                    </div>
                    <div className="form-btn-div">
                        <button className="contact-form-btn" type="submit">Submit</button>
                    </div>
                </form>
                <footer>
                    <div className="flex-row12">
                        <div className="flex-column8">
                            <div>
                                <img className="column8-img1" src="./images/Union.png" alt />
                                <img className="column8-img2" src="./images/de3Verse.png" alt />
                            </div>
                            <p className="column8-para">
                                WE will launched our first collection 2022.The fund raised from <span className="br"><br /></span>
                                the full mint will be used towards fullfilling our roadmap offering.
                            </p>
                            <div className="flex-row13">
                                <FontAwesomeIcon icon={faPhoneAlt} className="row13-icon"  flip="horizontal" />
                                <div className="row13-column">
                                    <strong className="row13-strong">Phone:</strong>
                                    <p className="row13-para">00000000000</p>
                                </div>
                            </div>
                            <div className="flex-row13">
                                <FontAwesomeIcon icon={faEnvelope} className="row13-icon"  flip="horizontal" />
                                <div className="row13-column">
                                    <strong className="row13-strong">Mail</strong>
                                    <p className="row13-para">test@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex-row13">
                                <FontAwesomeIcon icon={faLocation} className="row13-icon"  flip="horizontal" />
                                <div className="row13-column">
                                    <strong className="row13-strong">Address</strong>
                                    <p className="row13-para">I don't Know</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-column9">
                            <strong className="footer-heading">About Us</strong>
                            <Link to="/aboutus" className="column9-link">About Us</Link>
                            <Link to="#" className="column9-link">Blogs</Link>
                            <Link to="#" className="column9-link">Careers</Link>
                            <Link to="#" className="column9-link">In Press</Link>
                            <Link to="#" className="column9-link">Gallery</Link>
                            <div className="column9-row">
                                <Link to="#"><i className="fa fa-facebook column9-icon" /></Link>
                                <Link to="#"><i className="fa fa-linkedin column9-icon" /></Link>
                                <Link to="#"><FontAwesomeIcon icon={faBasketball} className="column9-icon" /></Link>
                            </div>
                        </div>
                        <div className="flex-column10">
                            <strong className="footer-heading">T&amp;C</strong>
                            <Link to="/contactus" className="column10-link">Contact Us</Link>
                            <Link to="#" className="column10-link">Online Chats</Link>
                            <Link to="#" className="column10-link">Whatsapp</Link>
                            <Link to="#" className="column10-link">Telegram</Link>
                            <Link to="#" className="column10-link">Ticketing</Link>
                            <Link to="#" className="column10-link">Call Center</Link>
                        </div>
                        <div className="flex-column11">
                            <strong className="footer-heading">FAQs</strong>
                            <Link to="/signin" className="column11-link">Account</Link>
                            <Link to="#" className="column11-link">Manage Deliveries</Link>
                            <Link to="#" className="column11-link">Orders</Link>
                            <Link to="#" className="column11-link">Payments</Link>
                            <Link to="#" className="column11-link">Returns</Link>
                            <Link to="/privacy" className="column11-link">Privacy Policy</Link>
                        </div>
                    </div>
                </footer>
            </section>

        </>
    );
}

export default Signup;