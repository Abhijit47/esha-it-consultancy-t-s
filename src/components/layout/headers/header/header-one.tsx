import { useEffect, useState } from 'react'
import MainMenu from '../header-menu'
import MobileMenuPopup from '../mobile-menu/menu-area'
import SideBar from '../offcanvas'
import Search from '../search'
// import logo1 from '/assets/img/logo-1.png'
// import logo2 from '/assets/img/logo-2.png'

const HeaderOne = ({ variant }: { variant?: string }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [menuSidebar, setMenuSidebar] = useState(false)
  const [search, setSearch] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    })
  }, [])
  return (
    <>
      <div className="top__bar">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-md-7">
              <div className="top__bar-left">
                <a href="tel:(629)555-0129">
                  <i className="fas fa-phone-alt"></i>(629) 555-0129
                </a>
                <a href="mailto:info@example.com">
                  <i className="fas fa-envelope"></i>info@example.com
                </a>
              </div>
            </div>
            <div className="col-xl-5 col-md-5">
              <div className="top__bar-right">
                <a href="https://www.google.com/maps">
                  <i className="fas fa-map-marker-alt"></i>6391 Elgin St.
                  Celina, 10299
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`header__area ${variant ? variant : ''} header__sticky ${isSticky ? 'header__sticky-sticky-menu' : ''}`}
      >
        <div className="container">
          <div className="header__area-menubar">
            <div className="header__area-menubar-left">
              <div className="header__area-menubar-left-logo">
                <a href="/">
                  <img src={'/logo.jpeg'} alt="logo" height={100} width={100} />
                </a>
              </div>
            </div>
            <div className="header__area-menubar-center">
              <div className="header__area-menubar-center-menu">
                <MainMenu />
              </div>
            </div>
            <div className="header__area-menubar-right">
              <div className="header__area-menubar-right-box">
                <div className="header__area-menubar-right-box-search">
                  <div className="search">
                    <span
                      className="header__area-menubar-right-box-search-icon open"
                      onClick={() => setSearch(true)}
                    >
                      <i className="flaticon-loupe"></i>
                    </span>
                  </div>
                </div>
                <div className="header__area-menubar-right-box-sidebar">
                  <div
                    className="header__area-menubar-right-box-sidebar-popup-icon"
                    onClick={() => setSidebarOpen(true)}
                  >
                    <span className="bar-1"></span>
                    <span className="bar-2"></span>
                    <span className="bar-3"></span>
                  </div>
                </div>
                <div className="header__area-menubar-right-box-btn">
                  <a className="btn-one" href="/request-quote">
                    Get Quote<i className="fas fa-arrow-right"></i>
                  </a>
                </div>
                <div className="header__area-menubar-right-responsive-menu menu__bar">
                  <i
                    className="flaticon-menu-1"
                    onClick={() => setMenuSidebar(true)}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SideBar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <MobileMenuPopup
        isOpen={menuSidebar}
        setIsOpen={setMenuSidebar}
        popupLogo={'/logo.jpeg'}
      />
      <Search isOpen={search} setIsOpen={setSearch} />
    </>
  )
}

export default HeaderOne
