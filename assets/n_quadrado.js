/*
Número ao Quadrado
Leia um valor inteiro N. Apresente o quadrado de cada um dos valores pares, de 1 até N, inclusive N, se for o caso.

Entrada
A entrada contém um valor inteiro N (5 < N < 2000).

Saída
Imprima o quadrado de cada um dos valores pares, de 1 até N, conforme o exemplo abaixo.

Tome cuidado! Algumas linguagens tem por padrão apresentarem como saída 1e+006 ao invés de 1000000 o que ocasionará resposta errada. Neste caso, configure a precisão adequadamente para que isso não ocorra.

 
Exemplo de Entrada	Exemplo de Saída
6

Exemplo de Saída
2^2 = 4
4^2 = 16
6^2 = 36


Dado de entrada:
19
Saída esperada:
2^2 = 4
4^2 = 16
6^2 = 36
8^2 = 64
10^2 = 100
12^2 = 144
14^2 = 196
16^2 = 256
18^2 = 324

// a função gets() é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print
// () para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar
*/

let lines = gets().split('\n')
var N = parseInt(lines.shift())
i = 6
for (let i = 1; i <= N; i++) {
  if (i % 2 === 0) print(`${i}^2 = ${Math.pow(i, 2)}`)
}
