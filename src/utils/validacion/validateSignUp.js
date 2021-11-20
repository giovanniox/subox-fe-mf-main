export default function validateSignUp(values) {
  let erros = {}

  // Validar el nombre del usuario
  if (!values.name) {
    erros.name = 'El Nombre es obligatorio'
  }

  // validar el email
  if (!values.email) {
    erros.email = 'El Email es Obligatorio'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    erros.email = 'Email no válido'
  }

  // validar el password
  if (!values.password) {
    erros.password = 'El password es obligatorio'
  } else if (values.password.length < 6) {
    erros.password = 'El password debe ser de al menos 6 caracteres'
  }

  if (!values.rePassword) {
    if (values.password && values.password.length >= 6) {
      erros.rePassword = 'La validaciond de contraseña es obligatoria'
    }
  } else {
    if (values.password && values.password.length >= 6) {
      if (values.password !== values.rePassword) {
        erros.rePassword = 'Las contraseñas no coinciden'
      }
    }
  }

  return erros
}

export const INIT_STATE = {
  name: '',
  email: '',
  password: '',
  rePassword: '',
}
