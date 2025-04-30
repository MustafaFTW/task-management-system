import { Link } from 'react-router-dom'; 
import market1 from '../assets/images/market1.png'; 
import market2 from '../assets/images/market2.png';
import market3 from '../assets/images/market3.png';

const Marketing = () => {
    return (
     <section className="py-2 bg-light">
        <div className="container-fluid my-5 px-5">
            <div className="row mb-5">
                <div className="col text-center">
                    <h2 className="text-success mb-2">Market For Management</h2>
                    <h5 className="mt-4 text-muted">
                        The Nexcent blog is the best place to read about the latest membership.
                    </h5>
                </div>
            </div>
            <div className="row g-6">
                <div className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm">
                        <img src={market2} className="card-img-top" alt="Creating Streamlined Safeguarding Processes" />
                        <div className="card-body">
                            <h5 className="card-title fw-bold text-muted">Creating Streamlined Safeguarding Processes with OneRen</h5>
                            <p className="card-text text-muted">
                                What are your safeguarding responsibilities and how can you manage?
                            </p>
                            <Link to="#" className="btn btn-link text-decoration-none text-success fw-bold mb-2">Read more →</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm">
                        <img src={market1} className="card-img-top" alt="Revamping the Membership Model" />
                        <div className="card-body">
                            <h5 className="card-title fw-bold text-muted">Revamping the Membership Model with Triathlon Australia</h5>
                            <p className="card-text text-muted">
                                Learn how Triathlon Australia transformed their membership model.
                            </p>
                            <Link to="#" className="btn btn-link text-decoration-none text-success fw-bold">Read more →</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm">
                        <img src={market3} className="card-img-top" alt="Boosting Engagement with Innovative Strategies" />
                        <div className="card-body">
                            <h5 className="card-title fw-bold text-muted">Boosting Engagement with Innovative Strategies</h5>
                            <p className="card-text text-muted">
                                Discover new ways to engage your community and increase participation.
                            </p>
                            <Link to="#" className="btn btn-link text-decoration-none text-success fw-bold">Read more →</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Marketing;