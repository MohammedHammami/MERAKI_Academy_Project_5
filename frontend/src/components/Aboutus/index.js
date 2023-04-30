import "./style.css";

const Aboutus = () => {
  return (
    <section id="about" className="about" style={{paddingTop:"10px"}}>
      <div className="container" data-aos="fade-up">
        <div className="row gy-4">
          <div className="col-lg-6 position-relative align-self-start order-lg-last order-first">
            <img
              src="https://ftmaintenance.com/wp-content/uploads/2020/12/Maintenance_Management_Objectives.jpg"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-lg-6 content order-last  order-lg-first">
            <h4>About Us</h4>
            <ul>
              <li data-aos="fade-up" data-aos-delay="100">
                <i className="bi bi-diagram-3"></i>
                <div>
                  <p>
                    Creative Minds Team : We seek to develop websites aimed at
                    facilitating working life through our programming expertise
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="100">
                <i className="bi bi-diagram-3"></i>
                <div>
                  <h5>Our version</h5>
                  <p>
                    Through our website, you can search for a maintenance
                    service provider for your home or even your workplace
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-fullscreen-exit"></i>
                <div>
                  <h5>Be a member of Taslee7</h5>
                  <p>
                    You can also join us to become a service provider and
                    thousands of people can reach you
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-broadcast"></i>
                <div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Aboutus;
