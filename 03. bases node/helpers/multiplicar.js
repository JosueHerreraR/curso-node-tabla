
// 31. Importar archivos del proyecto

/*
const fs = require('fs');

const crearArchivo = (base) => {
    
    return new Promise ( (resolve, reject) =>{
        console.log('====================');
        console.log('Tabla del:', base);
        console.log('====================');

        let salida = '';

        for( let i = 1; i <= 10; i++){
            salida += `${base} * ${i} = ${ base*i }\n`;
        }
        console.log(salida);
        fs.writeFileSync( `tabla-${base}.txt`, salida );

        resolve(`El archivo tabla-${base}.txt ha sido creado`);
    });

}

module.exports = {
    crearArchivo
}
*/ 

// 35. Configuraciones de Yargs

/*
const fs = require('fs');
const colors = require('colors/safe');

const crearArchivo = async(base = 5, listar = false) => {
    
    try {
            
        let salida = '';

        for( let i = 1; i <= 10; i++){
            salida += `${base} ${'*'.magenta} ${i} ${'='.magenta} ${ base*i }\n`;
        }

        if( listar ){
            console.log(colors.cyan('===================='));
            console.log(colors.green('     Tabla del:', colors.yellow(base)));
            console.log(colors.cyan('====================')); 
 
            console.log(salida);
        }

        fs.writeFileSync( `tabla-${base}.txt`, salida );

        return `El archivo tabla-${base}.txt`;

    } catch (err) {
        throw err;
    }

}

module.exports = {
    crearArchivo
}
*/

// 37. Colores en Consola y 38. Tarea - Tabla hasta X numero

const fs = require('fs');
const colors = require('colors/safe');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
    
    try {
            
        let salida = '';
        let consola = '';

        for( let i = 1; i <= hasta; i++){
            salida += `${base} * ${i} = ${ base * i }\n`;
            consola += `${base} ${'*'.magenta} ${i} ${'='.magenta} ${ base * i }\n`;

        }

        if( listar ){
            console.log(colors.cyan('===================='));
            console.log(colors.green('     Tabla del:', colors.yellow(base)));
            console.log(colors.cyan('====================')); 
 
            console.log(consola);
        }

        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida );

        return `El archivo tabla-${base}.txt`;

    } catch (err) {
        throw err;
    }

}

module.exports = {
    crearArchivo
}