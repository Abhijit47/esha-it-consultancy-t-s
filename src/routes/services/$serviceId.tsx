import { createFileRoute, notFound } from '@tanstack/react-router'

import servicesData from '#/components/data/services-data'
import BreadCrumb from '#/components/pages/common/breadcrumb'

import image1 from '/assets/img/icon/service-details-icon-2.png'
import image2 from '/assets/img/icon/service-details-icon.png'
import ServicesDetails from '/assets/img/service/service-details.png'

export const Route = createFileRoute('/services/$serviceId')({
  component: RouteComponent,
})

function RouteComponent() {
  const params = Route.useParams()
  const singleData = servicesData.find(
    (portfolio) => portfolio.id === params.serviceId,
  )
  // const router = Route.useNavigate()
  if (!singleData) {
    // return router.push('/404-error')
    throw notFound()
  }

  const words = singleData.title.split(' ')
  const firstAndSecondWord = words.slice(0, 2).join(' ')

  return (
    <main>
      <BreadCrumb title={firstAndSecondWord} innerTitle={singleData.title} />
      <ServicesSingleMain firstAndSecondWord={firstAndSecondWord} />
    </main>
  )
}

const ServicesSingleMain = ({
  firstAndSecondWord,
}: {
  firstAndSecondWord: string
}) => {
  return (
    <div className="service__details section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="service__details-thumb">
              <img src={ServicesDetails} alt="image" />
              <div className="service__details-thumb-icon">
                <div className="service__details-thumb-icon-wrapper">
                  <img src={image1} alt="image" />
                </div>
              </div>
            </div>
            <div className="service__details-content">
              <h2>Reach New Heights with {firstAndSecondWord}</h2>
              <p>
                Web designing in a powerful way of just not an only professions,
                however, in a passion for our Company. We have to a tendency to
                believe the idea that smart looking of any websitet in on
                visitors.Web designing in a powerful way of just not an only
                profession Web designing in a powerful way of just not an only
                passion for our Company. We have to a tendency to believe the
                idea that
              </p>

              <h3 className="sub-heading">
                Transform Your Brand's Digital Future
              </h3>
              <p>
                Web designing in a powerful way of just not an only professions,
                however, in a passion for our Company. We have to a tendency to
                believe the idea that smart looking of any websitet in on
                visitors.Web designing in a powerful way of just not an only
                profession Web designing in a powerful way of just not an only
                Web designing in a powerful way of just not an only professions,
                however, in a passion for our Company. We have to a tendency to
                believe the idea that smart looking of any websitet in on
                visitors.Web designing in a powerful way of just not an only
                profession
              </p>

              <div className="service__details-content-box">
                <div className="service__details-content-box-single">
                  <h4>Elevating Businesses through Edge </h4>
                  <p>
                    Web designing in a powerful way of just not an only
                    professions, however, in a passion for our Company. We have
                    to a tendency to believe the idea that smart looking of any
                    website
                  </p>
                  <ul className="service-qualities">
                    <li>IT Support</li>
                    <li>Software Development</li>
                    <li>Cloud Computing</li>
                    <li>IData Analysis</li>
                  </ul>
                </div>
                <div className="service__details-content-box-single">
                  <div className="icon">
                    <img src={image2} alt="image" />
                  </div>
                  <h4 className="mb-4">Elevating Businesses through Edge </h4>
                  <p className="m-0">
                    Web designing in a powerful way of just not an only
                    professions, however, in a passion for our Company. We have
                    to a tendency to believe the idea that smart looking of any
                    website
                  </p>
                </div>
              </div>
              <p>
                Web designing in a powerful way of just not an only professions,
                however, in a passion for our Company. We have to a tendency to
                believe the idea that smart looking of any websitet in on
                visitors.Web designing in a powerful way of just not an only
                profession Web designing in a powerful way of just not an only
                Web designing in a powerful way of just not an only professions,
                however, in a passion for our Company. We have to a tendency to
                believe the idea that smart looking of any websitet in on
                visitors.Web designing in a powerful way of just not an only
                profession
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
