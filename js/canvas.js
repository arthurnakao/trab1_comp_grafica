window.onload = function () {

    //Declarando o canvas e o context
    canvas = document.getElementById("canvas-1");
    ctx = canvas.getContext("2d");

    var matrizaux = new Matrizes();

    //variaveis das coordenadas da estrela 2d
    coord_star_2d = [[425 / 10, 0, 50 / 10],
    [295 / 10, 270 / 10, 50 / 10],
    [0, 310 / 10, 50 / 10],
    [213 / 10, 513 / 10, 50 / 10],
    [160 / 10, 805 / 10, 50 / 10],
    [425 / 10, 667 / 10, 50 / 10],
    [690 / 10, 805 / 10, 50 / 10],
    [635 / 10, 513 / 10, 50 / 10],
    [850 / 10, 310 / 10, 50 / 10],
    [555 / 10, 270 / 10, 50 / 10],
    [425 / 10, 0, 400 / 10],
    [295 / 10, 270 / 10, 400 / 10],
    [0, 310 / 10, 400 / 10],
    [213 / 10, 513 / 10, 400 / 10],
    [160 / 10, 805 / 10, 400 / 10],
    [425 / 10, 667 / 10, 400 / 10],
    [690 / 10, 805 / 10, 400 / 10],
    [635 / 10, 513 / 10, 400 / 10],
    [850 / 10, 310 / 10, 400 / 10],
    [555 / 10, 270 / 10, 400 / 10]]
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

    //Colocando coordenada homogênea nos vetores da Forma
    for (var i = 0; i < forma_estrela_2d.coordenadas.length; i++) {
        forma_estrela_2d.coordenadas[i][3] = 1;
    }

    var x = 1;
    var matrizaux = new Matrizes();
    escalaX = new Escala([[0.5, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]], 0, 50);
    escalaY = new Escala([[1, 0, 0, 0], [0, 0.5, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]], 0, 50);
    escalaZ = new Escala([[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 0.5, 0], [0, 0, 0, 1]], 0, 50);
    translacaoX = new Translacao([[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [150, 0, 0, 1]], 50, 200);
    translacaoY = new Translacao([[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 400, 0, 1]], 50, 200);
    translacaoZ = new Translacao([[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 100, 1]], 50, 200);
    cisalhamento1 = new Cizalhamento([[1, 2, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]], 200, 250);
    cisalhamento2 = new Cizalhamento([[1, 0, 0, 0], [0, 1, 2, 0], [0, 0, 1, 0], [0, 0, 0, 1]], 200, 250);
    cisalhamento3 = new Cizalhamento([[1, 0, 0, 0], [0, 1, 0, 0], [2, 0, 1, 0], [0, 0, 0, 1]], 200, 250);
    translacao2 = new Translacao([[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [150, 0, 0, 1]], 250, 300);
    var total = [
        escalaX.criadorDeInbetween(), 
        escalaY.criadorDeInbetween(), 
        escalaZ.criadorDeInbetween(), 
        translacaoX.criadorDeInbetween(), 
        translacaoY.criadorDeInbetween(), 
        translacaoZ.criadorDeInbetween(),
        cisalhamento1.criadorDeInbetween(),
        cisalhamento2.criadorDeInbetween(),
        cisalhamento3.criadorDeInbetween(),
        translacao2.criadorDeInbetween()
    ];

    function animacao() {
        var aux =[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]
        for(var i = 0; i<total.length;i++){
            if(total[i][x] != undefined) {
                aux = matrizaux.multiplicacao(aux,total[i][x]);
            }
        }
        
/*
        let menor_x = forma_estrela_2d.a1[0][0];
        let menor_y = forma_estrela_2d.a1[0][1];
        for(let i=0; i<forma_estrela_2d.coordenadas.length;i++){
            if (forma_estrela_2d.a1[i][0]<menor_x)
            menor_x = forma_estrela_2d.a1[i][0];
            if (forma_estrela_2d.a1[i][1]<menor_y)
            menor_y = forma_estrela_2d.a1[i][1];
        }
*/

/*           
        //Movendo a estrela para o (0, 0) para poder fazer a transformação
        for(let i=0; i<forma_estrela_2d.coordenadas.length;i++){
            forma_estrela_2d.a1[i][0] -= menor_x;
            forma_estrela_2d.a1[i][1] -= menor_y;
        }
*/

        //Aplicando as transformações
        forma_estrela_2d.a1 = matrizaux.multiplicacao(forma_estrela_2d.coordenadas,aux)
        x = x + 1;

/*
        //Movendo a estrela de volta para sua posição atual depois da transformação
        for(let i=0; i<forma_estrela_2d.coordenadas.length;i++){
           forma_estrela_2d.a1[i][0] += menor_x;
           forma_estrela_2d.a1[i][1] += menor_y;
        }
*/

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        projetor.projetar();
    }

    setInterval(animacao, 41.6666666667) //A função é executada em cada frame, tendo cada frame o valor de 1/24 segundos

}