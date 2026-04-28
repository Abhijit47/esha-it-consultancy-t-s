import { createFileRoute, Link } from '@tanstack/react-router'

import blogData from '#/components/data/blog-data'
import Social from '#/components/data/social'
import NotFound from '#/components/not-found'
import BreadCrumb from '#/components/pages/common/breadcrumb'

import avatar1 from '/assets/img/avatar/avatar-1.jpg'
import avatar2 from '/assets/img/avatar/avatar-2.jpg'
import avatar3 from '/assets/img/avatar/avatar-3.jpg'
import image from '/assets/img/blog/blog-details.png'
import icon from '/assets/img/icon/blog-details-quote.png'

const url = import.meta.env.VITE_MY_APP_URL

export const Route = createFileRoute('/blogs/$blogId')({
  loader: async ({ params }) => {
    const { blogId } = params
    const singleData = blogData.find((data) => data.id === blogId)
    return singleData
  },
  head: ({ params, loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.title} | Esha IT Consultancy`,
      },
      {
        name: 'description',
        content: 'This is dummy description for blog details page.',
      },

      // Open Graph
      { property: 'og:title', content: loaderData?.title },
      {
        property: 'og:description',
        content: 'This is dummy description for blog details page.',
      },
      { property: 'og:image', content: loaderData?.image },
      { property: 'og:type', content: 'article' },
      {
        property: 'og:url',
        content: `${url}/blogs/${params.blogId}`,
      },

      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: loaderData?.title },
      {
        name: 'twitter:description',
        content: 'This is dummy description for blog details page.',
      },
      { name: 'twitter:image', content: loaderData?.image },
      { name: 'twitter:creator', content: loaderData?.name },
      { name: 'twitter:site', content: '@EshaITConsultancy' },
      {
        name: 'twitter:url',
        content: `${url}/blogs/${params.blogId}`,
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: `${url}/blogs/${params.blogId}`,
      },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: loaderData?.title,
          description: 'This is dummy description for blog details page.',
          image: loaderData?.image,
          author: {
            '@type': 'Person',
            name: loaderData?.name,
          },
          datePublished: loaderData?.date,
        }),
      },
    ],
  }),
  component: RouteComponent,
  notFoundComponent: NotFound,
})

function RouteComponent() {
  const { blogId } = Route.useParams()
  const singleData = blogData.find((data) => data.id === blogId)

  const firstThreeWords =
    singleData?.title.split(' ').slice(0, 3).join(' ') + '...'

  return (
    <main>
      <BreadCrumb title={firstThreeWords} innerTitle={singleData?.title} />

      <div className="blog__details section-padding">
        <div className="container">
          <div className="row gy-4 flex-wrap-reverse">
            <div className="col-xl-8">
              <div className="blog__details-thumb">
                <span className="date">{singleData?.date} September 2024</span>
                <img
                  className="img__full"
                  src={singleData?.image}
                  alt="blog-details-image"
                />
              </div>
              <div className="blog__details-content">
                <div className="blog__details-content-top">
                  <span>
                    <i className="far fa-user"></i>
                    by Admin
                  </span>
                  <span>
                    <i className="far fa-folder-open"></i>
                    Category
                  </span>
                  <span>
                    <i className="far fa-comments"></i>
                    Comments (05)
                  </span>
                </div>
                <h2>Transforming businesses through technology</h2>
                <p>
                  IT Technology is a broad category encompassing all aspects of
                  information the a technology and the application of technology
                  in various industries IT Technology is a broad category
                  encompas aspects of information IT Technology is a broad
                  category encompassing all aspects
                </p>
                <p>
                  IT Technology is a broad category encompassing all aspects of
                  information the a technology and the application of technology
                  in various industries IT is a broad category{' '}
                </p>
                <div className="blog__details-quote">
                  <div className="blog__details-quote-top">
                    <div className="blog__details-quote-avatar">
                      <div className="blog__details-quote-avatar-wrapper">
                        <img src={avatar1} alt="image" />
                      </div>
                      <h4>Mark wood</h4>
                    </div>
                    <div className="blog__details-quote-icon">
                      <img src={icon} alt="image" />
                    </div>
                  </div>
                  <div className="blog__details-quote-content">
                    <p>
                      Real estate is a lucrative industry that involves the
                      buying selling and renting properties It the encompasses
                      residential commercial and industrial properties. Real
                      estate agents play a and crucial role in facilitating at
                      transactions and helping commercial, and industrial
                    </p>
                  </div>
                </div>
                <h2>Showcase your talent with our portfolio</h2>
                <p>
                  Aliquam eros justo, posuere loborti viverra laoreet matti
                  ullamcorper posuere viverra Aliquam justo a posuere lobortis,
                  viverra laoreet augue mattis fermentum ullamcorper{' '}
                </p>
                <p>
                  IT Technology is a broad category encompassing all aspects of
                  information the a technology and the application of technology
                  in various industries IT Technology is a broad category
                  encompas aspects of information IT Technology is a broad
                  category encompassing all aspects
                </p>
                <div className="blog__details-portfolio">
                  <div className="blog__details-portfolio-left">
                    <img src={image} alt="image" />
                  </div>
                  <ul className="blog__details-portfolio-middle">
                    <li>
                      <i className="fas fa-check-circle"></i>
                      Data Analytics Consulting
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>
                      Mobile App Development Services
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>
                      IT Project Management Services
                    </li>
                  </ul>
                  <div className="blog__details-portfolio-right">
                    <img src={image} alt="image" />
                  </div>
                </div>
                <p>
                  IT Technology is a broad category encompassing all aspects of
                  information the a technology and the application of technology
                  in various industries IT Technology is a broad category
                  encompas aspects of information IT Technology is a broad
                  category encompassing
                </p>
              </div>
              <div className="blog__details-pagination">
                <div className="blog__details-pagination-btn blog__details-pagination-prev">
                  <Link to="." className="pagination-btn">
                    <i className="fas fa-arrow-left"></i>
                  </Link>
                  <div className="blog__details-pagination-text">
                    <span>Previous post</span>
                    <span>Insure your peace of mind</span>
                  </div>
                </div>
                <div className="blog__details-pagination-btn blog__details-pagination-next">
                  <div className="blog__details-pagination-text">
                    <span>Next post</span>
                    <span>Coverage you can count on</span>
                  </div>
                  <Link to="." className="pagination-btn">
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="blog__details-comments">
                <h3>3 Comment</h3>
                <div className="blog__details-single-comment">
                  <div className="blog__details-single-comment-user-pic">
                    <img src={avatar2} alt="image" />
                  </div>
                  <div className="blog__details-single-comment-body">
                    <div className="blog__details-single-comment-body-top">
                      <h5>Stanio lainto</h5>
                      <span>February 16, 2024</span>
                      <Social />
                    </div>
                    <p>
                      Ished fact that a reader will be distrol acted bioii
                      the.ished fact that a reader will be distrol acted laoreet
                      Aliquam fact that a reader will be distrol{' '}
                    </p>
                    <Link to="." className="comment-reply-btn">
                      Reply
                    </Link>
                  </div>
                </div>
                <div className="blog__details-single-comment">
                  <div className="blog__details-single-comment-user-pic">
                    <img src={avatar3} alt="image" />
                  </div>
                  <div className="blog__details-single-comment-body">
                    <div className="blog__details-single-comment-body-top">
                      <h5>Court Henry</h5>
                      <span>February 16, 2024</span>
                      <Social />
                    </div>
                    <p>
                      Ished fact that a reader will be distrol acted bioii
                      the.ished fact that a reader will be distrol acted laoreet
                      Aliquam fact that a reader will be distrol{' '}
                    </p>
                    <Link to="." className="comment-reply-btn">
                      Reply
                    </Link>
                  </div>
                </div>
              </div>
              <form action="#" className="blog__details-comment-form">
                <h3>Leave a comment</h3>
                <p>
                  By using form u agree with the message sorage, you can contact
                  us directly now By using form agree with the message sorage,
                  you can contact us directly now
                </p>
                <input type="text" placeholder="Name" />
                <textarea placeholder="Message here..."></textarea>
                <input type="submit" value="Sent Message" />
              </form>
            </div>
            <div className="col-xl-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

const BlogSidebar = () => {
  const blogPost = blogData.slice(0, 3)
  return (
    <div className="all__sidebar dark_image ml-25 xl-ml-0">
      <div className="all__sidebar-item">
        <h6>Search</h6>
        <div className="all__sidebar-item-search">
          <form action="#">
            <input type="text" placeholder="Search....." />
            <button type="submit" title="search">
              <i className="fal fa-search"></i>
            </button>
          </form>
        </div>
      </div>
      <div className="all__sidebar-item">
        <h6>Recent Post</h6>
        <div className="all__sidebar-item-post">
          {blogPost.map((data, id) => (
            <div className="post__item" key={id}>
              <div className="post__item-image">
                <Link
                  // to={`/blog/${data.id}`}
                  to={`.`}
                >
                  <img src={data.image} alt="" />
                </Link>
              </div>
              <div className="post__item-title">
                <h6>
                  <Link
                    // to={`/blog/${data.id}`}
                    to={`.`}
                  >
                    {data.title}
                  </Link>
                </h6>
                <span>
                  <i className="far fa-calendar-alt"></i>Apr {data.date}, 2024
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="all__sidebar-item">
        <h6>Popular Tag</h6>
        <div className="all__sidebar-item-tag">
          <ul>
            {blogData.map((data, id) => {
              const words = data.title.split(' ')
              const firstWord = words[0]
              const newTitle =
                words.find((word) => word.length > 3) || firstWord
              return (
                <li key={id}>
                  <Link
                    // to={`/blog/${data.id}`}
                    to={'.'}
                  >
                    {newTitle}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
