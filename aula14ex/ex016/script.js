function contar() { 
// Defini o tipo de nome para chamar a função 'contar()'
    var inicio = document.getElementById('iini') 
    var fim = document.getElementById('ifim')
    var passo = document.getElementById('ipasso')
    var res = document.getElementById('res')
// Defini aonde as variaveis deveriam aparecer no HTML
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        //window.alert('[ERRO] Faltam dados!')
// If = se  

// Se as variaveis inicio, fim e passo tiverem o valor igual a 0 não seriam execultadas e apareceria a mensagem de erro
    } else {
        res.innerHTML = 'Contando: <br> '
// Nesse caso é possível adicionar tags pois o inner é HTML
        var i = Number(inicio.value)  
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
// Se o passo for 1, ele trava. Por isso esse mecanismo, para forçar o passo.
            window.alert('Passo inválido! Considerando, PASSO = 1')
            p =1
        }
// Primeiro, eu coloquei a mensagem 'Contando: ' para aparecer e defini as variaveis como números, incluindo o nome.value

// Value = o valor do nome
        if(i< f) {
// Contagem Crescente
            for(var c = i; c <= f; c += p) {
// A variavel c é o contador, ou seja a repetição do valor numerico

// c é o valor do inicio e quando c for menor ou igual o fim ele irá acrescentar um passo ao valor inicial até que seu valor chegue ao limite em relação ao fim
                res.innerHTML += `${c} \u{279E} `
// Aparecerá o valor do c, apos executar o comando 'for' e um emoji

        }
          
        } else {
// Contagem regressiva
            for(var c = i; c>= f; c -= p){
// c é o valor do inicio e quando c for maior ou igual o fim ele irá diminuir um passo ao valor inicial até que seu valor chegue ao limite em relação ao fim
                res.innerHTML += `${c} \u{279E} `
            }
        }

        res.innerHTML += `\u{1F3C1}`
// Aparecerá uma bandeira indicando o final
    }

}
