import image from '/assets/img/service/services.png'

const features = [
  {
    id: crypto.randomUUID(),
    title: 'Strategic Vision',
    desciption: 'Aligning IT with your business goals',
    icon: <i className="fa fa-lightbulb-on fa-duotone"></i>,
  },
  {
    id: crypto.randomUUID(),
    title: 'Trusted Partner',
    desciption: 'Security-first, reliability-always approach',
    icon: <i className="fa fa-handshake-angle fa-duotone"></i>,
  },
  {
    id: crypto.randomUUID(),
    title: 'Rapid Delivery',
    desciption: 'Agile execution, on time and on budget',
    icon: <i className="fa fa-rocket-launch fa-duotone"></i>,
  },
  {
    id: crypto.randomUUID(),
    title: 'UAE Expertise',
    desciption: 'Deep knowledge of local regulations & needs',
    icon: <i className="fa fa-globe fa-duotone"></i>,
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Features = () => {
  return (
    <>
      <div className="services__one section-padding">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-xl-7 col-lg-7 col-md-9 services__one-title">
              <span className="subtitle-one">Who We Are</span>
              <h2>Technology With a Purpose</h2>
              <p className={'mb-3'}>
                ESHA IT Consultancy Services is a Dubai-based technology firm
                dedicated to helping businesses harness the power of modern IT.
                We bridge the gap between complex technology and real business
                outcomes.
              </p>
              <p>
                From startups to enterprises, we deliver tailored IT strategies,
                robust infrastructure, and cutting-edge digital solutions that
                keep you ahead in a rapidly evolving marketplace.
              </p>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-3">
              <div className="row">
                {features.slice(0, 2).map((feature, idx) => (
                  <div
                    className={classNames(
                      'col-xl-12 col-md-6',
                      idx === 1 ? 'xl-mb-30' : '',
                    )}
                    key={feature.id}
                  >
                    <div className="single-service">
                      <div className="services__one-single-service-icon">
                        {feature.icon}
                      </div>
                      <div className="services__one-single-service-content">
                        <h4>{feature.title}</h4>
                        <p>{feature.desciption}</p>
                      </div>
                    </div>
                  </div>
                ))}
                {/* <div className="col-xl-12 col-md-6">
                  <div className="single-service">
                    <div className="services__one-single-service-icon">
                      <i className="flaticon-global-network"></i>
                    </div>
                    <div className="services__one-single-service-content">
                      <h4>Cloud Solutions Management</h4>
                      <p>IT infrastructure including network installation</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-md-6 xl-mb-30">
                  <div className="single-service">
                    <div className="services__one-single-service-icon">
                      <i className="flaticon-mobile-phone-1"></i>
                    </div>
                    <div className="services__one-single-service-content">
                      <h4>Analytics Business Intelligence</h4>
                      <p>Comprehensive analytics services providing</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="services-image-wrapper">
                <img src={image} alt="image" />
              </div>
            </div>
            <div className="col-xl-3">
              <div className="row">
                {features.slice(2).map((feature) => (
                  <div className="col-xl-12 col-md-6" key={feature.id}>
                    <div className="single-service">
                      <div className="services__one-single-service-icon">
                        {feature.icon}
                      </div>
                      <div className="services__one-single-service-content">
                        <h4>{feature.title}</h4>
                        <p>{feature.desciption}</p>
                      </div>
                    </div>
                  </div>
                ))}
                {/* <div className="col-xl-12 col-md-6">
                  <div className="single-service">
                    <div className="services__one-single-service-icon">
                      <i className="flaticon-idea"></i>
                    </div>
                    <div className="services__one-single-service-content">
                      <h4>Custom Software Development</h4>
                      <p>
                        Our services build reliable, scalable, and innovative
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-md-6">
                  <div className="single-service">
                    <div className="services__one-single-service-icon">
                      <i className="flaticon-it"></i>
                    </div>
                    <div className="services__one-single-service-content">
                      <h4>Machine Learning Implementation</h4>
                      <p>Harnessing the power of artificial intelligence</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Features
