import { Link, useLocation } from 'react-router-dom';
import IMAGES from '../images/images.jsx'
import { GrUserSettings, GrLogout } from "react-icons/gr";

export const HEADER = () => {

  const location = useLocation();
  
    if (location.pathname === '/login') {
      return ("");
    }

  return (
    <>
      <header className="header__root">
        <Link to="/home">
          <img src={IMAGES.image1} className="logo__header" alt="Nourish me" />
        </Link>
        <Link to="/settings">
          <span id="GrUserSettings"><GrUserSettings /></span>
        </Link>
        <Link to="/login">
          <span id="GrLogout"><GrLogout /></span>
        </Link>
      </header>
    </>
  )
}