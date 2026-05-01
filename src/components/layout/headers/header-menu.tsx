import { Link } from '@tanstack/react-router'

const MainMenu = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>

        <li className="menu-item-has-children">
          <a href="#">
            Pages <i className="fas fa-angle-down"></i>
          </a>
          <ul className="sub-menu">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/testimonial">Testimonials</Link>
            </li>
            <li>
              <Link to="/pricing-plan">Pricing Plan</Link>
            </li>
            <li>
              <Link to="/faq">Faq</Link>
            </li>
            <li className="menu-item-has-children">
              <Link to="/team">
                Team<i className="fas fa-angle-right"></i>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/team">Team Style 01</Link>
                </li>
                <li>
                  <Link to="/team/team-two">Team Style 02</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/request-quote">Request Quote</Link>
            </li>
            <li>
              <a href="/404">404</a>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link to="/services">
            Services <i className="fas fa-angle-down"></i>
          </Link>
          <ul className="sub-menu">
            <li>
              <Link to="/services">Services 01</Link>
            </li>
            <li>
              <Link to="/services/services-two">Services 02</Link>
            </li>
            {/* <li>
              <Link to="/services/data-analytics">Services Details</Link>
            </li> */}
          </ul>
        </li>
        <li className="menu-item-has-children">
          <a href="#">
            Portfolio <i className="fas fa-angle-down"></i>
          </a>
          <ul className="sub-menu">
            <li>
              <Link to="/2-columns">2 Columns</Link>
            </li>
            <li>
              <Link to="/3-columns">3 Columns</Link>
            </li>
            <li>
              <Link to="/4-columns">4 Columns</Link>
            </li>
            {/* <li>
              <Link to="/gateway-integration">Portfolio Details</Link>
            </li> */}
          </ul>
        </li>

        <li>
          <Link to="/blogs">Blogs</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </>
  )
}

export default MainMenu
