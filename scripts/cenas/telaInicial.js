class TelaInicial {
    constructor() {
        this.x = width / 2;
        this.y = height
    }

    draw() {
        this._imagemDeFundo();
        this._textoInicial();
        this._botao();
    }

    _imagemDeFundo() {
        image(imagemInicial, 0, 0, width, height);
    }

    _textoInicial() {
        fill(0);
        textFont(fonteInicial);
        strokeWeight(2);
        stroke(245, this.opacity);
        textAlign(CENTER);
        textSize(50);
        text('As aventuras da ', width / 2, height / 3);
        textSize(100);
        text('Menina ', width / 2, height / 5 * 3);
    }

    _botao() {
        botaoGerenciador.y = height / 7 * 5;
        botaoGerenciador.draw();
    }
}