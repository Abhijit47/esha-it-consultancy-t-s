import NotFound from '#/components/not-found'
import BreadCrumb from '#/components/pages/common/breadcrumb'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      {
        title: 'Contact | Esha IT Consultancy',
      },
      {
        name: 'description',
        content:
          'Esha IT Consultancy is a leading provider of IT solutions and services, dedicated to helping businesses leverage technology for growth and success. With a team of experienced professionals, we offer a wide range of services including software development, cloud computing, cybersecurity, and IT consulting. Our mission is to deliver innovative and customized solutions that meet the unique needs of our clients, enabling them to stay competitive in the ever-evolving digital landscape.',
      },
    ],
  }),
  component: RouteComponent,
  notFoundComponent: NotFound,
})

function RouteComponent() {
  return (
    <main>
      {/* <HeaderOne /> */}
      <BreadCrumb title="Contact Us" innerTitle="Contact Us" />
      <div className="contact__two section-padding">
        <div className="container">
          <div className="row gy-4 align-items-center">
            <div className="col-xl-6">
              <div className="contact__two-content">
                <div className="contact__two-title">
                  <span className="subtitle-one">Contact us</span>
                  <h2>Do you have any question? </h2>
                  <p>
                    For your car we will do everything advice, repairs and
                    maintenance. We are the some preferred choice by many car
                    owners because
                  </p>
                </div>
                <div className="contact__two-form">
                  <FormArea />
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
                    <span>michelle.rivera@example.com</span>
                    <span>willie.jennings@example.com</span>
                  </div>
                </div>
                <div className="contact__two-single-info">
                  <div className="contact__two-single-info-icon">
                    <img src="assets/img/icon//service-2.png" alt="image" />
                  </div>
                  <div className="contact__two-single-info-content">
                    <h4>Contacts</h4>
                    <span>(270) 555-0117</span>
                    <span>(704) 555-0127</span>
                  </div>
                </div>
                <div className="contact__two-single-info">
                  <div className="contact__two-single-info-icon">
                    <img src="assets/img/icon//service-3.png" alt="image" />
                  </div>
                  <div className="contact__two-single-info-content">
                    <h4>Date</h4>
                    <span>Saturday 10.Am To 2.Pm</span>
                    <span>Sunday 2.Pm To 7.Pm</span>
                  </div>
                </div>
                <div className="contact__two-single-info">
                  <div className="contact__two-single-info-icon">
                    <img src="assets/img/icon/service-4.png" alt="image" />
                  </div>
                  <div className="contact__two-single-info-content">
                    <h4>Location</h4>
                    <span>8502 Preston Rd. Inglewood, Maine 98380</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <FooterOne /> */}
      {/* <ScrollToTop /> */}
    </main>
  )
}

const FormArea = () => {
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
          <div className="contact__form-area-item">
            <input type="text" name="subject" placeholder="Subject" />
          </div>
        </div>
        <div className="col-md-12 mb-30">
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
