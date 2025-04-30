import { Link } from 'react-router-dom'; 
import logo from '../assets/images/logo.png';
import TaskLeed from '../assets/images/TaskLeed.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faTwitter,faInstagram,faLinkedin}from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-5 pb-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-8"> 
                    <div className="d-flex align-items-start py-2">
                            <img src={logo} alt="logo" className="img-fluid" style={{ width: '60px', padding: '10px',alignItems:'center'}} />
                            <img src={TaskLeed} alt="TaskLeed" className="img-fluid" style={{ width: '120px' ,cursor:'pointer'}} />
                    </div>
                        <p>Copyright © 2020 Nexcent Ltd.<br />All rights reserved</p>
                        <div className="mt-4">
                            <Link to="#" className="text-decoration-none text-white me-3">
                                <FontAwesomeIcon icon={faFacebook} size="lg" />
                            </Link>
                            <Link to="#" className="text-decoration-none text-white me-3">
                                <FontAwesomeIcon icon={faTwitter} size="lg" />
                            </Link>
                            <Link to="#" className="text-decoration-none text-white me-3">
                                <FontAwesomeIcon icon={faInstagram} size="lg" />
                            </Link>
                            <Link to="#" className="text-decoration-none text-white">
                                <FontAwesomeIcon icon={faLinkedin} size="lg" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="row">
                            <div className="col-6">
                                <h5 className="fw-bold mb-3 text-light">Company</h5>
                                <ul className="list-unstyled">
                                    <li><Link to="/About" className="text-decoration-none text-white">About us</Link></li>
                                    <li><Link to="/Blog" className="text-decoration-none text-white">Blog</Link></li>
                                    <li><Link to="/Contact" className="text-decoration-none text-white">Contact us</Link></li>
                                    <li><Link to="/Pricing" className="text-decoration-none text-white">Pricing</Link></li>
                                    <li><Link to="/Testmonial" className="text-decoration-none text-white">Testimonials</Link></li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <h5 className="fw-bold mb-3 text-light">Support</h5>
                                <ul className="list-unstyled">
                                    <li><Link to="/Help Center" className="text-decoration-none text-white">Help center</Link></li>
                                    <li><Link to="/Term Of Service" className="text-decoration-none text-white">Terms of service</Link></li>
                                    <li><Link to="/Legal" className="text-decoration-none text-white">Legal</Link></li>
                                    <li><Link to="/Privacy" className="text-decoration-none text-white">Privacy policy</Link></li>
                                    <li><Link to="/Status" className="text-decoration-none text-white">Status</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <h5 className="fw-bold mb-3 text-light">Stay up to date</h5>
                        <form className="d-flex">
                            <input
                                type="email"
                                className="form-control me-2"
                                placeholder="Your email address"
                                required
                            />
                            <button type="submit" className="btn btn-light px-3 text-black" style={{border:'none'}}>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;