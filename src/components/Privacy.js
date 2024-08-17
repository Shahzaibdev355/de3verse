import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope, faLocation, faBasketball } from "@fortawesome/free-solid-svg-icons";
// import { fab } from '@fortawesome/free-brands-svg-icons'

const Privacy = () => {
    return (
        <>
            <section className="privacy-bg">
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
                            {/* <li><Link to="#">Privacy Policy</Link></li> */}
                            <li><Link to="#">T&amp;C</Link></li>
                            <li><Link to="/faq">Faqs</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li className="btn-1"><Link className="btn-1-a" to="#">Connect Wallet</Link></li>
                        </ul>
                        <img className="logo" src="./images/de3Verse.png" alt />
                    </div>
                </nav>
                <div className="privacy-row1">
                    <div className="privacy-row1-img1">
                        <img className="privacy-img1" src="./images/aboutus/bg.png" alt />
                    </div>
                    
                    <div className="privacy-row2">
                        <div className="privacy-row1-div">
                            <h2 className="privacy-heading">Privacy Policy</h2>

                            <div className="privacy-column1">
                                <h4 className="privacy-h4">1. Information Collection</h4>
                                <Link className="privacy-link" data-bs-toggle="collapse" to="#collapse1" >Read More</Link>
                                <div class="collapse" id="collapse1">
                                    <div class="privacy-collapse-div">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem corrupti deserunt 
                                        autem cumque a culpa quam temporibus, necessitatibus beatae, eligendi excepturi error 
                                        alias totam dicta sed laboriosam dolor doloremque nam quia reiciendis facere quod tenetur
                                        mollitia. Animi quas facere incidunt provident cum cumque distinctio tempore, quo nemo
                                        est quae veritatis?
                                    </div>
                                </div>
                            </div>

                            <div className="privacy-column1">
                                <h4 className="privacy-h4">2.Cookies and web becone</h4>
                                <Link className="privacy-link" data-bs-toggle="collapse" to="#collapse2">Read More</Link>
                                <div class="collapse" id="collapse2">
                                    <div class="privacy-collapse-div">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem corrupti deserunt 
                                        autem cumque a culpa quam temporibus, necessitatibus beatae, eligendi excepturi error 
                                        alias totam dicta sed laboriosam dolor doloremque nam quia reiciendis facere quod tenetur
                                        mollitia. Animi quas facere incidunt provident cum cumque distinctio tempore, quo nemo
                                        est quae veritatis?
                                    </div>
                                </div>
                            </div>

                            <div className="privacy-column3">
                                <h4 className="privacy-h4">3.Information use</h4>
                                <Link className="privacy-link" data-bs-toggle="collapse" to="#collapse3">Read More</Link>
                                <div class="collapse" id="collapse3">
                                    <div class="privacy-collapse-div">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem corrupti deserunt 
                                        autem cumque a culpa quam temporibus, necessitatibus beatae, eligendi excepturi error 
                                        alias totam dicta sed laboriosam dolor doloremque nam quia reiciendis facere quod tenetur
                                        mollitia. Animi quas facere incidunt provident cum cumque distinctio tempore, quo nemo
                                        est quae veritatis?
                                    </div>
                                </div>
                            </div>

                            <div className="privacy-column4">
                                <h4 className="privacy-h4">4.Access to information</h4>
                                <Link className="privacy-link" data-bs-toggle="collapse" to="#collapse4">Read More</Link>
                                <div class="collapse" id="collapse4">
                                    <div class="privacy-collapse-div">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem corrupti deserunt 
                                        autem cumque a culpa quam temporibus, necessitatibus beatae, eligendi excepturi error 
                                        alias totam dicta sed laboriosam dolor doloremque nam quia reiciendis facere quod tenetur
                                        mollitia. Animi quas facere incidunt provident cum cumque distinctio tempore, quo nemo
                                        est quae veritatis?
                                    </div>
                                </div>
                            </div>

                            <div className="privacy-column5">
                                <h4 className="privacy-h4">5.Information Security</h4>
                                <Link className="privacy-link" data-bs-toggle="collapse" to="#collapse5">Read More</Link>
                                <div class="collapse" id="collapse5">
                                    <div class="privacy-collapse-div">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem corrupti deserunt 
                                        autem cumque a culpa quam temporibus, necessitatibus beatae, eligendi excepturi error 
                                        alias totam dicta sed laboriosam dolor doloremque nam quia reiciendis facere quod tenetur
                                        mollitia. Animi quas facere incidunt provident cum cumque distinctio tempore, quo nemo
                                        est quae veritatis?
                                    </div>
                                </div>
                            </div>

                            <div className="privacy-column6">
                                <h4 className="privacy-h4">6.Disclamiar</h4>
                                <Link className="privacy-link" data-bs-toggle="collapse" to="#collapse6">Read More</Link>
                                <div class="collapse" id="collapse6">
                                    <div class="privacy-collapse-div">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem corrupti deserunt 
                                        autem cumque a culpa quam temporibus, necessitatibus beatae, eligendi excepturi error 
                                        alias totam dicta sed laboriosam dolor doloremque nam quia reiciendis facere quod tenetur
                                        mollitia. Animi quas facere incidunt provident cum cumque distinctio tempore, quo nemo
                                        est quae veritatis?
                                    </div>
                                </div>
                            </div>

                            <div className="privacy-column7">
                                <h4 className="privacy-h4">7.Visitor’s Question</h4>
                                <Link className="privacy-link" data-bs-toggle="collapse" to="#collapse7">Read More</Link>
                                <div class="collapse" id="collapse7">
                                    <div class="privacy-collapse-div">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem corrupti deserunt 
                                        autem cumque a culpa quam temporibus, necessitatibus beatae, eligendi excepturi error 
                                        alias totam dicta sed laboriosam dolor doloremque nam quia reiciendis facere quod tenetur
                                        mollitia. Animi quas facere incidunt provident cum cumque distinctio tempore, quo nemo
                                        est quae veritatis?
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="privacy-row1-img2">
                        <img className="privacy-img2" src="./images/aboutus/bg-2.png" alt />
                    </div>
                </div>
                <footer>
                    <div className="flex-row12 privacy-footer">
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
                                <Link to="#"><FontAwesomeIcon icon={faBasketball} className="column9-icon"/></Link>
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

export default Privacy;