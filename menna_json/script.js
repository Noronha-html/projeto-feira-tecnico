// Objeto com as informações do personagem
const personagem = {
    nome: "Batman",
    idade: 20,
    poder: "Ser rico"
 };
 // Referências aos botões e à área de resultado
 const botaoNome = document.getElementById('botaoNome');
 const botaoIdade = document.getElementById('botaoIdade');
 const botaoPoder = document.getElementById('botaoPoder');
 const resultado = document.getElementById('resultado');
 // Função para mostrar o nome
 botaoNome.addEventListener('click', () => {
    resultado.textContent = 'Nome do personagem: ' + personagem.nome;
 });
 // Função para mostrar a idade
 botaoIdade.addEventListener('click', () => {
    resultado.textContent = 'Idade do personagem: ' + personagem.idade + ' anos';
 });
 // Função para mostrar o poder
 botaoPoder.addEventListener('click', () => {
    resultado.textContent = 'Poder do personagem: ' + personagem.poder;
 });