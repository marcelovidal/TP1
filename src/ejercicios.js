// Importo la función "imprimir" desde "utils.js".
// Notar el uso de "desestructuración".
import { imprimir } from './utils';

// Al iniciar, borro lo que hay en la consola actualmente:
console.clear();

// ================================================================
// 1. Modificar el siguiente código para usar Arrow Functions

function decirHola() {
  return 'Hola';
}

const resultado1 = decirHola();
imprimir('1:', resultado1);

// ================================================================
// 2. Modificar el siguiente código para usar Arrow Functions

function repetir(valor, veces = 10) {
  let resultado = valor;

  for (let i = 0; i < veces; i++) {
    resultado += `!${valor}`;
  }

  return resultado;
}

const resultado2 = repetir(50);
imprimir('2:', resultado2);

// ================================================================
// 3. Modificar el siguiente código para usar Arrow Functions y
// Templates (`${variable}...`):

function separarPorComas(str1, str2, str3) {
  return str1 + ', ' + str2 + ', ' + str3;
}

const resultado3 = separarPorComas('Hay', 'que', 'programar!');
imprimir('3:', resultado3);

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

const resultado4 = separarPorComasTodo('Hay', 'que', 'programar!');
imprimir('4:', resultado4);

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

function quienEs() {
  return '?';
}

const resultado5 = quienEs(persona);
imprimir('5:', resultado5);
