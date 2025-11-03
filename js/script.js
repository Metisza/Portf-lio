const botoes = document.querySelectorAll('.empresa');
const conteudos = document.querySelectorAll('.conteudo');

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    botoes.forEach(b => b.classList.remove('ativa'));
    botao.classList.add('ativa');

    conteudos.forEach(c => c.classList.remove('ativo'));
    document.getElementById(botao.dataset.empresa).classList.add('ativo');
  });
});
