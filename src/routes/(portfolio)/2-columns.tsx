import portfolioData from '#/components/data/portfolio-data'
import BreadCrumb from '#/components/pages/common/breadcrumb'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/(portfolio)/2-columns')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <BreadCrumb title="02 Columns" innerTitle="Portfolio Grid" />
      <TwoColumns />
    </main>
  )
}

const showPortfolioItem = 4

const TwoColumns = () => {
  const portfolioItem = portfolioData
  const [next, setNext] = useState(showPortfolioItem)
  const handleLoadData = () => {
    setNext((value) => value + 2)
  }

  return (
    <div className="portfolio__two section-padding">
      <div className="container">
        <div className="row">
          {portfolioItem.slice(0, next)?.map((data, id) => (
            <div className="col-lg-6" key={id}>
              <div className="portfolio__two-single-item">
                <div className="portfolio__two-single-item-img-wrapper">
                  <img src={data.image} alt="image" />
                </div>
                <div className="portfolio__two-single-item-content">
                  <div className="portfolio__two-single-item-content-left">
                    <h3>{data.title}</h3>
                    <p>{data.subtitle}</p>
                  </div>
                  <div className="portfolio__two-single-item-content-right">
                    <a href={`/portfolio/${data.id}`} title="View Details">
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {next < portfolioItem.length && (
          <div className="row mt-70">
            <div className="col-xl-12 t-center">
              <button onClick={handleLoadData} className="btn-one">
                Load More
              </button>
            </div>
          </div>
        )}

        {}
      </div>
    </div>
  )
}
