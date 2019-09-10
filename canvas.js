function divisao_da_matriz(matriz, num_divisao) {
    //Divisão da matriz para fazer in between
    for (var i = 0; i<matriz.length; i++) {
        for (var j = 0; j<matriz[i].length; j++) {
            matriz[i][j] = matriz[i][j]/num_divisao;            
        }
    }
    return matriz;
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
    
    //Matriz transformação
    matriz = [
        [1, 0, 150],
        [0, 1, 0],
        [0, 0, 1]
    ];

    //Estrela com transformação
    forma_estrela_2d.transformar_2d(matriz);
    forma_estrela_2d.desenhar_linhas();

}