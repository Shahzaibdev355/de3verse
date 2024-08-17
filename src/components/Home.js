

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope, faLocation, faBasketball } from "@fortawesome/free-solid-svg-icons";
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";



const Home = () => {
    

    return (
        <section className="bg">
            <nav id="navbar" className="navbar">
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
            <div className="flex-row1">
                <div className="flex-column1">
                    <h2 className="flex-item1">METAVERSE</h2>
                    <h2 className="flex-item2"> <span className="span-style">Dive Into </span> New World </h2>
                    <p className="flex-item3">
                        With virtual technology you can see the digital world <span className="br"> <br /> </span>
                        feel more real and you can play the game with a new <span className="br"> <br /> </span>
                        style.
                    </p>
                    <div className="flex-row2">
                        <Link className="flex-item4" to="#">Explore Now</Link>
                        <Link className="flex-item5" to="#"><img className="flex-item5-img" src="./images/icon.png" alt />Learn
                            More<i className="fas fa-angle-right flex-item5-icon" /></Link>
                    </div>
                </div>
                {/* <div> */}
                    {/* <img src="./images/Ellipse 349.png" alt=""> */}
                    <img className="row1-img" src="./images/building.png" alt />
                {/* </div> */}
            </div>
            <div className="flex-row3">
                <img className="row3-img" src="./images/How it Works.png" alt />
            </div>
            <div className="flex-row4">
                <div className="flex-column2">
                    <img className="row4-img" src="./images/Icon Button-1.png" alt />
                    <h3 className="row4-heading">Explore</h3>
                    <p className="row4-para"> EXPLORE CENTRAL CITY AND VISIT <span className="br"> <br /> </span>
                        OTHER LAND TO HAVE A WONDERFUL <span className="br"> <br /> </span>
                        EXPERIENCE</p>
                </div>
                <div className="flex-column2">
                    <img className="row4-img" src="./images/Icon Button-2.png" alt />
                    <h3 className="row4-heading">Own a Land</h3>
                    <p className="row4-para">PERSONALIZE YOUR LAND WITH <span className="br"> <br /> </span>
                        DIFFERENT ASSETS SUCH AS HOME, <span className="br"> <br /> </span>
                        SWIMMING POOLS, YOUR NFTs</p>
                </div>
                <div className="flex-column2">
                    <img className="row4-img" src="./images/Icon Button-3.png" alt />
                    <h3 className="row4-heading">Events and Play</h3>
                    <p className="row4-para">ATTEND, ENJOY AND HOST IN <span className="br"> <br /> </span>
                        METAVERSE EVENTS AND WE ARE <span className="br"> <br /> </span>
                        INTRODUCING HUNT AND RACE AS <span className="br"> <br /> </span>
                        OUR FIRST GAMES</p>
                </div>
                <div className="flex-column2">
                    <img className="row4-img" src="./images/Icon Button-4.png" alt />
                    <h3 className="row4-heading">Meet Others</h3>
                    <p className="row4-para">OTHERS IN AN INTERACTIVE <span className="br"> <br /> </span>
                        AND SOCIAL VIRTUAL WORLD, INVITE <span className="br"> <br /> </span>
                        FRIENDS TO HAVE A VISIT TO YOUR <span className="br"> <br /> </span>
                        LAND</p>
                </div>
            </div>
            <div className="flex-row5">
                <div className="flex-column3">
                    <img className="row5-img-1" src="./images/Group 1.png" alt />
                    <img className="row5-img-2" src="./images/Group 2.png" alt />
                    <img className="row5-img-3" src="./images/Group 3.png" alt />
                </div>
                <div className="flex-column4">
                    <img src="./images/MetaSupport.png" alt />
                    <div className="btn-2">
                        <Link className="btn-2-a" to="#">Get a Quote</Link>
                    </div>
                    <div className="flex-row6">
                        <img className="row6-img" src="./images/Group 4.png" alt />
                        <p className="row6-para">Immersive Learning System</p>
                        <i className="fas fa-caret-down row6-icon" />
                    </div>
                    <div className="row6-bg">
                        {/* <img class="row5-img-4" src="./images/Rectangle 5.png" alt=""> */}
                        <iframe className="row6-iframe" src="https://www.youtube.com/embed/BqFSHbzSs7U" title="High tech digital world background 4k" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                        </iframe>
                    </div>
                    <div className="flex-row6">
                        <img className="row6-img" src="./images/Group 4.png" alt />
                        <p className="row6-para">Responsible Innovation</p>
                        <i className="fas fa-caret-down row6-icon-2" />
                    </div>
                </div>
            </div>
            <div className="flex-row7">
                <div className="flex-column5">
                    <h3 className="column5-heading"><span className="column5-span">Play and join events </span>
                        <span className="br"> <br /> </span>
                        by Friends of the Metaverse
                    </h3>
                    <div className="flex-row8">
                        <div className="row8-card1">
                            <img className="row8-img1" src="./images/Group 4.png" alt />
                            <p style={{ marginBottom: 7 }}><Link className="row8-para-1" to="#">Connect</Link></p>
                            <p style={{ marginTop: 0 }}> <Link className="row8-para-1" to="#">Wallet</Link></p>
                        </div>
                        <div className="row8-card2">
                            <img className="row8-img1" src="./images/Group 4.png" alt />
                            {/* <Link class="row8-para-2" to="#">Event & <br> Play <Link> */}
                            <p style={{ marginBottom: 7 }}><Link className="row8-para-2" to="#">Event &amp;</Link></p>
                            <p style={{ marginTop: 0 }}><Link className="row8-para-2" to="#">Play</Link></p>
                        </div>
                        <div className="row8-card1">
                            <img className="row8-img1" src="./images/Group 4.png" alt />
                            <p style={{ marginBottom: 7 }}><Link to="#" className="row8-para-1">Meet</Link></p>
                            <p style={{ marginTop: 0 }}><Link to="#" className="row8-para-1">Friends</Link></p>
                        </div>
                    </div>
                </div>
                <div className="flex-column6">
                    <img className="column6-img1" src="./images/Group 8.png" alt />
                    <img className="column6-img2" src="./images/Group 7.png" alt />
                </div>
            </div>
            <div className="row9-bg">
                <div className="flex-column7">
                    <h3 className="column7-heading1"> Get started with
                        <span className="column7-heading2">META</span>
                        <span className="column7-heading3">WORLD</span>
                    </h3>
                    <p className="column7-para">The Metaverse is the next evolution of social connection.</p>
                    <Link className="column7-link" to="#">Get Started</Link>
                </div>
                <div className="flex-row10">
                    <div className="row10-positon-1">
                        <img className="row10-img1" src="./images/Popular  Card 2.png" alt />
                        <div className="row10-card-1">
                            <h4 className="row10-heading">Events</h4>
                            <Link className="row10-link" to="#">Join the Events</Link>
                            <p className="row10-para"><i className="fas fa-user row10-icon" />887,789 Members</p>
                        </div>
                    </div>
                    <div className="row10-positon-2">
                        <img className="row10-img2" src="./images/Popular card 1.png" alt />
                        <div className="row10-card-2">
                            <h4 className="row10-heading-2">Play Games</h4>
                            <Link className="row10-link-2" to="#">Play With Friends</Link>
                            <p className="row10-para-2"><i className="fas fa-user row10-icon-2" />345,678 Members</p>
                        </div>
                    </div>
                </div>
                <div className="flex-row11">
                    <div className="row11-bg">
                        <h3 className="row11-para">MEET Your Community</h3>
                        <h3 className="row11-para-2">on <span className="row11-para-2-span">de3</span> verse</h3>
                    </div>
                </div>
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
                        </div>column10
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
                            <Link to="#"><FontAwesomeIcon icon={faBasketball} className="column9-icon"  /></Link>
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



    );
}

export default Home;