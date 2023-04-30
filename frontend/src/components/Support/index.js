import "./style.css"

const Support = () => {
    return (   
        <section id="contact" class="contact" style={{paddingTop:"0"}}>

        <div class="container" data-aos="fade-up" style={{paddingTop:"0"}}>
  
          <header class="section-header">
            <h2>Contact</h2>
            <p>Contact Us</p>
          </header>
  
          <div class="row gy-4">
  
            <div class="col-lg-6">
  
              <div class="row gy-4">
                <div class="col-md-6">
                  <div class="info-box">
                    <i class="bi bi-geo-alt"></i>
                    <h3>Address</h3>
                    <p>A108 Ali Hussien Street,<br/>Amman, Jubieha 11943</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="info-box">
                    <i class="bi bi-telephone"></i>
                    <h3>Call Us</h3>
                    <p>+962 77777777<br/>+962 88888888</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="info-box">
                    <i class="bi bi-envelope"></i>
                    <h3>Email Us</h3>
                    <p>creativeminds@taslee7.com<br/>contact@taslee7.com</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="info-box">
                    <i class="bi bi-clock"></i>
                    <h3>Open Hours</h3>
                    <p>Sunday - Thursday<br/>9:00AM - 05:00PM</p>
                  </div>
                </div>
              </div>
  
            </div>
  
            <div class="col-lg-6">
              <form action="forms/contact.php" method="post" class="php-email-form">
                <div class="row gy-4">
  
                  <div class="col-md-6">
                    <input type="text" name="name" class="form-control" placeholder="Your Name" required/>
                  </div>
  
                  <div class="col-md-6 ">
                    <input type="email" class="form-control" name="email" placeholder="Your Email" required/>
                  </div>
  
                  <div class="col-md-12">
                    <input type="text" class="form-control" name="subject" placeholder="Subject" required/>
                  </div>
  
                  <div class="col-md-12">
                    <textarea class="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                  </div>
  
                  <div class="col-md-12 text-center">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your message has been sent. Thank you!</div>
  
                    <button type="submit">Send Message</button>
                  </div>
  
                </div>
              </form>
  
            </div>
  
          </div>
  
        </div>
  
      </section>
       
    )
}
export default Support