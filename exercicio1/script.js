const numero = Number(prompt("Digite um número"))

if (numero % 2 === 0) {
    if (numero % 3 === 0) {
        console.log(`Esse numero ${numero} e divisível por 2 ou por 3 `)
    } else if (!(numero % 3 === 0)) {
        console.log(`Esse numero ${numero} e divisível por 2 ou por 3 `)
    }
} else if (!(numero % 2 === 0)) {
    if (numero % 3 === 0) {
        console.log(`Esse numero ${numero} e divisível por 2 ou por 3 `)
    } else {
        console.log(`Esse numero ${numero} não e divisível por 2 ou por 3  `)
    }
}


if(numero%2==0 || numero%3==0){
    console.log('É divisivel por 2 ou por 3');
}else {
    console.log('Não é divisivel por 2 ou por 3');
}
