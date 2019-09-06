class Forma { 
    constructor(ctx, array_coordenadas, array_arestas, array_faces) {
        this.coordenadas = array_coordenadas; //Array de Arrays (Tamanho 2), que tem o (x, y) de cada vértice da figura.
        this.arestas = array_arestas; //Array de Arrays (Tamanho 2), que tem o index das coordenadas que devem ser ligadas por um aresta
        this.faces = array_faces; //Array de Arrays (Tamanho Variavel) que tem o index das arestas que devem ser colocadas para formar uma face
        this.ctx = ctx; //Context
    }
    
    //Definição do método que desenha todas as arestas da forma
    desenhar_linhas() {

        this.ctx.beginPath()

        //For para desenhar todas as arestas
        for(var i = 0; i<this.arestas.length; i++) {
            //Posiciona o cursor nas coordenadas definidas pelo primeiro vertice da aresta
            this.ctx.moveTo(this.coordenadas[this.arestas[i][0]][0], this.coordenadas[this.arestas[i][0]][1])
            //Desenha uma linha até o segundo vértice da aresta
            this.ctx.lineTo(this.coordenadas[this.arestas[i][1]][0], this.coordenadas[this.arestas[i][1]][1])
        }

        //Método que desenha tudo que foi "demarcado" na tela
        this.ctx.stroke()
        this.ctx.closePath()

    }

    //Função para fazer transformação em objetos 2d
    //A matriz transformação deve ter uma cara parecida com: 
    //matriz_transf = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
    //Após a utilização dessa função, ainda devemos desenhar os vertices na tela, ele nao faz isso automaticamente
    transformar_2d(matriz_transf) {
        //A variavel array receberá o vetor com as coordenadas do objeto e a coordenada homogenea
        var array = []

        //Aplicando a transformação em todas as coordenadas da forma
        for(var i = 0; i<this.coordenadas.length; i++) {

            array = [this.coordenadas[i][0], this.coordenadas[i][1], 1]

            //Multiplicação de matrizes 
            array[0] = array[0] * matriz_transf[0][0] + array[0] * matriz_transf[1][0] + array[0] * matriz_transf[2][0]
            array[1] = array[1] * matriz_transf[0][1] + array[1] * matriz_transf[1][1] + array[1] * matriz_transf[2][1]
            array[2] = array[2] * matriz_transf[0][2] + array[2] * matriz_transf[1][2] + array[2] * matriz_transf[2][2]
        
            //Fazendo os valores das coordenadas serem atualizados depois da transformação
            this.coordenadas[i][0] = array[0]/array[2]
            this.coordenadas[i][1] = array[1]/array[2]
        }
    }
}

window.onload=function(){

    //Declarando o canvas e o context
    canvas = document.getElementById("canvas-1");
    ctx = canvas.getContext("2d");

    //variaveis das coordenadas da estrela 2d
    coord_star_2d = [[425, 0], [295, 270], [0, 310], [213, 513], [160, 805], [425, 667], [690, 805], [635, 513], [850, 310], [555, 270]]
    arest_star_2d = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 0]]
    fac_star_2d = [] //A estrela ainda não tem as declarações de faces

    //Estrela
    forma_estrela_2d = new Forma(ctx, coord_star_2d, arest_star_2d, fac_star_2d);
    forma_estrela_2d.desenhar_linhas();
    
}