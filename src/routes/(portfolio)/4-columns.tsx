import portfolioData from '#/components/data/portfolio-data'
import BreadCrumb from '#/components/pages/common/breadcrumb'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/(portfolio)/4-columns')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <BreadCrumb title="04 Columns" innerTitle="Portfolio Grid" />
      <FourColumns />
    </main>
  )
}

const showPortfolioItem = 4

const FourColumns = () => {
  const portfolioItem = portfolioData
  // const [items, setItems] = useState(portfolioItem)
  const [next, setNext] = useState(showPortfolioItem)
  const handleLoadData = () => {
    setNext((value) => value + 1)
  }
  return (
    <div className="portfolio__one section-padding-three">
      <div className="container-fluid">
        <div className="row dark_image">
          {portfolioItem?.slice(0, next)?.map((data, id) => (
            <div className="col-xl-3 col-lg-4 col-md-6 mt-25" key={id}>
              <div className="portfolio__one-item">
                <div className="portfolio__one-item-image">
                  <img src={data.image} alt="image" />
                  <div className="portfolio__one-item-image-content">
                    <span>
                      <i className="fa-regular fa-horizontal-rule"></i>
                      {data.subtitle}
                    </span>
                    <h6>
                      <a href={`/portfolio/${data.id}`}>{data.title}</a>
                    </h6>
                    <a href={`/portfolio/${data.id}`} title="View Details">
                      <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
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
