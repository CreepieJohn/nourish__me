import { useEffect } from 'react';
import validacion from '../../logInService'
import '../styles/login.css'

export function LOGIN() {
  
    useEffect(() => {
      const boton = document.getElementById("btn__logIn");

      if (boton) {
        boton.addEventListener("click", validacion);
      }

      return () => {
        if (boton) {
          boton.removeEventListener("click", validacion);
        }
      }
    }, 
    []);

  return (
    <>
      <body className="login">
        <div className="container__login">
          {/* <img src={ logo } alt="logo" /> */}
          <h2>INICIAR SESIÓN</h2>
          <form onSubmit={ (e) => e. preventDefault() }>
              <div className="input__box">
                  <input type="text" id="usuario" required />
                  <label>Usuario</label>
              </div>
              <div className="input__box">
                  <input type="password" id="contraseña" required />
                  <label>Contraseña</label>
              </div>
              <div className="btn__form">
                <button type="submit" className="btn__logIn" id="btn__logIn">Ingresar</button>
              </div>
          </form>
          <small className="copyright">&copy; 2023 Khaos Company</small>
        </div>
      </body>
    </>
    )
  }