//======================================================================

// JSON

//======================================================================

let formulario: HTMLFormElement = document.querySelector('#formulario');
let erroresUl: HTMLUListElement = document.querySelector('#errores');
let inputNombre: HTMLInputElement = document.querySelector('#nombre');
let inputCelular: HTMLInputElement = document.querySelector('#celular');
let inputCorreo: HTMLInputElement = document.querySelector('#correo');
let botonGuardar: HTMLButtonElement = document.querySelector('#guardar');

//======================================================================

// FUNCIONES

//======================================================================


/**
 * Método que valida y enviar el formulario
 */
function enviarFormulario(): void {
    
    let errores: string[] = [];

    // Validamos nombre

    //// ¿Es un numero?
    if (parseInt(inputNombre.value)) errores.push('El nombre no puede ser un número')

    if (isNaN(parseInt(inputCelular.value)))errores.push('El campo celular solo debe números')

    //// Es obligatorio
    if (inputNombre.value === '') errores.push('El nombre es obligatorio')
    if (inputCelular.value === '') errores.push('El apellido es obligatorio')
    if (inputCorreo.value === '') errores.push('El correo es obligatorio')

    // Mostramos los errores

    imprimirErrores(errores)

    // Enviamos formulario

    if (errores.length === 0) formulario.submit()
}

/**
 * Imprime todos los errores en el UL
 * @param errores Array - Frases de error
 */
function imprimirErrores(errores: string[]): void {
    // Limpiamos los errores anteriores en HTML

    erroresUl.textContent = '' 
    // Generamos todos LI con su mensaje

    errores.forEach(function(mensaje) {
        // Creamos nuevo LI

        let nuevoLi = document.createElement('li')
        nuevoLi.textContent = mensaje
        // Lo añadimos dentro de nuestro UL

        erroresUl.appendChild(nuevoLi)
    })
}

//======================================================================

// EVENTOS

//======================================================================


botonGuardar.addEventListener('click', enviarFormulario)
