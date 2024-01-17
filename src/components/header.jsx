import { Link, useLocation } from 'react-router-dom';
import imageUrls from '../images/images.jsx'

export const HEADER = () => { 

  const location = useLocation();
  
    if (location.pathname === '/') {
      return ("");
    }

    if (location.pathname === '/logError') {
      return ("");
    }

  return (
    <>
      <header className="header__root">
        <Link to="/home">
          <img src={imageUrls.image1} className="logo__header" alt="Nourish me" />
        </Link>
        <div className="link__box">
          <Link to="/settings" className="link">
            <img src={imageUrls.imageSetting} className="icon__header settings" alt="Settings" />
          </Link>
          <Link to="/login">
            <img src={imageUrls.imageLogOut} className="icon__header" alt="Log Out" />          
          </Link>
        </div>
      </header>
    </>
  )
}