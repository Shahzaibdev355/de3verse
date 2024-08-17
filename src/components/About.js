import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope, faLocation, faBasketball } from "@fortawesome/free-solid-svg-icons";
// import { fab } from '@fortawesome/free-brands-svg-icons'

const About = () => {
    return (
        <>
            <section className="bg-aboutus">
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
                            {/* <li><Link to="#">About Us</Link></li> */}
                            <li className="btn-1"><Link className="btn-1-a" to="#">Connect Wallet</Link></li>
                        </ul>
                        <img className="logo" src="./images/de3Verse.png" alt />
                    </div>
                </nav>
                <div className="about-row1-bg">
                    <img className="about-row1-img" src="./images/aboutus/bg.png" alt />
                    <div className="about-column-1">
                        <h2 className="about-heading1">About Us</h2>
                        <p className="about-para1">
                            <span className="about-span1">de3Verse</span> the future of the virtual world <br /> The first fully decentralized world, Decentraland is
                            controlled via the DAO, which owns the most important smart contracts and assets of de3Verse. Via the DAO,
                            you decide and vote on how the world works.
                        </p>
                        <Link className="about-link1" to="#">Read More</Link>
                    </div>
                </div>
                <div className="about-row2-bg">
                    <div className="row2-img-div">
                        <img className="about-row2-img" src="./images/aboutus/bg-2.png" alt />
                    </div>
                    <div className="about-column-2">
                        <h2 className="about-heading2">Meet Our Team</h2>
                        <div className="about-row3">
                            <div className="about-column3">
                                <img className="about-column3-img" src="./images/aboutus/img-1.png" alt />
                                <p className="about-column3-para">Giam Lee</p>
                                <Link className="about-column3-link" to="#">View Details</Link>
                            </div>
                            <div className="about-column3">
                                <img className="about-column3-img" src="./images/aboutus/img-2.png" alt />
                                <p className="about-column3-para">Alameda</p>
                                <Link className="about-column3-link" to="#">View Details</Link>
                            </div>
                            <div className="about-column3">
                                <img className="about-column3-img" src="./images/aboutus/img-3.png" alt />
                                <p className="about-column3-para">Loura Chin</p>
                                <Link className="about-column3-link" to="#">View Details</Link>
                            </div>
                            <div className="about-column3">
                                <img className="about-column3-img" src="./images/aboutus/img-4.png" alt />
                                <p className="about-column3-para">Kelvin Glan</p>
                                <Link className="about-column3-link" to="#">View Details</Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-row4">
                    <Link to="#"><img className="about-row4-icon" src="./images/aboutus/Discord - Negative.png" alt /></Link>
                    <Link to="#"><img className="about-row4-icon" src="./images/aboutus/Twitter - Negative.png" alt /></Link>
                    <Link to="#"> <img className="about-row4-icon" src="./images/aboutus/Vector.png" alt /></Link>
                </div>
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

export default About;