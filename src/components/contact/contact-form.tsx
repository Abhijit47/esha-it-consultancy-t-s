export default function ContactForm() {
  return (
    <form action="#">
      <div className="row">
        <div className="col-md-6 mb-30">
          <div className="contact__form-area-item">
            <input type="text" name="name" placeholder="Full Name" required />
          </div>
        </div>
        <div className="col-md-6 md-mb-30">
          <div className="contact__form-area-item">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
          </div>
        </div>
        <div className="col-md-12 mb-30">
          <div className="contact__form-area-itemm">
            <input type="text" name="phone" placeholder="Phone" />
          </div>
        </div>
        <div className="col-md-12 mb-30">
          <div className="contact__form-area-item">
            <select
              className=""
              aria-label="Service of Interest"
              name="service"
            >
              <option selected>Select a service...</option>
              <option>Cloud Computing & Migration</option>
              <option>Cybersecurity Solutions</option>
              <option>IT Infrastructure Management</option>
              <option>Software Development</option>
              <option>ERP & Business Solutions</option>
              <option>Network Solutions</option>
              <option>AI & Intelligent Automation</option>
              <option>Data Analytics & Business Intelligence</option>
              <option>Digital Transformation</option>
              <option>IT Support & Managed Services</option>
              <option>IoT & Smart Technology</option>
              <option>IT Training & Consulting</option>
              <option>Other / General Inquiry</option>
            </select>
          </div>
        </div>
        <div className="col-md-12">
          <div className="contact__form-area-item">
            <textarea name="message" placeholder="Message"></textarea>
          </div>
        </div>
        <div className="col-md-12">
          <div className="contact__two-right-form-item">
            <button className="btn-one" type="submit">
              Submit Now
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
