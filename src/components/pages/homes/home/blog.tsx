import blogData from '@/components/data/blog-data'
import { Link } from '@tanstack/react-router'

const Blog = () => {
  return (
    <div className="blog__one section-padding pt-lg-0">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-xl-6 col-lg-6">
            <div className="blog__one-title">
              <span className="subtitle-one">Blog And news</span>
              <h2>Exploring Technology</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center gy-4">
          {blogData.slice(0, 3)?.map((data, id) => (
            <div className="col-xl-4 col-lg-6" key={id}>
              <div className="blog__one-single-blog">
                <div className="blog__one-single-blog-image">
                  <Link to={'/blogs/$blogId'} params={{ blogId: data.id }}>
                    <img src={data.image} alt="blog" />
                  </Link>
                </div>
                <div className="blog__one-single-blog-date">
                  <span className="date">{data.date}</span>
                  <span className="month">Mar</span>
                </div>
                <div className="blog__one-single-blog-content">
                  <div className="blog__one-single-blog-content-top">
                    <span>
                      <i className="far fa-user"></i>by Admin
                    </span>
                    <span>
                      <i className="far fa-comment-dots"></i>Comments (
                      {data.comment})
                    </span>
                  </div>
                  {/* <a className="blog-heading" href={`/blog/${data.id}`}> */}
                  <Link
                    className="blog-heading"
                    to={'/blogs/$blogId'}
                    params={{ blogId: data.id }}
                  >
                    {data.title}
                  </Link>
                  {/* </a> */}
                  {/* <a className="btn-three" href={`/blog/${data.id}`}> */}
                  <Link
                    className="btn-three"
                    to={'/blogs/$blogId'}
                    params={{ blogId: data.id }}
                  >
                    Read More<i className="fas fa-angle-right"></i>
                  </Link>
                  {/* </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
