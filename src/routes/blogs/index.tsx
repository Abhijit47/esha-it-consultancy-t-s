import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'

import blogData from '#/components/data/blog-data'
import NotFound from '#/components/not-found'
import BreadCrumb from '#/components/pages/common/breadcrumb'

export const Route = createFileRoute('/blogs/')({
  head: () => ({
    meta: [
      {
        title: 'Blogs | Esha IT Consultancy',
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
      <BreadCrumb title="Blogs" innerTitle="Blogs" />
      <BlogGridMain />
    </main>
  )
}

const BlogGridMain = () => {
  const blogItemShow = 6
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = Math.ceil(blogData.length / blogItemShow)
  const startIndex = currentPage * blogItemShow
  const endIndex = startIndex + blogItemShow
  const currentBlogItems = blogData.slice(startIndex, endIndex)
  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }
  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <>
      <div className="blog__two section-padding">
        <div className="container">
          <div className="row gy-4">
            <BlogItem currentBlogItems={currentBlogItems} />
          </div>
          <Pagination
            currentPage={currentPage}
            handlePrevPage={handlePrevPage}
            totalPages={totalPages}
            handleNextPage={handleNextPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  )
}

const BlogItem = ({
  currentBlogItems,
}: {
  currentBlogItems: typeof blogData
}) => {
  return (
    <>
      {currentBlogItems?.map((data, id) => (
        <div className="col-xl-4 col-lg-6" key={id}>
          <div className="blog__two-single-blog">
            <div className="blog__two-single-blog-img">
              <div className="blog__two-single-blog-date">
                <span className="date">{data.date}</span>
                <span className="month">Mar</span>
              </div>
              <Link to={`/blogs/$blogId`} params={{ blogId: String(data.id) }}>
                <img src={data.image} alt="blog" />
              </Link>
            </div>
            <div className="blog__two-single-blog-content">
              <div className="blog__two-single-blog-content-top">
                <span>
                  <i className="far fa-user"></i>by Admin
                </span>
                <span>
                  <i className="far fa-comment-dots"></i>Comments (
                  {data.comment})
                </span>
              </div>
              <Link
                to={`/blogs/$blogId`}
                params={{ blogId: String(data.id) }}
                // href={`/blog/${data.id}`}
                className="blog__two-single-blog-content-title"
              >
                {data.title}
              </Link>
              <Link
                className="btn-three"
                to={`/blogs/$blogId`}
                params={{ blogId: String(data.id) }}
                // href={`/blog/${data.id}`}
              >
                Read More<i className="fas fa-chevron-right"></i>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

const Pagination = ({
  currentPage,
  handlePrevPage,
  totalPages,
  handleNextPage,
  setCurrentPage,
}: {
  currentPage: number
  handlePrevPage: () => void
  totalPages: number
  handleNextPage: () => void
  setCurrentPage: (page: number) => void
}) => {
  return (
    <div className="row t-center mt-55">
      <div className="col-xl-12">
        <div className="theme__pagination">
          <ul>
            <li className={`${currentPage === 0 ? 'd-none' : ''}`}>
              <span onClick={handlePrevPage}>
                <i className="fa-regular fa-angle-left"></i>
              </span>
            </li>
            {Array.from({ length: totalPages }).map((_, index) => (
              <li key={index}>
                <span
                  className={`${currentPage === index ? 'active' : ''}`}
                  onClick={() => setCurrentPage(index)}
                >
                  {index + 1}
                </span>
              </li>
            ))}
            <li className={`${currentPage === totalPages - 1 ? 'd-none' : ''}`}>
              <span onClick={handleNextPage}>
                <i className="fa-regular fa-angle-right"></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
