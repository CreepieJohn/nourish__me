import { Link } from 'react-router-dom'
import imageUrls from '../images/images.jsx'
import '../styles/login.css'

export const LOG_ERROR = () => {
    return (
      <>
        <body className="login">
            <div className="container__logError">
                <img src={ imageUrls.image1 } className="logo__logError" alt="Nourish me" />
                    <h2>El Usuario o la Contraseña no son válidos</h2>
                        <div className="btn__form">
                            <Link to="/">
                                <button type="submit" className="btn__logError" id="btn__logError">Intente de nuevo</button>
                            </Link>
                        </div>
                <small className="copyright">&copy; 2023 Khaos Company</small>
            </div>
        </body>
      </>
    )
}