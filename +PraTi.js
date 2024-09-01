//Aluno: Rodrigo Balestrin

//Exercício 1
const verificarParOuImpar = () => {
    const numero = parseInt(prompt("Digite um número inteiro: "), 10);
    if (numero % 2 === 0) {
        console.log(`${numero} é par.`);
    } else {
        console.log(`${numero} é ímpar.`);
    }
};

//Exercício 2
const classificarIdade = () => {
    const idade = parseInt(prompt("Digite a idade: "), 10);
    if (idade >= 0 && idade <= 12) {
        console.log("Criança");
    } else if (idade >= 13 && idade <= 17) {
        console.log("Adolescente");
    } else if (idade >= 18 && idade <= 64) {
        console.log("Adulto");
    } else if (idade >= 65) {
        console.log("Idoso");
    } else {
        console.log("Idade inválida.");
    }
};

//Exercício 3
const classificarNota = () => {
    const nota = parseFloat(prompt("Digite a nota (0 a 10): "));
    if (nota >= 7) {
        console.log("Aprovado");
    } else if (nota >= 5) {
        console.log("Recuperação");
    } else if (nota >= 0) {
        console.log("Reprovado");
    } else {
        console.log("Nota inválida.");
    }
};


//Exercício 4
const menuInterativo = () => {
    console.log("Escolha uma opção:");
    console.log("1. Opção A");
    console.log("2. Opção B");
    console.log("3. Opção C");
    const opcao = prompt("Digite o número da opção desejada: ");
    switch (opcao) {
        case '1':
            console.log("Você escolheu a Opção A.");
            break;
        case '2':
            console.log("Você escolheu a Opção B.");
            break;
        case '3':
            console.log("Você escolheu a Opção C.");
            break;
        default:
            console.log("Opção inválida.");
    }
};

//Exercício 5
const calcularIMC = () => {
    const peso = parseFloat(prompt("Digite seu peso (em kg): "));
    const altura = parseFloat(prompt("Digite sua altura (em metros): "));
    const imc = peso / (altura * altura);

    console.log(`Seu IMC é: ${imc.toFixed(2)}`);
    if (imc < 18.5) {
        console.log("Baixo peso");
    } else if (imc < 24.9) {
        console.log("Peso normal");
    } else if (imc < 29.9) {
        console.log("Sobrepeso");
    } else {
        console.log("Obesidade");
    }
};


//Exercício 6
const verificarTriangulo = () => {
    const A = parseFloat(prompt("Digite o lado A: "));
    const B = parseFloat(prompt("Digite o lado B: "));
    const C = parseFloat(prompt("Digite o lado C: "));

    if (A < B + C && B < A + C && C < A + B) {
        if (A === B && B === C) {
            console.log("Triângulo Equilátero");
        } else if (A === B || A === C || B === C) {
            console.log("Triângulo Isósceles");
        } else {
            console.log("Triângulo Escaleno");
        }
    } else {
        console.log("Não é um triângulo válido.");
    }
};


//Exercício 7
const calcularPrecoMacas = () => {
    const quantidade = parseInt(prompt("Digite o número de maçãs compradas: "), 10);
    const preco = quantidade < 12 ? 0.30 : 0.25;
    const total = quantidade * preco;
    console.log(`Valor total da compra: R$ ${total.toFixed(2)}`);
};


//Exercício 8
const ordenarValores = () => {
    let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
    let valor2 = parseFloat(prompt("Digite o segundo valor: "));

    if (valor1 > valor2) [valor1, valor2] = [valor2, valor1];  // Troca valores se necessário
    console.log(`Valores em ordem crescente: ${valor1}, ${valor2}`);
};


//Exercício 9
const contagemRegressiva = () => {
    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }
};


//Exercício 10
const escreverNumero = () => {
    const numero = parseInt(prompt("Digite um número: "), 10);
    for (let i = 0; i < 10; i++) {
        console.log(numero);
    }
};


//Exercício 11
const somarNumeros = () => {
    let soma = 0;
    for (let i = 1; i <= 5; i++) {
        soma += parseFloat(prompt(`Digite o número ${i}: `));
    }
    console.log(`A soma total é: ${soma}`);
};


//Exercício 12
const exibirTabuada = () => {
    const numero = parseInt(prompt("Digite um número para a tabuada: "), 10);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
};


//Exercício 13
const calcularMedia = () => {
    let soma = 0, contador = 0, numero;
    do {
        numero = parseFloat(prompt("Digite um número (0 para sair): "));
        if (numero !== 0) {
            soma += numero;
            contador++;
        }
    } while (numero !== 0);

    if (contador > 0) {
        console.log(`Média: ${(soma / contador).toFixed(2)}`);
    } else {
        console.log("Nenhum número foi inserido.");
    }
};


//Exercício 14
const calcularFatorial = () => {
    let numero = parseInt(prompt("Digite um número: "), 10);
    let fatorial = 1;

    for (let i = numero; i > 1; i--) {
        fatorial *= i;
    }

    console.log(`O fatorial de ${numero} é: ${fatorial}`);
};


//Exercício 15
const fibonacci = () => {
    let n1 = 0, n2 = 1, proximo;
    console.log(n1);
    console.log(n2);

    for (let i = 2; i < 10; i++) {
        proximo = n1 + n2;
        console.log(proximo);
        n1 = n2;
        n2 = proximo;
    }
};



