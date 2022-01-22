/* Escreva um programa para ler o ano de nacimento de uma pesso e escrever uma menssagem que diga se ela poderá votar este ano(Não necessario considerar o mês que ela naceu) */

function validacaoIdade(){

	let anoNascimento = prompt("Digite sua data de nacimento: ");
	const ANOATUAL= 2021;
	let idade = ANOATUAL - anoNascimento;

	//validação de idade;
	if(idade == 18){
		alert("#DISPONIVEL PARA VOTAR.")
	}
	else if(idade >= 18){
		alert("#USUARIO MAIOR DE 18 DISPONIVEL PARA VOTO.")
	}
	else if(idade <= 18){
		alert("#USUARIO MENOR DE 18 AINDA NÃO DISPONIVEL PARA VOTAR.")
	}
}

validacaoIdade();