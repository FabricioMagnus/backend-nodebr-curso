/*
0 obter um usuario
1 Obter um número do telefone do usuário a partir do id
2 Obter o endereço do usuário a partir do id
*/

function obterUsuario(callback){
    setTimeout( ()=> {
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    },1000)
}

function obterTelefone(id, callback){
    setTimeout( ()=> {
        return callback(null, {
            ddd: 11,
            numero: '98765-4321'
        })
    },2000)
}

function obterEndereço(id, callback){
    setTimeout( ()=> {
        return callback (null, {
            rua: 'Rua dos Bobos',
            numero: 0
        })
    },2000)
}

function resolverUsuario(erro,usuario){
    console.log('Usuário: ', usuario)    
}

obterUsuario(function resolverUsuario(erro, usuario){
    if (erro){
        console.log('Deu ruim: ', erro)
    }
    obterTelefone(usuario.id, (erro1, telefone) => {
            if (erro1) {
                console.log('Deu ruim: ', erro1)
            }
            obterEndereço(usuario.id, function resolverEndereço(erro2, endereço) {
                if (erro2) {
                    console.log('Deu ruim: ', erro2)
                }

                console.log(`
            Nome: ${usuario.nome},
            Telefone: (${telefone.ddd}) ${telefone.numero}
            Endereço: ${endereço.rua}, ${endereço.numero}
            `)
            })
        })
})

const usuario = obterUsuario()
// const telefone = obterTelefone(usuario.id)

// console.log('Telefone: ', telefone)