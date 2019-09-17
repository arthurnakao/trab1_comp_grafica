function divisao_da_matriz(matriz, num_divisao) {
    //Divisão da matriz para fazer in between
    for (var i = 0; i<matriz.length; i++) {
        for (var j = 0; j<matriz[i].length; j++) {
            matriz[i][j] = matriz[i][j]/num_divisao;            
        }
    }
    return matriz;
}

window.onload = function(){

    //Declarando o canvas e o context
    canvas = document.getElementById("canvas-1");
    ctx = canvas.getContext("2d");

    //variaveis das coordenadas de objetos 3d
    coord_star_2d = [[425, 0, 50], 
                     [295, 270, 50], 
                     [0, 310, 50], 
                     [213, 513, 50], 
                     [160, 805, 50], 
                     [425, 667, 50], 
                     [690, 805, 50], 
                     [635, 513, 50], 
                     [850, 310, 50], 
                     [555, 270, 50],
                     [425, 0, 400], 
                     [295, 270, 400], 
                     [0, 310, 400], 
                     [213, 513, 400], 
                     [160, 805, 400], 
                     [425, 667, 400], 
                     [690, 805, 400], 
                     [635, 513, 400], 
                     [850, 310, 400], 
                     [555, 270, 400]]
    arest_star_2d = [[0, 1], 
                     [1, 2], 
                     [2, 3], 
                     [3, 4], 
                     [4, 5], 
                     [5, 6], 
                     [6, 7], 
                     [7, 8], 
                     [8, 9], 
                     [9, 0],
                     [10, 11], 
                     [11, 12], 
                     [12, 13], 
                     [13, 14], 
                     [14, 15], 
                     [15, 16], 
                     [16, 17], 
                     [17, 18], 
                     [18, 19], 
                     [19, 10],
                     [0, 10],
                     [1, 11],
                     [2, 12],
                     [3, 13],
                     [4, 14],
                     [5, 15],
                     [6, 16],
                     [7, 17],
                     [8, 18],
                     [9, 19]]

    fac_star_2d = [] //A estrela ainda não tem as declarações de faces

    //Estrela
    forma_estrela_2d = new Forma(ctx, coord_star_2d, arest_star_2d, fac_star_2d);
    
    //Matriz transformação
    matriz_tilt = [ [Math.cos(Math.PI / 3), (Math.cos(Math.PI / 4) * Math.cos(Math.PI / 4)), -( Math.cos(Math.PI / 4) ) * Math.cos(Math.PI / 3), 0],
                    [0, Math.cos(Math.PI / 3), Math.cos(Math.PI / 4), 0],
                    [Math.cos(Math.PI / 4), -(Math.cos(Math.PI / 4) * Math.cos(Math.PI / 3)), Math.cos(Math.PI / 3) * Math.cos(Math.PI / 3), 0],
                    [0, 0, 0, 1] ]


    //Estrela com transformação
    forma_estrela_2d.transformar_2d(matriz_tilt);
    forma_estrela_2d.desenhar_linhas();
    

}