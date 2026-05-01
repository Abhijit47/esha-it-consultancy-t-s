import servicesData from '#/components/data/services-data'
import BreadCrumb from '#/components/pages/common/breadcrumb'
import Testimonial from '#/components/pages/homes/home/testimonial'
import WorkArea from '#/components/pages/homes/home/work'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <BreadCrumb title="Our Services" innerTitle="Our Services" />
      <ServicesMain />
      <WorkArea />
      <Testimonial />
    </main>
  )
}

const ServicesMain = () => {
  return (
    <>
      <div className="services__two section-padding">
        <div className="container">
          <div className="row gy-4">
            {servicesData?.map((data, id) => (
              <div className="col-xl-4 col-lg-4 col-md-6" key={id}>
                <div className="services__two-single-service">
                  <div className="services__two-single-service-icon">
                    {data.icon}
                  </div>
                  <div className="services__two-single-service-content">
                    <h4>{data.title}</h4>
                    <a href={`/services/${data.id}`} className="btn-three">
                      Read More<i className="fas fa-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
