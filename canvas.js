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