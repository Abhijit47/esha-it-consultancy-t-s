import { type Dispatch, type SetStateAction } from 'react'

const Search = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  addClass?: string
}) => {
  return (
    <>
      <div
        className={`header__area-menubar-right-box-search-box ${isOpen ? 'active' : ''}`}
      >
        <form>
          <input type="search" placeholder="Search Here....." />
          <button title="search" type="submit">
            <i className="fal fa-search"></i>
          </button>
        </form>
        <span
          className="header__area-menubar-right-box-search-box-icon"
          onClick={() => setIsOpen(false)}
        >
          <i className="fal fa-times"></i>
        </span>
      </div>
    </>
  )
}

export default Search
