/*
2 / 3 - Polígonos Regulares Simples
 Básico
 Princípios Básicos
Na geometria Euclidiana, um polígono regular é um polígono em que todos os ângulos são iguais e todos os lados tem o mesmo comprimento. Um polígono simples é aquele cujos segmentos de reta não se interceptam. Abaixo pode-se ver vários mosaicos feitos por polígonos regulares.


Você deve escrever um programa que, dados o número e o comprimento dos lados de um polígono regular, mostre seu perímetro.

Entrada
A entrada tem dois inteiros positivos: N e L, que são, respectivamente, o número de lados e o comprimento de cada lado de um polígono regular (3 ≤ N ≤ 1000000 and 1 ≤ L ≤ 4000).

Saída
A saída é o perímetro P do polígono regular em uma única linha.

Exemplos de Entrada
3 1

Exemplos de Saída
3

Exemplos de Entrada
9 8

Exemplos de Saída
72

Exemplos de Entrada
1000000 1000

Exemplos de Saída
1000000000
*/

// A função gets() é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print() para imprimir a saída (output) de dados e já pula uma linha ("\n")
let lines = gets().split('\n')
let line = lines.shift().split(' ')

//TODO: Complete os espaços em branco com uma possível solução para o desafio

const N = parseFloat(line[0])
const L = parseFloat(line[1])
let P = N * L
print(P)
console.log(P)
