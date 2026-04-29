import { Link } from '@tanstack/react-router'

const whyChooseUsData = [
  {
    id: crypto.randomUUID(),
    title: 'Proven Expertise',
    description:
      'A team of certified professionals with deep expertise across all major technology domains and vendor ecosystems.',
    icon: <i className="fa fa-certificate fa-duotone"></i>,
  },
  {
    id: crypto.randomUUID(),
    title: '24/7 Support',
    description:
      "Round-the-clock support ensures your operations never stop. We're always there when you need us most.",
    icon: <i className="fa fa-headset fa-duotone"></i>,
  },
  {
    id: crypto.randomUUID(),
    title: 'Tailored Solutions',
    description:
      'No cookie-cutter approaches. Every solution is custom-built to fit your industry, size, and objectives perfectly.',
    icon: <i className="fa fa-gears fa-duotone"></i>,
  },
  {
    id: crypto.randomUUID(),
    title: 'Cost-Effective',
    description:
      'Premium quality without the premium price tag. We optimize your IT spend while maximizing business value.',
    icon: <i className="fa fa-dollar-sign fa-duotone"></i>,
  },
  {
    id: crypto.randomUUID(),
    title: 'Security-First',
    description:
      'Security is embedded in everything we do — from architecture design to daily operations and compliance.',
    icon: <i className="fa fa-shield fa-duotone"></i>,
  },
  {
    id: crypto.randomUUID(),
    title: 'UAE Market Knowledge',
    description:
      'Deep understanding of UAE regulations, telecoms, and the unique challenges of operating in the Gulf region.',
    icon: <i className="fa fa-globe fa-duotone"></i>,
  },
  {
    id: crypto.randomUUID(),
    title: 'Fast Deployment',
    description:
      'Agile methodologies and proven frameworks mean faster time-to-value without compromising on quality.',
    icon: <i className="fa fa-rocket-launch fa-duotone"></i>,
  },
  {
    id: crypto.randomUUID(),
    title: 'Long-Term Partnership',
    description:
      "We measure success by your growth. Our relationship doesn't end at delivery — we grow together.",
    icon: <i className="fa fa-handshake-angle fa-duotone"></i>,
  },
]

export default function WhyChooseUs() {
  return (
    <div className="services__two section-padding">
      <div className="container">
        <div className="row justify-content-center text-center mb-40">
          <div className="col-xl-7 col-lg-7 col-md-9 services__one-title">
            <span className="subtitle-one">Why ESHA</span>
            <h2>The ESHA Advantage</h2>
            <p>
              We don't just deliver IT services — we become your technology
              partner committed to your long-term success.
            </p>
          </div>
        </div>

        <div className="row gy-4">
          {whyChooseUsData.map((data, id) => {
            return (
              <div className="col-xl-3 col-lg-6 col-md-6" key={id}>
                <div className="services__four-single-service">
                  <div className="services__four-single-service-icon">
                    {data.icon}
                  </div>
                  <div className="services__four-single-service-content">
                    <h4>{data.title}</h4>
                    <p>{data.description}</p>
                    <Link to={`.`} className="btn-three">
                      Read More<i className="fas fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
