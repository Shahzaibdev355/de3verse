import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope, faLocation, faBasketball } from "@fortawesome/free-solid-svg-icons";
// import { fab } from '@fortawesome/free-brands-svg-icons'

const Faq = () => {
    return (
        <>
            <section className="faq-bg">
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
                            {/* <li><Link to="#">Faqs</Link></li> */}
                            <li><Link to="/about">About Us</Link></li>
                            <li className="btn-1"><Link className="btn-1-a" to="#">Connect Wallet</Link></li>
                        </ul>
                        <img className="logo" src="./images/de3Verse.png" alt />
                    </div>
                </nav>
                <div className="faq-row1">
                    <div className="faq-row1-img1">
                        <img className="faq-img1" src="./images/aboutus/bg.png" alt />
                    </div>
                    
                    <div className="faq-row2">
                        <div className="faq-row1-para-div">
                            <h2 className="faq-heading">Faqs</h2>
                            <p className="faq-row1-para">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit lorem feugiat egestas in. Eros, sed egestas facilisis mi.
                                Nascetur vulputate id eget quam. Integer tincidunt accumsan scelerisque amet lacus. Id sapien euismod feugiat auctor
                                massa enim tincidunt. Amet diam cras diam aliquet. In aliquam ultrices viverra nunc. Felis pharetra, est vitae vivamus
                                bibendum scelerisque phasellus vel malesuada. Malesuada dignissim at arcu sollicitudin. Imperdiet pellentesque sed at
                                venenatis purus hendrerit varius. Morbi volutpat sed at nibh. Nisi adipiscing id tempus, in. Fames lectus ullamcorper
                                congue nulla ut malesuada. Aliquet a phasellus sollicitudin sem diam.
                                <br />
                                <br />
                                Nisl, urna, sit id id sed potenti mauris enim, massa. Amet ipsum pretium diam varius orci neque. Ullamcorper quis
                                ultricies nibh nisi nunc. Nibh mauris amet dui placerat. Proin adipiscing fusce ligula diam felis sociis maecenas ante
                                eget. Gravida tellus, at tellus lacus molestie eget. Malesuada urna pharetra potenti purus. A amet nibh mollis ornare
                                proin arcu sed dignissim. Erat sit congue elit a vitae felis, hendrerit suspendisse. Sollicitudin lectus turpis donec
                                sit sit rhoncus, nunc pellentesque in. Nullam senectus sed vivamus penatibus odio massa semper volutpat adipiscing. Sit
                                at in ipsum tristique duis. Libero, ac, et porta ut.
                                <br />
                                <br />
                                Vulputate luctus est sem ut aliquam phasellus aliquet scelerisque pulvinar. At elementum, fusce sed vitae in dignissim
                                quis. Lectus ultrices auctor leo diam fringilla turpis magna. Magna eget porta risus et massa fusce vitae. Ullamcorper
                                in tincidunt vitae, arcu sed pretium lacus. Nulla fermentum dictum curabitur tempus elementum scelerisque. Nulla ut
                                mauris ultricies leo.
                                <br />
                                <br />
                                Bibendum ut est, in lorem vestibulum eu tristique odio. Sodales nullam massa vitae eleifend nec. Ipsum quam tincidunt
                                mauris ultricies et habitant hac. Massa curabitur pellentesque bibendum vitae, aenean. Felis dolor ac natoque vivamus
                                sed duis neque, mi tempor. Elementum sem in dui porttitor sed sodales arcu lorem. Neque lectus laoreet mollis orci
                                elementum pharetra.
                                <br />
                                <br />
                                Consectetur euismod ut sed habitant purus praesent. Ac sed sit scelerisque orci pellentesque tristique odio
                                sollicitudin. Nulla sodales magna ultrices ipsum faucibus laoreet aliquet mattis. Nulla iaculis dolor, at quam feugiat
                                rutrum at proin molestie. Donec in sagittis, dolor aliquam massa faucibus. Feugiat cras nisl ut ullamcorper ornare
                                lectus amet. Tincidunt arcu metus mauris consectetur lobortis. Pellentesque mauris massa in a sed. Odio fermentum
                                habitasse gravida in. Elit viverra nisi senectus ut magna enim. Nec imperdiet ornare quam mauris, vulputate sit feugiat
                                enim. Lacus, ultricies ipsum in aliquet pharetra. Dolor, vestibulum vestibulum dignissim vulputate nam in platea
                                ultricies. Maecenas egestas mauris sit placerat. Tellus nisl tempus vitae amet massa platea.
                            </p>
                        </div>
                    </div>

                    <div className="faq-row1-img2">
                        <img className="faq-img2" src="./images/aboutus/bg-2.png" alt />
                    </div>

                </div>
                <footer>
                    <div className="flex-row12 faq-footer">
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

export default Faq;