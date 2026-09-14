// Variáveis globais
let pontos = 0;
let numeroOculto = 0;

// Permite acionar o botão ao apertar "Enter"
document.getElementById('userGuess').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        validarResposta();
    }
});

// Função para gerar um novo desafio ao carregar o jogo
function gerarNovoDesafio() {
    // Sorteia o número que o usuário deve adivinhar (1 a 10)
    numeroOculto = Math.floor(Math.random() * 10) + 1;
    
    // Sorteia o multiplicador visível na tela (1 a 10)
    const multiplicador = Math.floor(Math.random() * 10) + 1;
    
    // Calcula o resultado final (ex: 7 * 6 = 42)
    const resultado = numeroOculto * multiplicador;

    // Atualiza a tela com a expressão "? x [multiplicador] = [resultado]"
    document.getElementById('challenge').innerText = `? x ${multiplicador} = ${resultado}`;
}

// Função para validar a tentativa do usuário
function validarResposta() {
    const inputElement = document.getElementById('userGuess');
    const resultElement = document.getElementById('result');
    const scoreElement = document.getElementById('score');

    const chute = parseInt(inputElement.value);

    // Validação da entrada
    if (isNaN(chute) || chute < 1 || chute > 10) {
        resultElement.className = "result-box errou";
        resultElement.innerHTML = "Digite um número válido de 1 a 10!";
        return;
    }

    // Verifica se acertou
    if (chute === numeroOculto) {
        pontos++; // Soma o ponto
        resultElement.className = "result-box acertou";
        resultElement.innerHTML = "VOCE ACERTOUUU";
    } else {
        resultElement.className = "result-box errou";
        resultElement.innerHTML = `ERRRROOOUUUUU! <br>(O número era ${numeroOculto})`;
    }

    // Atualiza a pontuação na tela
    scoreElement.innerText = pontos;

    // Limpa o campo de entrada
    inputElement.value = '';
    inputElement.focus();

    // Gera um novo problema para a próxima rodada
    gerarNovoDesafio();
}

// Inicia o primeiro desafio assim que a página carrega
gerarNovoDesafio();




































