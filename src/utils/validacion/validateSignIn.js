export default function validateSignIn(valores) {

    let erros = {};

    // validar el email
    if(!valores.email) {
        erros.email = "El Email es Obligatorio";
    } else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email) ) {
        erros.email = "Email no válido"
    }

    // validar el password
    if(!valores.password) {
        erros.password = "El password es obligatorio";
    } else if( valores.password.length < 6 ) {
        erros.password = 'El password debe ser de al menos 6 caracteres'
    }

    return erros;
}