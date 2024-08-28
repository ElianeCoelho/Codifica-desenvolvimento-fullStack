/** Crie um menu interativo 
 *  no console que oferece ao usuário a 
 *  escolha de três opções.
*   Utilize switch-case para implementar 
*   a lógica de cada opção selecionada.
 * 
 */
const prompt = require('prompt');

// Função para exibir o menu e processar a escolha do usuário
function exibirMenu() {
    console.log("Escolha uma opção:");
    console.log("1. Exibir a data e hora atuais");
    console.log("2. Exibir uma mensagem de saudação");
    console.log("3. Sair");

    // Solicita a escolha do usuário
    prompt.get(['opcao'], function (err, result) {
        if (err) {
            console.error(err);
            return;
        }
        
        // Processa a escolha do usuário
        switch (result.opcao) {
            case '1':
                exibirDataHora();
                break;
            case '2':
                saudacao();
                break;
            case '3':
                console.log("Saindo...");
                return; // Encerra a execução do programa
            default:
                console.log("Opção inválida. Tente novamente.");
                exibirMenu(); // Exibe o menu novamente em caso de opção inválida
                break;
        }
    });
}

// Função para exibir a data e hora atuais
function exibirDataHora() {
    const dataHora = new Date();
    console.log(`Data e hora atuais: ${dataHora}`);
    exibirMenu(); // Exibe o menu novamente após a operação
}

// Função para exibir uma mensagem de saudação
function saudacao() {
    console.log("Olá! Espero que você esteja tendo um ótimo dia!");
    exibirMenu(); // Exibe o menu novamente após a operação
}

// Inicializa o módulo prompt
prompt.start();

// Exibe o menu ao iniciar o programa
exibirMenu();
