/* Conciciones de encritacion 
1. LLaves de encriptación (REALIZADO)
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
2. SOLO DEBE PERMITIR MAYUSCULAS. (REALIZADO)
3. NO DEBE PERMITIR EL USO DE CARACTERES ESPECIALES Y TILDES.
4. DEBE PERMITIR DESEMCRIPTAR LA PALABRA (REALIZADO)
5. EL USUARIO DEBE PODER SELECCIONAR SI ENCRIPTA O DESEMCRIPTA UN TEXTO.
6. SE DEBE AGGREGAR UN BOTÓN DE COPIAR.
*/

function encriptar() {
    let inputText = document.getElementById('inputText').value.toUpperCase();
    // Validación de la caja de texto espacio en blanco
    if (inputText == ""){
        mostrarAlerta("Por favor ingresa un texto");
    }
    //Validación de caracteres especiales
    if (contieneCaracterEspecial(inputText)) {
        mostrarAlerta("El texto contiene caracteres especiales o tildes.");
        return; // Salir de la función si hay caracteres especiales
    }
    const textoEnciptado = recorrerCadena(inputText);
    asignarTexto(textoEnciptado, 'resultado')
}

function contieneCaracterEspecial(texto) {
    const expresionRegular = /[^A-Za-z0-9]/;
    return expresionRegular.test(texto);
}

function mostrarAlerta(mensaje) {
    const mensajeAlerta = document.getElementById('mensajeAlerta');
    mensajeAlerta.textContent = mensaje;
    mensajeAlerta.style.color = 'red';
    mensajeAlerta.style.fontWeight = 'bold';

    // Puedes agregar lógica adicional, como desaparecer el mensaje después de unos segundos
    setTimeout(() => {
        mensajeAlerta.textContent = '';
    }, 5000); // Ocultar el mensaje después de 5 segundos (5000 milisegundos)
}

function recorrerCadena(cadena) {
    let nuevaCadena = ''
    for (let i = 0; i < cadena.length; i++) {
        let caracter = '';
        if (cadena[i] === 'A'){
            caracter = 'AI';
        }else if(cadena[i] === 'E'){
            caracter = 'ENTER';    
        }else if(cadena[i] === 'I'){
            caracter = 'IMES';    
        }
        else if(cadena[i] === 'O'){
            caracter = 'OBER';    
        }
        else if(cadena[i] === 'U'){
            caracter = 'UFAT';    
        }else caracter = cadena[i];
        nuevaCadena = nuevaCadena + caracter;
        }
    return nuevaCadena
}

function asignarTexto(texto, elemento){
    let elementoHtml = document.getElementById(elemento)
    console.log("este es el id:" + elementoHtml);
    elementoHtml.innerHTML = texto;
}

function desencriptar() {
    const inputText = document.getElementById('inputText').value;
    const textoDesemcriptado = reemplazarConjuntO(inputText)
    asignarTexto(textoDesemcriptado, 'resultado')
}

function reemplazarConjuntO (cadena) {
    let palabras = cadena.split(" ");
    const conjuntosABuscar = [
        {buscar: 'AI', reemplazar : 'A'},
        {buscar: 'ENTER', reemplazar : 'E'},
        {buscar: 'IMES', reemplazar : 'I'},
        {buscar: 'OBER', reemplazar : 'O'},
        {buscar: 'UFAT', reemplazar : 'U'}
    ]
    for (let i = 0; i < palabras.length; i++) {
        // Iterar sobre cada conjunto a buscar
        for (const conjunto of conjuntosABuscar) {
            // busca todas las coincidencias que existan en la palabra
            while (palabras[i].includes(conjunto.buscar)) { 
                //reemplaza las coincidencias encontraras y almacena en array palabras.
                palabras[i] = palabras[i].replace(conjunto.buscar, conjunto.reemplazar);
            }
        }
    }
    //retorna la cadena de texto encriptada separada por un " "
    return palabras.join(" ");
}
function copiarTexto() {
    const resultadoElement = document.getElementById('resultado');
    const textoCopiado = resultadoElement.innerText;

    // Crear un elemento de texto temporal y copiar el resultado
    const textarea = document.createElement('textarea');
    textarea.value = textoCopiado;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}
