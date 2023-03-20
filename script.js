let n1= Number(prompt('Digite o primeiro número'))
let n2= Number(prompt('Digite o primeiro número'))

alert(`A soma dos dois números é: ${n1+n2}`)
alert(`A subtração dos dois números é: ${n1-n2}`)
alert(`A multiplicação dos dois números é: ${n1*n2}`)
alert(`A divisão dos dois números é: ${n1/n2}`)
alert(`O resto da divisão dos dois números é: ${n1%n2}`)

if ( ((n1+n2)%2) == 0 ){
  alert(`A soma dos dois números é par: ${n1+n2}`)
} else{
  alert(`A soma dos dois números é ímpar: ${n1+n2}`)
}

if (n1 == n2 ){
  alert("Os números inseridos são iguais")
} else{
  alert("A soma dos números são diferentes")
}