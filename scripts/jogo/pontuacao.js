class Pontuacao{
    constructor(){
        this.pontos = 0;

    }

    exibe(){
        fill('#fff')
        textSize(40);
        text(parseInt(this.pontos), width - 30, 50);
    }

    adicionaPonto(){
        this.pontos = this.pontos + 0.2;
    }
}