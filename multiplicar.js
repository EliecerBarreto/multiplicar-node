const fs = require('fs');
let colors = require('colors');
//const colors = require('colors/safe');

let listar = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) || (!Number(limite))) {
            reject('Base o limite no es numerico'.red);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base*i} \n`)
        }

        console.log('Tabla de multiplicar'.green);
        console.log(data.yellow);

    })

}


let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) || (!Number(limite))) {
            reject('No es un numero base o limite');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i} \n`);
        }


        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });




    })

}

module.exports = {
    crearArchivo,
    listar
};