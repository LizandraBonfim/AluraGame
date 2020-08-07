class Jogo {
    constructor() {
        this.inimigoAtual = 0;
        this.indice = 0;
        this.mapa = fita.mapa;

    }
    setup() {

        pontuacao = new Pontuacao();
        if(pontuacao.pontos < 30){

            cenario = new Cenario(imagemCenario, 5);
        }

        console.log(pontuacao.pontos);


        vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);

        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10);
        const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10);
        const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 10);

        inimigos.push(inimigo)
        inimigos.push(inimigoGrande)
        inimigos.push(inimigoVoador);

    

    }

    keyPressed(key) {
        if (key === 'ArrowUp') {
            personagem.pula();
            somPula.play();
        }
    }

    draw() {
        cenario.exibe();
        cenario.move();

        pontuacao.exibe();
        pontuacao.adicionaPonto();

        vida.draw();

        personagem.aplicaGravidade();
        personagem.exibe();

        if(pontuacao.pontos >= 30){
            // cenario.velocidade = 10;
            this.mapa.velocidade += 20 ;
            cenario2 = new Cenario(imagemCenario2, 5);
        }

        if(pontuacao.pontos >= 50){
            cenario.velocidade = 15;
            this.mapa.velocidade = +10 ;
        }


        const linhaAtual = this.mapa[this.indice]
        const inimigo = inimigos[linhaAtual.inimigo];
        const inimigoVisivel = inimigo.x < - inimigo.largura;


        inimigo.exibe();
        inimigo.move();

        if (inimigoVisivel) {
            this.indice++;
            inimigo.aparece();

            if (this.indice > this.mapa.length - 1) {
                this.indice = 0;
            }

            inimigo.velocidade = linhaAtual.velocidade;
        }

        if (personagem.estaColidindo(inimigo)) {
            vida.perdeVida();
            personagem.ficaInvencivel();

            

            if (vida.vidas === 0) {

                image(imagemGameOver, width / 2 - 200, height / 2);
                noLoop();
            }
        }
    }
}