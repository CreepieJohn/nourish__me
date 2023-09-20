import { useLocation } from "react-router-dom";

export const FOOTER = () => {

  const location = useLocation();
  
    if (location.pathname === '/login') {
      return ("");
    }

  return (
    
    <footer className="footer__bar">
        <small className="copyright">&copy; 2023 Khaos Company</small>
    </footer>

  )
}
