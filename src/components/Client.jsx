import client1 from "../assets/images/client1.png";
import client2 from "../assets/images/client2.png";
import client3 from "../assets/images/client3.png";
import client4 from "../assets/images/client4.png";
import client5 from "../assets/images/client5.png";
import client6 from "../assets/images/client6.png";
const Client = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 text-success">Our Clients</h2>
        <h5 className="text-center mb-5 text-muted">
          We have been working with some Fortune 500+ clients.
        </h5>
        <div className="row justify-content-center cursor-pointer">
          <div className="col-md-2 text-center">
            <img
              src={client1}
              alt="Our Client Image Logo"
              className="img-fluid mb-3"
            />
          </div>
          <div className="col-md-2 text-center">
            <img
              src={client2}
              alt="Our Client Image Logo"
              className="img-fluid mb-3"
            />
          </div>
          <div className="col-md-2 text-center">
            <img
              src={client3}
              alt="Our Client Image Logo"
              className="img-fluid mb-3"
            />
          </div>
          <div className="col-md-2 text-center">
            <img
              src={client4}
              alt="Our Client Image Logo"
              className="img-fluid mb-3"
            />
          </div>
          <div className="col-md-2 text-center">
            <img
              src={client5}
              alt="Our Client Image Logo"
              className="img-fluid mb-3"
            />
          </div>
          <div className="col-md-2 text-center">
            <img
              src={client6}
              alt="Our Client Image Logo"
              className="img-fluid mb-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;