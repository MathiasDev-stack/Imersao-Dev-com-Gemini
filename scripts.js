// Array com dados dos jogadores (substitua com seus dados)
const jogadores = [
    { nome: 'Lucas moura', descricao: 'Atacante Brasileiro' },
    { nome: 'rafael', descricao: 'Goleiro Brasileiro' },
    { nome:'robert arboleda',descricao:  'zagueiro equatoriano'},
    // ... outros jogadores
];

// Função para realizar a busca
function buscarJogador() {
    const nomeBuscado = document.getElementById('nomeJogador').value.toLowerCase();
    const resultados = jogadores.filter(jogador => jogador.nome.toLowerCase().includes(nomeBuscado));

    // Exibir os resultados em um elemento com id "resultados"
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = ''; // Limpar resultados anteriores

    resultados.forEach(jogador => {
        const resultadoItem = document.createElement('div');
        resultadoItem.textContent = `${jogador.nome} - ${jogador.descricao}`;
        resultadosDiv.appendChild(resultadoItem);
    });
}
alert("PROJETO NAO FINALIZADO,EM ANDAMENTO.");