//import { useState } from "react"
// import logo from "./assets/logo.jpg"
import '../styles/login.css'

export function LOGIN() {

    return (
    <>
      <body className="login">
        <div className="container__login">
          {/* <img src={ logo } alt="logo" /> */}
          <h2>INICIAR SESIÓN</h2>
          <form onSubmit={ (e) => e. preventDefault() }>
              <div className="input__box">
                  <input type="text" required />
                  <label>Usuario</label>
              </div>
              <div className="input__box">
                  <input type="password" required />
                  <label>Contraseña</label>
              </div>
              <div className="btn__form">
                <button type="submit">Ingresar</button>
              </div>
          </form>
          <small className="copyright">&copy; 2023 Khaos Company</small>
        </div>
      </body>
    </>
    )
  }