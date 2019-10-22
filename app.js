//requireds
//const multiplicar = require('./multiplicar');

const argv = require('./config/yargs').argv;

const { crearArchivo, listar } = require('./multiplicar');

//console.log(multiplicar);

//console.log(process.argv);

let argv2 = process.argv;

//console.log(argv.limite);
let comando = argv._[0];
console.log(comando);

switch (comando) {
    case 'listar':
        console.log('Listar');
        console.log(argv.base);
        console.log(argv.limite);
        listar(argv.base, argv.limite).then(data => console.log(data))
            .catch(e => console.log(e));
        break;
    case 'crear':
        console.log('Crear');
        console.log(argv.base);
        console.log(argv.limite);
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`el archivo ${archivo} fue creado`))
            .catch(e => console.log(e));
    default:
        console.log('object');
        break;
}


console.log(argv);

//let parametro = argv[2];
//console.log(parametro);

//let base = parametro.split('=')[1];



//crearArchivo(base).then(archivo => console.log(`el archivo ${archivo} fue creado`))
//   .catch(e => console.log(e));