import servicesData from '#/components/data/services-data'
import BreadCrumb from '#/components/pages/common/breadcrumb'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services/services-two')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <BreadCrumb title="Services Two" innerTitle="Services Two" />
      <ServicesMain />
    </main>
  )
}

const ServicesMain = () => {
  return (
    <>
      <div className="services__four section-padding">
        <div className="container">
          <div className="row gy-4">
            {servicesData?.map((data, id) => {
              const words = data.title.split(' ')
              const firstAndSecondWord = words.slice(0, 2).join(' ')
              return (
                <div className="col-xl-4 col-lg-4 col-md-6" key={id}>
                  <div className="services__four-single-service">
                    <div className="services__four-single-service-icon">
                      {data.icon}
                    </div>
                    <div className="services__four-single-service-content">
                      <h4>{firstAndSecondWord}</h4>
                      <p>{data.des}</p>
                      <a href={`/services/${data.id}`} className="btn-three">
                        Read More<i className="fas fa-chevron-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
