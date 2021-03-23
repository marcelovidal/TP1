// Importo la función "imprimir" desde "utils.js".
// Notar el uso de "desestructuración".
/**
 * Imprimir por consola y en la página.
 *
 * @param  {...any} variables Variables a imprimir
 */
function imprimir(...variables) {
  // Imprimo por consola:
  console.info(...variables);

  // Obtengo el contenedor para la consola buscando
  // el elemento con ID "consola-html" (en el index.html):
  const consola = document.getElementById('consola-html');

  // Creo elemento HTML <hr> para mostrar una línea de
  // separación:
  consola.appendChild(document.createElement('hr'));

  // Creo elemento HTML <pre>:
  const linea = document.createElement('pre');

  // Uno las variables con "join" separando con un espacio
  // y lo asigno al contenido del elemnto HTML <pre> creado:
  linea.innerText = variables.join(' ');

  // Agrego al contenedor "consola":
  consola.appendChild(linea);
}

// Al iniciar, borro lo que hay en la consola actualmente:
console.clear();

// ================================================================
// 1. Modificar el siguiente código para usar Arrow Functions

function decirHola() {
  return 'Hola';
}
const decir = () => 'Hola si';
const resultado1 = decir();
imprimir('1 Si:', resultado1);

// ================================================================
// 2. Modificar el siguiente código para usar Arrow Functions

function repetir(valor, veces = 10) {
  let resultado = valor;

  for (let i = 0; i < veces; i++) {
    resultado += `!${valor}`;
  }

  return resultado;
}

let repetirSi = (valor, veces = 10) => {
  let resultado = valor;

  for (let i = 1; i < veces; i++) {
    resultado += `!${valor}`;
  }
  return resultado;
};

const resultado = repetirSi(50, 2);
const resultado2 = repetir(50);
imprimir('2 Si:', resultado);

// ================================================================
// 3. Modificar el siguiente código para usar Arrow Functions y
// Templates (`${variable}...`):

function separarPorComas(str1, str2, str3) {
  return str1 + ', ' + str2 + ', ' + str3;
}

let separarPorComasSi = (str1, str2, str3) => `${str1}, ${str2}, ${str3}`;

const resultado3 = separarPorComasSi('Hay', 'que', 'programar!');

imprimir('3 Si:', resultado3);

// ================================================================
// 4. Crear una función que reciba N parámetros, los concatene
// y los separe con comas.
//
// Ejemplos:
//   - Recibe "hola", retorna "hola"
//   - Recibe "hola" y "chau", retorna "hola, chau"
//
// Tips:
//   - https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/parametros_rest
//   - https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/join

function separarPorComasTodo() {
  return '?';
}
let separarPorComasTodoSi = (...palabras) => palabras.join('/ ');

const resultado4 = separarPorComasTodoSi('Hay', 'que', 'programar!');
imprimir('4 Si:', resultado4);

// ================================================================
// 5. Crear una función que reciba un objeto con los datos de la
// persona. Solo debe devolver el nombre y en cuál ciudad vive.
//
// Ejemplos:
//   - Recibe "hola", retorna "hola"
//   - Recibe "hola" y "chau", retorna "hola, chau"
//
// Tips:
//   - https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment

const persona = {
  nombre: 'Luciana',
  edad: 30,
  direccion: {
    nombre: 'Calle Falsa',
    numero: 123,
    ciudad: 'General Roca',
    provincia: 'Río Negro',
  },
};

const {
  nombre,
  direccion: { ciudad },
} = persona;

const quienEs = ({ nombre, direccion: { ciudad } }) => `${nombre}, ${ciudad} `;

imprimir('5 Si:', quienEs(persona));
