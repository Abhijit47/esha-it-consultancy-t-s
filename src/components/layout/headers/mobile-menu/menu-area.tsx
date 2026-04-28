import { Link } from '@tanstack/react-router'
import type { Dispatch, SetStateAction } from 'react'
import ResponsiveMenu from './responsive-menu'

const MobileMenuPopup = ({
  isOpen,
  setIsOpen,
  popupLogo,
}: {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  popupLogo: string
}) => {
  return (
    <div className={`menu__bar-popup ${isOpen ? 'show' : ''}`}>
      <div className="menu__bar-popup-top">
        <div className="logo">
          <Link to="/">
            <img
              src={popupLogo}
              alt="logo"
              width={100}
              height={100}
              className="rounded-full"
            />
          </Link>
        </div>
        <div className="close" onClick={() => setIsOpen(false)}>
          <i className="fal fa-times"></i>
        </div>
      </div>
      <div className="responsive-menu mean-container">
        <div className="mean-bar">
          <div className="mean-nav">
            <ResponsiveMenu />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenuPopup
