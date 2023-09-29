import { useNavigate } from 'react-router-dom';
import imageUrls from '../images/images.jsx'
import '../styles/login.css'

export function LOGIN() {
    const navigate = useNavigate();

    const validarCampos = () => {
      const usuario = document.getElementById("usuario").value;
      const contraseña = document.getElementById("contraseña").value;

      if (usuario.trim() === "" || contraseña.trim() === "") {
        alert("Por favor, complete todos los campos.");
        return false; // Evita que se ejecute validacion si los campos no están llenos
      }

      return true; // Los campos están llenos, se puede ejecutar validacion
    };

    const validacion = () => {
      
      if (!validarCampos()) {
          return; // No continuar si los campos no están llenos
        }

      // Obtén los valores de los inputs (supongamos que tienes dos campos de entrada con IDs 'input1' e 'input2')
      const usuario = document.getElementById("usuario").value;
      const contraseña = document.getElementById("contraseña").value;

      // Realiza una solicitud fetch para obtener los datos de db.json
      fetch('http://localhost:3000/dataBase/db.json')
      .then(response => response.json())
      .then(data => {

          // Comparar los datos de db.json con los valores de los inputs
          const dbData = data.uservalidation[0]; // Accede al primer perfil en el array

          if ( usuario === dbData.usuario && contraseña === dbData.contraseña) {

          // Los valores de los inputs coinciden con los datos de db.json
            navigate("/home");
          
          } else {
          // Los valores de los inputs no coinciden con los datos de db.json
            navigate("/logError");
          }
      })
      .catch(error => {
          // Maneja errores de la solicitud fetch
          console.error('Error al obtener los datos de db.json:', error);
      });
    }

  return (
    <>
      <body className="login">
        <div className="container__login">
          <img src={ imageUrls.image1 } className="logo__login" alt="Nourish me" />
          <h2>INICIAR SESIÓN</h2>
          <form onSubmit={ (e) => e. preventDefault() }>
              <div className="input__box">
                  <input type="text" id="usuario" autoComplete="off" required />
                  <label>Usuario</label>
              </div>
              <div className="input__box">
                  <input type="password" id="contraseña" required />
                  <label>Contraseña</label>
              </div>
              <div className="btn__form">
                <button type="submit" className="btn__logIn" id="btn__logIn" onClick={validacion}>Ingresar</button>
              </div>
          </form>
          <small className="copyright">&copy; 2023 Khaos Company</small>
        </div>
      </body>
    </>
    )
  }