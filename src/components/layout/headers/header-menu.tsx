const MainMenu = () => {
  return (
    <>
      <ul>
        <li className="menu-item-has-children">
          <a href="#">
            Home<i className="fas fa-angle-down"></i>
          </a>
          <ul className="sub-menu">
            <li>
              <a href="/">Home 01</a>
            </li>
            <li>
              <a href="/home-two">Home 02</a>
            </li>
            <li>
              <a href="/home-three">Home 03</a>
            </li>
            <li>
              <a href="/home-four">Home 04</a>
            </li>
            <li>
              <a href="/home-five">Home 05</a>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <a href="#">
            Pages <i className="fas fa-angle-down"></i>
          </a>
          <ul className="sub-menu">
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/testimonial">Testimonials</a>
            </li>
            <li>
              <a href="/pricing-plan">Pricing Plan</a>
            </li>
            <li>
              <a href="/faq">Faq</a>
            </li>
            <li className="menu-item-has-children">
              <a href="#">
                Team<i className="fas fa-angle-right"></i>
              </a>
              <ul className="sub-menu">
                <li>
                  <a href="/team">Team Style 01</a>
                </li>
                <li>
                  <a href="/team-two">Team Style 02</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/request-quote">Request Quote</a>
            </li>
            <li>
              <a href="/404">404</a>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <a href="#">
            Services <i className="fas fa-angle-down"></i>
          </a>
          <ul className="sub-menu">
            <li>
              <a href="/services">Services 01</a>
            </li>
            <li>
              <a href="/services-two">Services 02</a>
            </li>
            <li>
              <a href="/services/data-analytics">Services Details</a>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <a href="#">
            Portfolio <i className="fas fa-angle-down"></i>
          </a>
          <ul className="sub-menu">
            <li>
              <a href="/portfolio/2-columns">2 Columns</a>
            </li>
            <li>
              <a href="/portfolio/3-columns">3 Columns</a>
            </li>
            <li>
              <a href="/portfolio/gateway-integration">Portfolio Details</a>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <a href="#">
            Blog <i className="fas fa-angle-down"></i>
          </a>
          <ul className="sub-menu">
            <li>
              <a href="/blog">Blog Grid</a>
            </li>
            <li>
              <a href="/blog-standard">Blog Standard</a>
            </li>
            <li>
              <a href="/blog/ux-ui-designing-the-future-web-design">
                Blog Details
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </>
  )
}

export default MainMenu
