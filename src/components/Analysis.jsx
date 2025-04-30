import analysis1 from '../assets/images/analysis1.png'; 
import analysis2 from '../assets/images/analysis2.png'; 
import analysis3 from '../assets/images/analysis3.png'; 
import analysis4 from '../assets/images/analysis4.png'; 
import businessImage from '../assets/images/Task2.png'; 

const BusinessSection = () => {
    return (
        <section className="bg-light py-5">
            <div className="container-fluid px-5">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-8">
                    <div className="col-md-6 mt-5">
                         <img src={businessImage} alt="Business Reinvent" className="img-fluid rounded" />
                    </div>
                    <div className="col-md-6 my-2">
                        <h2 className="display-4 text-muted mb-5 pb-5">Helping Create Projects and Tasks Developemnet Faster</h2>
                        <div className="row">
                            <div className="col-md-6 mb-4 mb-5">
                                <div className="d-flex align-items-center gap-3">
                                    <img src={analysis1} alt="Members" className="img-fluid" style={{ width: '40px' }} />
                                    <div>
                                        <h3 className="fw-bold text-muted" style={{ fontSize: '1rem' }}>2,245,341</h3>
                                        <p className="text-muted" style={{ fontSize: '1rem' }}>Members</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4 mb-5">
                                <div className="d-flex align-items-center gap-3">
                                    <img src={analysis2} alt="Event Bookings" className="img-fluid" style={{ width: '40px' }} />
                                    <div>
                                        <h3 className="fw-bold text-muted" style={{ fontSize: '1rem' }}>828,867</h3>
                                        <p className="text-muted" style={{ fontSize: '1rem' }}>Event Bookings</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4 mb-5">
                                <div className="d-flex align-items-center gap-3">
                                    <img src={analysis3} alt="Clubs" className="img-fluid" style={{ width: '40px' }} />
                                    <div>
                                        <h3 className="fw-bold text-muted" style={{ fontSize: '1rem' }}>46,328</h3>
                                        <p className="text-muted" style={{ fontSize: '1rem' }}>Clubs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4 mb-5">
                                <div className="d-flex align-items-center gap-3">
                                    <img src={analysis4} alt="Payments" className="img-fluid" style={{ width: '40px' }} />
                                    <div>
                                        <h3 className="fw-bold text-muted" style={{ fontSize: '1rem' }}>1,926,436</h3>
                                        <p className="text-muted" style={{ fontSize: '1rem' }}>Payments</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessSection;