export default function validarCrearProducto(values) {

    let errores = {};

    // Validar el nombre del usuario
    if(!values.nombre) {
        errores.nombre = "El Nombre es obligatorio";
    }

    // validar empresa
    if(!values.empresa) {
        errores.empresa = "Nombre de Empresa es obligatorio"
    }
    
    // validar la url
    if(!values.url) {
        errores.url = 'La URL del producto es obligatoria';
    } else if( !/^(ftp|http|https):\/\/[^ "]+$/.test(values.url) ) {
        errores.url = "URL mal formateada o no válida"
    }

    // validar descripción.
    if(!values.descripcion) {
        errores.descripcion = "Agrega una descripción de tu producto"
    }


    return errores;
}