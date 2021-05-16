export default function validateCodeEmail(values) {

    let erros = {};

    // validar el email
    if(!values.codeValidation) {
        erros.codeValidation = "Codigo invalido";
    }

    return erros;
}