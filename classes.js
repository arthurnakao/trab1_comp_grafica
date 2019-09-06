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