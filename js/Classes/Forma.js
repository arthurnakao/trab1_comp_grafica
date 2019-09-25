class Forma { 
    constructor(array_coordenadas, array_arestas, array_faces) {
        this.coordenadas = array_coordenadas; //Array de Arrays (Tamanho 2), que tem o (x, y) de cada vértice da figura.
        this.arestas = array_arestas; //Array de Arrays (Tamanho 2), que tem o index das coordenadas que devem ser ligadas por um aresta
        this.faces = array_faces; //Array de Arrays (Tamanho Variavel) que tem o index das arestas que devem ser colocadas para formar uma face
        this.a1 = this.coordenadas;
    }
    
    //Definição do método que desenha todas as arestas da forma
    

    //Função para fazer transformação em objetos 2d
    //A matriz transformação deve ter uma cara parecida com: 
    //matriz_transf = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
    //Após a utilização dessa função, ainda devemos desenhar os vertices na tela, ele nao faz isso automaticamente
    transformar_2d(matriz_transf) {
        //A variavel array receberá o vetor com as coordenadas do objeto e a coordenada homogenea
        var array = []
        var array_novo = []

        //Aplicando a transformação em todas as coordenadas da forma
        for(var i = 0; i<this.coordenadas.length; i++) {

            array = [this.coordenadas[i][0], this.coordenadas[i][1], this.coordenadas[i][2], 1]

            //Multiplicação de matrizes 
            array_novo[0] = array[0] * matriz_transf[0][0] + array[1] * matriz_transf[0][1] + array[2] * matriz_transf[0][2] + array[3] * matriz_transf[0][3]
            array_novo[1] = array[0] * matriz_transf[1][0] + array[1] * matriz_transf[1][1] + array[2] * matriz_transf[1][2] + array[3] * matriz_transf[1][3]
            array_novo[2] = array[0] * matriz_transf[2][0] + array[1] * matriz_transf[2][1] + array[2] * matriz_transf[2][2] + array[3] * matriz_transf[2][3]
            array_novo[3] = array[0] * matriz_transf[3][0] + array[1] * matriz_transf[3][1] + array[2] * matriz_transf[3][2] + array[3] * matriz_transf[3][3]
        
            //Fazendo os valores das coordenadas serem atualizados depois da transformação
            this.coordenadas[i][0] = array_novo[0] / array_novo[3]
            this.coordenadas[i][1] = array_novo[1] / array_novo[3]
            this.coordenadas[i][2] = array_novo[2] / array_novo[3]
            this.coordenadas[i][2] = array_novo[3] / array_novo[3]
        }
    }
}