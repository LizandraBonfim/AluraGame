function preload() {
    imagemInicial = loadImage('http://127.0.0.1:5500/assets/imagens/assets/telaInicial.png');
    fonteInicial = loadFont('http://127.0.0.1:5500/assets/imagens/assets/fonteTelaInicial.otf');
    fita = loadJSON('http://127.0.0.1:5500/fita/fita.json');
    imagemCenario = loadImage('http://127.0.0.1:5500/assets/imagens/cenario/floresta.png');
    imagemCenario2 = loadImage('http://127.0.0.1:5500/assets/imagens/cenario/cenario2.jpg');
    imagemPersonagem = loadImage('http://127.0.0.1:5500/assets/imagens/personagem/correndo.png');
    imagemInimigo = loadImage('http://127.0.0.1:5500/assets/imagens/inimigos/gotinha.png');
    som = loadSound('http://127.0.0.1:5500/assets/sons/trilha_jogo.mp3');
    somPula = loadSound('http://127.0.0.1:5500/assets/sons/somPulo.mp3');
    imagemInimigoGrande = loadImage('http://127.0.0.1:5500/assets/imagens/inimigos/troll.png');
    imagemInimigoVoador = loadImage('http://127.0.0.1:5500/assets/imagens/inimigos/gotinha-voadora.png');
    imagemGameOver = loadImage('http://127.0.0.1:5500/assets/imagens/assets/game-over.png');
    imagemVida = loadImage('http://127.0.0.1:5500/assets/imagens/assets/coracao.png');
}