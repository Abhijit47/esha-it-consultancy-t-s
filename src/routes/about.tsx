import { ClientOnly, createFileRoute, Link } from '@tanstack/react-router'
import { CountUp } from 'use-count-up'

import about1 from '/assets/img/about/about-1.png'
import about2 from '/assets/img/about/about-2.png'
import brand1 from '/assets/img/brand/brand-1.png'
import brand2 from '/assets/img/brand/brand-2.png'
import brand3 from '/assets/img/brand/brand-3.png'
import brand4 from '/assets/img/brand/brand-4.png'
import brand5 from '/assets/img/brand/brand-5.png'

import NotFound from '#/components/not-found'
import BreadCrumb from '#/components/pages/common/breadcrumb'
import Testimonial from '#/components/pages/homes/home/testimonial'
import WorkArea from '#/components/pages/homes/home/work'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      {
        title: 'About Us | Esha IT Consultancy',
      },
      {
        name: 'description',
        content:
          'Esha IT Consultancy is a leading provider of IT solutions and services, dedicated to helping businesses leverage technology for growth and success. With a team of experienced professionals, we offer a wide range of services including software development, cloud computing, cybersecurity, and IT consulting. Our mission is to deliver innovative and customized solutions that meet the unique needs of our clients, enabling them to stay competitive in the ever-evolving digital landscape.',
      },
    ],
  }),
  component: About,
  notFoundComponent: NotFound,
})

function About() {
  return (
    <main className="">
      {/* <HeaderOne /> */}
      <BreadCrumb title="About Us" innerTitle="Company About" />
      <AboutMain />
      {/* <FooterOne /> */}
      {/* <ScrollToTop /> */}
    </main>
  )
}

const AboutMain = () => {
  return (
    <>
      <div className="about__one section-padding">
        <div className="container">
          <div className="row align-items-center flex-wrap-reverse gy-4">
            <div className="col-xl-6 col-lg-5">
              <div className="about__one-image">
                <div className="experience-bar animate-y-axis-slider">
                  <i className="flaticon-consultant"></i>
                  <div className="experience-bar-right">
                    <div className="experience-bar-counter">
                      <h4 className="counter">
                        <ClientOnly fallback={<span>0</span>}>
                          <CountUp isCounting end={25} duration={3.2} />
                        </ClientOnly>
                      </h4>
                      <span>+</span>
                    </div>
                    <span>Years Experience</span>
                  </div>
                </div>
                <div className="about__one-image-wrapper">
                  <img src={about1} alt="image" className="image-1" />
                  <img src={about2} alt="image" className="image-2" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 col-md-9">
              <div className="about__one-content">
                <span className="subtitle-one">About us</span>
                <h2>Transform Business to Technology</h2>
                <p>
                  At ESHA IT Consultancy Services, we redefine how businesses
                  experience technology. Based in Dubai, we deliver
                  sophisticated, future-ready IT solutions designed not just to
                  support your operations — but to elevate them.
                </p>
                <p>
                  We operate at the intersection of innovation, strategy, and
                  precision, helping organizations transform complex
                  technological challenges into seamless, scalable systems that
                  drive measurable growth.
                </p>
                <div className="about__one-content-service">
                  <div className="service">
                    <i className="far fa-check-circle"></i>
                    <span>Enterprise-Grade Cybersecurity</span>
                  </div>
                  <div className="service">
                    <i className="far fa-check-circle"></i>
                    <span>Custom Software & Application Development</span>
                  </div>
                  <div className="service">
                    <i className="far fa-check-circle"></i>
                    <span>ERP & Business Process Automation</span>
                  </div>
                  <div className="service">
                    <i className="far fa-check-circle"></i>
                    <span>Intelligent AI & Data-Driven Systems</span>
                  </div>
                  <div className="service">
                    <i className="far fa-check-circle"></i>
                    <span>Digital Transformation & IT Strategy</span>
                  </div>
                  <div className="service">
                    <i className="far fa-check-circle"></i>
                    <span>Managed IT Services & Ongoing Support</span>
                  </div>
                </div>
                <Link to="/about" className="btn-one">
                  Discover More<i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="brand__area section-padding pt-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="text__slider">
                <div className="text-slide">
                  <div className="sliders scroll">
                    <div className="brand__area-item">
                      <img src={brand1} alt="image" />
                    </div>
                    <div className="brand__area-item">
                      <img src={brand2} alt="image" />
                    </div>
                    <div className="brand__area-item">
                      <img src={brand3} alt="image" />
                    </div>
                    <div className="brand__area-item">
                      <img src={brand4} alt="image" />
                    </div>
                    <div className="brand__area-item">
                      <img src={brand5} alt="image" />
                    </div>
                  </div>
                  <div className="sliders scroll">
                    <div className="brand__area-item">
                      <img src={brand1} alt="image" />
                    </div>
                    <div className="brand__area-item">
                      <img src={brand2} alt="image" />
                    </div>
                    <div className="brand__area-item">
                      <img src={brand3} alt="image" />
                    </div>
                    <div className="brand__area-item">
                      <img src={brand4} alt="image" />
                    </div>
                    <div className="brand__area-item">
                      <img src={brand5} alt="image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WorkArea />
      <Testimonial />
    </>
  )
}
