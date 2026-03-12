# Programação Modular

Parte reusável de código. Existem módulos de vários tamanhos. Com módulos pequenos se criam módulos maiores. (engenharia).

Procedimento (procedure), rotina (routine), funções (functions), métodos (methods), etc.

É ter uma operação que receba dados de entrada e com isso compute uma saída.

input                -> função -> output
parâmetro e1, e2, e3 -> f -> retorno

A sintaxe varia de acordo com a plataforma/linguagem.

Linguagem GO:
func add(x int, y int) int
Kotlin
fun add(x: Int, y: Int): Int
PHP
function add($x, $y)
...


## Anatomia de uma Função


```text
// parâmetro opcional
// retorno opcional
função nome_da_função(parametro1, parametro2, parametron) {
    retorna algo
}

```

### JavaScript

```js

function multiplica(par1, par2) {
    var resultado = par1 * par2
    return resultado
}

```

dada uma entrada -> promete uma saída
"   sdfsdf" -> f -> "sdfsdf"
