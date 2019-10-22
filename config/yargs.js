const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 7
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime tabla de  muliplicar', opts)
    .command('crear', 'Imprime tabla de  muliplicar', opts)
    .help()
    .argv;


module.exports = {
    argv
}