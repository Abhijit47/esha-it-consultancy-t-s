import portfolioData from '#/components/data/portfolio-data'
import BreadCrumb from '#/components/pages/common/breadcrumb'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/(portfolio)/3-columns')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <BreadCrumb title="03 Columns" innerTitle="Portfolio Grid" />
      <ThreeColumns />
    </main>
  )
}

const showPortfolioItem = 5

const ThreeColumns = () => {
  const portfolioItem = portfolioData
  // const [items, setItems] = useState(portfolioItem)
  const [next, setNext] = useState(showPortfolioItem)
  const handleLoadData = () => {
    setNext((value) => value + 1)
  }

  return (
    <div className="portfolio__two section-padding three-columns">
      <div className="container">
        <div className="row dark_image">
          {portfolioItem?.slice(0, next)?.map((data, id) => (
            <div className="col-xl-4 col-lg-4 col-md-6" key={id}>
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
        {next < portfolioData.length && (
          <div className="row mt-70">
            <div className="col-xl-12 t-center">
              <button onClick={handleLoadData} className="btn-one">
                Load More
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
