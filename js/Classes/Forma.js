class Forma { 
    constructor(array_coordenadas, array_arestas, array_faces) {
        this.coordenadas = array_coordenadas; //Array de Arrays (Tamanho 2), que tem o (x, y) de cada vértice da figura.
        this.arestas = array_arestas; //Array de Arrays (Tamanho 2), que tem o index das coordenadas que devem ser ligadas por um aresta
        this.faces = array_faces; //Array de Arrays (Tamanho Variavel) que tem o index das arestas que devem ser colocadas para formar uma face
        this.a1 = this.coordenadas;
        this.x = 0;
        this.y = 0;
        this.z = 0;
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
    
    /*
    
    coord_star_2d = [[425, 10, 50],
                    [125, 10, 50],
                    [10, 125, 50],
                    [600, 125, 50],
                    [425, 10, 150],
                    [125, 10, 150],
                    [10, 125, 150],
                    [600, 125, 150],]

    arest_star_2d = [[0, 1],
                    [1, 2],
                    [2, 3],
                    [3, 0],
                    [4, 5],
                    [5, 6],
                    [6, 7],
                    [7, 4],
                    [0, 4],
                    [1, 5],
                    [2, 6],
                    [3, 7]]
    fac_star_2d = [[0, 1, 2, 3],
                   [4, 5, 6, 7],
                   [8, 4, 5, 10],
                   [9, 5, 6, 11]]
    
    */
    
    //Função para encontrar vetor normal ao plano
    normal_plano() {

        var vetor_normais = []

        for (var i = 0; i<this.faces.length; i++) {
            //Subtrai pontos para encontrar os vetores do plano
            var vetor1 = [(this.coordenadas[this.arestas[this.faces[i][0]][1]][0] - this.coordenadas[this.arestas[this.faces[i][0]][0]][0]), //coord[1][0] - coord[0][0] 
                          (this.coordenadas[this.arestas[this.faces[i][0]][1]][1] - this.coordenadas[this.arestas[this.faces[i][0]][0]][1]), //coord[1][1] - coord[0][1]
                          (this.coordenadas[this.arestas[this.faces[i][0]][1]][2] - this.coordenadas[this.arestas[this.faces[i][0]][0]][2])] //coord[1][2] - coord[0][2]
            
            var vetor2 = [(this.coordenadas[this.arestas[this.faces[i][1]][1]][0] - this.coordenadas[this.arestas[this.faces[i][1]][0]][0]), //coord[2][0] - coord[1][0]
                          (this.coordenadas[this.arestas[this.faces[i][1]][1]][1] - this.coordenadas[this.arestas[this.faces[i][1]][0]][1]), //coord[2][1] - coord[1][1]
                          (this.coordenadas[this.arestas[this.faces[i][1]][1]][2] - this.coordenadas[this.arestas[this.faces[i][1]][0]][2])] //coord[2][2] - coord[1][2]

            //Armazena informaçoes para fazer o calculo da normal atraves da matriz determinante
            var matriz_det = [[1, -1, 1], 
                             [vetor1[0], vetor1[1], vetor1[2]], 
                             [vetor2[0], vetor2[1], vetor2[2]]]
            //console.log(matriz_det)
            
            //Calcula a normal usando determinante
            var normal = [(matriz_det[0][0]*(matriz_det[1][1]*matriz_det[2][2] - matriz_det[1][2]*matriz_det[2][1])), 
                          (matriz_det[0][1]*(matriz_det[1][0]*matriz_det[2][2] - matriz_det[1][2]*matriz_det[2][0])), 
                          (matriz_det[0][2]*(matriz_det[1][0]*matriz_det[2][1] - matriz_det[1][1]*matriz_det[2][0]))]

            vetor_normais.push(normal)
        }

        return vetor_normais
    }
/*
    calcula_intensidade() {
        var intensidade = iamb + (idiff*iluz*produtoVet) + (iespec*prodReflet) 
    }
*/


curva(){
    var aux = []
    var xi = this.coordenadas[0][0];
    var yi = this.coordenadas[0][1];
    var zi = 0;
    var xf = this.coordenadas[1][0];
    var yf = this.coordenadas[1][1];
    var zf = 0;
    var u = 0;
    var j = 1;
    var aux2 = [];
    for(var i = 0.01; i <= 0.1 ; i += 0.01){
        var resultadoX = Math.pow(1-i, 3)*xi + 3*Math.pow(1-i, 2)*i*60 + 3*(1-i)*Math.pow(i, 2)*80 + Math.pow(i, 3)*xf;
        var resultadoY = Math.pow(1-i, 3)*yi + 3*Math.pow(1-i, 2)*i*60 + 3*(1-i)*Math.pow(i, 2)*80 + Math.pow(i, 3)*yf;
        
        aux = [resultadoX, resultadoY,0];
        this.coordenadas.push(aux)
        if(i == 0.01){
            this.arestas[0][1] = this.coordenadas.length - 1;
            aux2.push(this.arestas[0][1])
            

           
        }
        else{
            this.arestas.push([u, this.coordenadas.length - 1])
        }
        u = this.coordenadas.length - 1;
        console.log(u)

            
        //this.coordenadas.splice(1, 0, aux);

       
    }
    this.arestas.push([this.coordenadas.length - 1, 0]);
    console.log(this.coordenadas);
    console.log(this.arestas);


         
    
    
}



}