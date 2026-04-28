import Social from '@/components/data/social'
import { Link } from '@tanstack/react-router'
import type { Dispatch, SetStateAction } from 'react'
import logo2 from '/assets/img/logo-2.png'

const SideBar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <>
      <div
        className={`header__area-menubar-right-sidebar-popup ${isOpen ? 'active' : ''}`}
      >
        <div className="sidebar-close-btn" onClick={() => setIsOpen(false)}>
          <i className="fal fa-times"></i>
        </div>
        <div className="header__area-menubar-right-sidebar-popup-logo">
          <Link to="/">
            <img className="logo_one" src={logo2} alt="logo" />
          </Link>
        </div>
        <p>
          The insurance company assumes the financial risk of covering these
          events in exchange for the premiums paid by the policyholder. There
          are many different types of insurance,
        </p>
        <div className="header__area-menubar-right-sidebar-popup-contact">
          <h4 className="mb-30">Get In Touch</h4>
          <div className="header__area-menubar-right-sidebar-popup-contact-item">
            <div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
              <i className="fal fa-phone-alt icon-animation"></i>
            </div>
            <div className="header__area-menubar-right-sidebar-popup-contact-item-content">
              <span>Call Now</span>
              <h6>
                <a href="tel:+125(895)658568">+125 (895) 658 568</a>
              </h6>
            </div>
          </div>
          <div className="header__area-menubar-right-sidebar-popup-contact-item">
            <div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
              <i className="fal fa-envelope"></i>
            </div>
            <div className="header__area-menubar-right-sidebar-popup-contact-item-content">
              <span>Quick Email</span>
              <h6>
                <a href="mailto:info.help@gmail.com">info.help@gmail.com</a>
              </h6>
            </div>
          </div>
          <div className="header__area-menubar-right-sidebar-popup-contact-item">
            <div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
              <i className="fal fa-map-marker-alt"></i>
            </div>
            <div className="header__area-menubar-right-sidebar-popup-contact-item-content">
              <span>Office Address</span>
              <h6>
                <a href="https://google.com/maps" target="_blank">
                  PV3M+X68 Welshpool United Kingdom
                </a>
              </h6>
            </div>
          </div>
        </div>
        <div className="header__area-menubar-right-sidebar-popup-social social__icon">
          <Social />
        </div>
      </div>
      <div className={`sidebar-overlay ${isOpen ? 'show' : ''}`}></div>
    </>
  )
}

export default SideBar
