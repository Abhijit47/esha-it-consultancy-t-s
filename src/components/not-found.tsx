import { Link } from '@tanstack/react-router'
import image from '/assets/img/404/404.png'

export default function NotFound() {
  return (
    <div className="error-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7">
            <div className="error-img">
              <img src={image} alt="image" width={'100%'} height={'100%'} />
            </div>
            <Link to="/" className="btn-two m-auto d-table">
              Go Back
              <i className="fas fa-chevron-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
