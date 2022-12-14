
// 29. Inicio de proyectos

/*
console.clear();
console.log('====================');
console.log('    Tabla del 5:   ');
console.log('====================');


const base = 5;
for( let i = 1; i <= 10; i++){
    console.log(`${base} * ${i} = ${ base*i }`);
}
*/

// 30. Requerir paquetes - require

/*
const fs = require('fs');

console.clear();
console.log('====================');
console.log('    Tabla del 4:   ');
console.log('====================');

const base = 4;
let salida = '';

for( let i = 1; i <= 10; i++){
    salida += `${base} * ${i} = ${ base*i }\n`;
}

console.log(salida);

console.log(' ↓ Metodo 1 ↓ ');

fs.writeFile( 'tabla-5.txt', salida, (err) => {
    if (err) throw err;
    console.log('El archivo tabla-5.txt ha sido salvado');
});

console.log(' ↓ Metodo 2 ↓ ');
fs.writeFile( `tabla-${base}.txt`, salida, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${base}.txt ha sido salvado`);
});

fs.writeFileSync( `tabla-${base}.txt`, salida );

console.log(`El archivo tabla-${base}.txt ha sido creado`);
*/

// 31. Importar archivos del proyecto

/*
const { crearArchivo } = require('./helpers/multiplicar');

console.clear();

const base = 6;

// Llama a la funcion multiplicar.js 
crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err)); 
*/

// 32. Recibir informacion desde linea de comando

/*
const { crearArchivo } = require('./helpers/multiplicar');

console.clear();

const [ , , arg3 = 'base=5'] = process.argv;
const [ , base = 5 ] = arg3.split('=');

// Llama a la funcion multiplicar.js 
crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));
*/

// 34. Yargs

/* 
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('yargs').argv;

console.clear();

console.log( process.argv );
console.log( argv );

console.log( 'base: yargs', argv.base ); 

// Llama a la funcion multiplicar.js 
crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));
*/

// 35. Configuraciones de Yargs

/*
const { option } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('yargs')
                        .option('b', {
                            alias: 'base',
                            type: 'number',
                            demandOption: true
                        })
                        .option('l', {
                            alias: 'listar',
                            type: 'boolean',
                            demandOption: true,
                            default: false
                        })
                        .check( (argv, options) => {
                            if(isNaN (argv.b)){
                                throw  'La base tiene que ser un numero.'
                            }
                            return true;
                        })
                        .argv;

console.clear();

// Llama a la funcion multiplicar.js 
crearArchivo(argv.b , argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'fue creado'))
    .catch(err => console.log(err));
*/

// 36. Configuraciones de Yargs Independientes

/* 
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

crearArchivo(argv.b , argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'fue creado'))
    .catch(err => console.log(err));
*/

// 37. Colores en consola

/* const { crearArchivo } = require('./helpers/multiplicar');
var colors = require('colors');
var colors = require('colors/safe');
const argv = require('./config/yargs');

console.clear();

crearArchivo(argv.b , argv.l)
    .then(nombreArchivo => console.log(nombreArchivo.america, 'fue creado'.rainbow))
    .catch(err => console.log(err));
*/

// 38. Tarea - Tabla hasta X numero

const { crearArchivo } = require('./helpers/multiplicar');
var colors = require('colors');
var colors = require('colors/safe');
const argv = require('./config/yargs');

console.clear();

crearArchivo(argv.b , argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.america, 'fue creado'.rainbow))
    .catch(err => console.log(err));