import "./style.css"

const Support = () => {
    return ( 
    <section id="team" className="team section-bg" style={{paddingTop:"0"}}>
    <div className="container" data-aos="fade-up" >
      <div className="section-title">
        <h2>Support Team</h2>
      </div>

      <div className="row">

        <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
          <div className="member d-flex align-items-start">
            <div className="pic"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeG_CmfdRLB25vH5qf42wHKwOsWLH7YpUuLg&usqp=CAU" className="img-fluid" alt=""/></div>
            <div className="member-info">
              <h4>Anas bajawi</h4>
              <span>Chief Executive Officer</span>
              <p>Anas@taslee7.com</p>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="200">
          <div className="member d-flex align-items-start">
            <div className="pic"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeG_CmfdRLB25vH5qf42wHKwOsWLH7YpUuLg&usqp=CAU" className="img-fluid" alt=""/></div>
            <div className="member-info">
              <h4>Omar rayyan</h4>
              <span>Product Manager</span>
              <p>Omar@taslee7.com</p>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="300">
          <div className="member d-flex align-items-start">
            <div className="pic"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeG_CmfdRLB25vH5qf42wHKwOsWLH7YpUuLg&usqp=CAU" className="img-fluid" alt=""/></div>
            <div className="member-info">
              <h4>Mohammed hammami</h4>
              <span>CTO</span>
              <p>Mohammed@taslee7.com</p>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="400">
          <div className="member d-flex align-items-start">
            <div className="pic"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeG_CmfdRLB25vH5qf42wHKwOsWLH7YpUuLg&usqp=CAU" className="img-fluid" alt=""/></div>
            <div className="member-info">
              <h4>Ahmad shehada</h4>
              <span>Accountant</span>
              <p>Ahmad@taslee7.com</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
       
    )
}
export default Support