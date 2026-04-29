import ContactForm from './contact-form'

export default function ContactSection() {
  return (
    <div className="contact__two section-padding">
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-xl-6">
            <div className="contact__two-content">
              <div className="contact__two-title">
                <span className="subtitle-one">Get In Touch</span>
                <h2>Let's Talk Technology</h2>
                <p>
                  Reach out for a free consultation and discover how ESHA can
                  accelerate your digital journey.
                </p>
              </div>
              <div className="contact__two-form">
                <ContactForm />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="contact__two-contact-info">
              <div className="contact__two-single-info">
                <div className="contact__two-single-info-icon">
                  <img src="assets/img/icon//service-1.png" alt="image" />
                </div>
                <div className="contact__two-single-info-content">
                  <h4>Email</h4>
                  <span>
                    <a
                      href="mailto:eshaitconsultancyservices@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-break"
                    >
                      eshaitconsultancyservices@gmail.com
                    </a>
                  </span>
                </div>
              </div>
              <div className="contact__two-single-info">
                <div className="contact__two-single-info-icon">
                  <img src="assets/img/icon//service-2.png" alt="image" />
                </div>
                <div className="contact__two-single-info-content">
                  <h4>Contacts</h4>
                  <span>
                    <a href="tel:0526063287">0526063287</a>
                  </span>
                </div>
              </div>
              <div className="contact__two-single-info">
                <div className="contact__two-single-info-icon">
                  <img src="assets/img/icon//service-3.png" alt="image" />
                </div>
                <div className="contact__two-single-info-content">
                  <h4>Hours</h4>
                  <span>Monday 10.Am To 2.Pm</span>
                  <span>Sunday 2.Pm To 7.Pm</span>
                </div>
              </div>
              <div className="contact__two-single-info">
                <div className="contact__two-single-info-icon">
                  <img src="assets/img/icon/service-4.png" alt="image" />
                </div>
                <div className="contact__two-single-info-content">
                  <h4>Location</h4>
                  <span>26th Floor, Amber Gem Tower, Ajman</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
