
const validacion = () => {

    // Obtén los valores de los inputs (supongamos que tienes dos campos de entrada con IDs 'input1' e 'input2')
    const usuario = document.getElementById("usuario").value;
    const contraseña = document.getElementById("contraseña").value;

    // Realiza una solicitud fetch para obtener los datos de db.json
    fetch('http://localhost:3000/db.json')
    .then(response => response.json())
    .then(data => {
        // Comparar los datos de db.json con los valores de los inputs
        const dbData = data.perfil[0]; // Accede al primer perfil en el array
        if ( usuario === dbData.usuario && contraseña === dbData.contraseña) {
        // Los valores de los inputs coinciden con los datos de db.json
        alert('Los valores coinciden.');
        } else {
        // Los valores de los inputs no coinciden con los datos de db.json
        alert('Los valores no coinciden.');
        }
    })
    .catch(error => {
        // Maneja errores de la solicitud fetch
        console.error('Error al obtener los datos de db.json:', error);
    });
}

export default validacion