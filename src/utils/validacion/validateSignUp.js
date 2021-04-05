export default function validateSignUp(values) {

    let erros = {};

    // Validar el nombre del usuario
    if(!values.userName) {
        erros.userName = "El Nombre es obligatorio";
    }

    // validar el email
    if(!values.email) {
        erros.email = "El Email es Obligatorio";
    } else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) ) {
        erros.email = "Email no válido"
    }

    // validar el password
    if(!values.password) {
        erros.password = "El password es obligatorio";
    } else if( values.password.length < 6 ) {
        erros.password = 'El password debe ser de al menos 6 caracteres'
    }

    return erros;
}