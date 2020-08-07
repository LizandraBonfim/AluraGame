function setup() {
    createCanvas(windowWidth, windowHeight);


    telaInicial = new TelaInicial();
    jogo = new Jogo();
    cenas = {
        jogo,
        telaInicial,
    };
    jogo.setup();
    botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2, height / 2);

    frameRate(40);
    //som.loop();
}

function keyPressed() {
    jogo.keyPressed(key);
}

function draw() {

    cenas[cenarioAtual].draw();
}