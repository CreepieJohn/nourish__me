import { Link, Outlet } from "react-router-dom"
// import IMAGES from '../images/images.jsx'

export const HEADER = () => {
  return (
    <>
        <header className="header__root">
            <Link to='/' className="logo" > 
              {/* <img src={IMAGES.image1} alt="Nourish me" />             */}
            </Link>
            <button className="settings"></button>
            <button className="log__out"></button>
        </header>
        <Outlet />
    </>
  )
}
