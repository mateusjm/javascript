let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`Nosso vetor possui ${num.length} posições`)
console.log(`O quarto valor do vetor em ordem crecente é o ${num[4]}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}
