// strings (corda, linha, fios, ..) são imutáveis
//         012345678901234567..
var str = "   Programação Modular"
var str2 = negrito(aparar(str))
console.log(str2)

function aparar(texto) { // parâmetro (entrada)
    var resp = "" // saída que será computada
    for (var i = 0; i < texto.length; i++) {
        if (texto[i] != " ") {
            resp += texto[i]
        }
    }
    return resp
}

function negrito(texto) {
    return `<b>${texto}</b>`
}



/*
console.log(str.length) // "Programação"
console.log(str[0]) // primeiro
console.log(str[str.length - 1]) // último
console.log(str[6])
console.log(str[16])
*/
