//======================================================================
// JSON
//======================================================================
var formulario = document.querySelector('#formulario');
var erroresUl = document.querySelector('#errores');
var inputNombre = document.querySelector('#nombre');
var inputCelular = document.querySelector('#celular');
var inputCorreo = document.querySelector('#correo');
var botonGuardar = document.querySelector('#guardar');
//======================================================================
// FUNCIONES
//======================================================================
/**
 * Método que valida y enviar el formulario
 */
function enviarFormulario() {
    var errores = [];
    // Validamos nombre
    //// ¿Es un numero?
    if (parseInt(inputNombre.value))
        errores.push('El nombre no puede ser un número');
    if (isNaN(parseInt(inputCelular.value)))
        errores.push('El campo celular solo puede llevar números');
    //// Es obligatorio
    if (inputNombre.value === '')
        errores.push('El nombre es obligatorio');
    if (inputCelular.value === '')
        errores.push('El apellido es obligatorio');
    if (inputCorreo.value === '')
        errores.push('El correo es obligatorio');
    // Mostramos los errores
    imprimirErrores(errores);
    // Enviamos formulario
    if (errores.length === 0)
        formulario.submit();
}
/**
 * Imprime todos los errores en el UL
 * @param errores Array - Frases de error
 */
function imprimirErrores(errores) {
    // Limpiamos los errores anteriores en HTML
    erroresUl.textContent = '';
    // Generamos todos LI con su mensaje
    errores.forEach(function (mensaje) {
        // Creamos nuevo LI
        var nuevoLi = document.createElement('li');
        nuevoLi.textContent = mensaje;
        // Lo añadimos dentro de nuestro UL
        erroresUl.appendChild(nuevoLi);
    });
}
//======================================================================
// EVENTOS
//======================================================================
botonGuardar.addEventListener('click', enviarFormulario);
