window.onload = function () {

    //Declarando o canvas e o context
    canvas = document.getElementById("canvas-1");
    ctx = canvas.getContext("2d");

    var matrizaux = new Matrizes();

    //variaveis das coordenadas da estrela 2d
    /*coord_star_2d = [[425, 10, 50],
                    [125, 10, 50],
                    [10, 125, 50],
                    [310, 225, 50],
                    [600, 125, 50],
                    [425, 10, 150],
                    [125, 10, 150],
                    [10, 125, 150],
                    [310, 225, 150],
                    [600, 125, 150],]*/

    coord_star_2d = [
        [0, 120, 0], //Esquerda
        [165, 0, 0], //Cima
        [325, 120, 0], //Direita
        [265, 310, 0], //Abaixo Direita
        [62, 310, 0], //Abaixo Esquerda

        [10, 120, 50], //Esquerda
        [165, 0, 50], //Cima
        [325, 120, 50], //Direita
        [265, 310, 50], //Abaixo Direita
        [62, 310, 50], //Abaixo Esquerda
    ]

    /*arest_star_2d = [[0, 1],
                    [1, 2],
                    [2, 3],
                    [3, 4],
                    [4, 0],
                    [5, 6],
                    [6, 7],
                    [7, 8],
                    [8, 9],
                    [9, 5],
                    [0, 5],
                    [1, 6],
                    [2, 7],
                    [3, 8],
                    [4, 9],]*/

    arest_star_2d = [
        [1, 0], //Liga Cima e Esquerda
        [0, 4], //Liga Esquerda e Abaixo Esquerda
        [4, 3], //Liga Abaixo Esquerda e Abaixo Direita
        [3, 2], //Liga Abaixo Direita e Direita
        [2, 1],  //Liga Direita e Cima
        //Declarações das areastas da parte da estrela que tem z = 0

        [6, 5], //Liga Cima e Esquerda
        [5, 9], //Liga Esquerda e Abaixo Esquerda
        [9, 8], //Liga Abaixo Esquerda e Abaixo Direita
        [8, 7], //Liga Abaixo Direita e Direita
        [7, 6], //Liga Direita e Cima
        //Declarações das arestas da parte da estrela que tem z = 50

        [0, 5], //Aresta da Esquerda
        [1, 6], //Aresta de Cima
        [2, 7], //Aresta Direita
        [3, 8], //Aresta Abaixo Direita
        [4, 9], //Aresta Abaixo Esquerda
    ]

    /*fac_star_2d = fac_star_2d = [[0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [0, 1, 5, 6],
    [1, 2, 6, 7],
    [2, 3, 7, 8],
    [3, 4, 8, 9],
    [0, 4, 5, 9]]*/
    
    fac_star_2d = [
        [0, 1, 2, 3, 4],
        [9, 8, 7, 6, 5],
        [10, 0, 11, 5], //Face Cima e Esquerda
        [14, 1, 10, 6], //Face Abaixo Esquerda e Esquerda
        [13, 3, 14, 7], //Face Abaixo Direita e Abaixo Esquerda
        [12, 3, 13, 8], //Face Direita e Abaixo Direita
        [11, 4, 12, 9]
    ]

    //Estrela
    forma_estrela_2d = new Forma(coord_star_2d, arest_star_2d, fac_star_2d);

    //Projetando a imagem
    projetor = new Projetor(ctx, [forma_estrela_2d], null);
  

    // matriz_tilt = [[Math.cos(Math.PI / 3), (Math.cos(Math.PI / 4) * Math.cos(Math.PI / 4)), -(Math.cos(Math.PI / 4)) * Math.cos(Math.PI / 3), 0],
    // [0, Math.cos(Math.PI / 3), Math.cos(Math.PI / 4), 0],
    // [Math.cos(Math.PI / 4), -(Math.cos(Math.PI / 4) * Math.cos(Math.PI / 3)), Math.cos(Math.PI / 3) * Math.cos(Math.PI / 3), 0],
    // [0, 0, 0, 1]]
    matrix_tilt = [[1,0,0,0],
                   [0,1,0.8,0],
                   [0,0,0.8,0],
                   [0,0,0,1]]
                   
    forma_estrela_2d.transformar_2d(matrix_tilt);

    var normal = forma_estrela_2d.normal_plano()
    this.console.log(normal)

    //projetor.projetar()
    //projetor.desenhaFinal(forma_estrela_2d)
    forma_estrela_2d.curva();
    projetor.desenhar_linhas(forma_estrela_2d)
    

 

}
